'use client'

import { useEffect, useRef } from 'react'
import './ShatterType.css'

const clamp = (v, a, b) => Math.min(b, Math.max(a, v))
const lerp = (a, b, t) => a + (b - a) * t
const easeOutCubic = (t) => 1 - (1 - t) ** 3

function hash(n) {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453
  return x - Math.floor(x)
}

function parseColor(input, fallback = '#ffffff') {
  if (!input || typeof input !== 'string') return fallback
  return input
}

function buildFont(family, weight, size) {
  const stack = family?.trim() || 'system-ui, sans-serif'
  return `${weight} ${size}px ${stack}`
}

function layoutText(ctx, text, fontSize, letterSpacing, lineHeight, align, verticalAlign, width, height) {
  const lines = String(text).split('\n')
  ctx.font = buildFont(ctx._fontFamily, ctx._fontWeight, fontSize)
  ctx.textBaseline = 'alphabetic'
  ctx.textAlign = 'left'

  const spacingPx = letterSpacing * fontSize
  const measureLine = (line) => {
    if (!spacingPx) return ctx.measureText(line).width
    let w = 0
    const chars = Array.from(line)
    chars.forEach((ch, i) => {
      w += ctx.measureText(ch).width
      if (i < chars.length - 1) w += spacingPx
    })
    return w
  }

  let size = fontSize
  if (size <= 0) {
    size = 120
    // top 对齐时按「可视标题高度」适配，忽略下方留给碎片飞散的延伸区
    const usableH =
      verticalAlign === 'top' ? Math.min(height, Math.max(160, width * 0.36)) : height
    for (let i = 0; i < 8; i++) {
      ctx.font = buildFont(ctx._fontFamily, ctx._fontWeight, size)
      const maxW = Math.max(...lines.map(measureLine), 1)
      const blockH = lines.length * size * lineHeight
      const fitH = verticalAlign === 'top' ? 0.98 : 0.82
      const fit = Math.min((width * 0.96) / maxW, (usableH * fitH) / blockH)
      size = Math.max(18, size * fit)
    }
  }

  ctx.font = buildFont(ctx._fontFamily, ctx._fontWeight, size)
  const metrics = lines.map((line) => ({
    text: line,
    width: measureLine(line),
  }))
  const blockW = Math.max(...metrics.map((m) => m.width), 1)
  const blockH = lines.length * size * lineHeight
  const originX =
    align === 'left' ? width * 0.04 : align === 'right' ? width - width * 0.04 - blockW : (width - blockW) / 2
  const topPad = size * 0.15
  const originY =
    verticalAlign === 'top' ? topPad + size * 0.8 : (height - blockH) / 2 + size * 0.8

  const drawn = metrics.map((m, i) => {
    const x =
      align === 'left' ? originX : align === 'right' ? originX + (blockW - m.width) : originX + (blockW - m.width) / 2
    const y = originY + i * size * lineHeight
    return { ...m, x, y }
  })

  return { size, lines: drawn, blockW, blockH, originX, originY: originY - size * 0.8 }
}

function drawLines(ctx, lines, size, letterSpacing, fillStyle) {
  ctx.fillStyle = fillStyle
  ctx.font = buildFont(ctx._fontFamily, ctx._fontWeight, size)
  ctx.textBaseline = 'alphabetic'
  const spacingPx = letterSpacing * size
  lines.forEach((line) => {
    if (!spacingPx) {
      ctx.fillText(line.text, line.x, line.y)
      return
    }
    let x = line.x
    Array.from(line.text).forEach((ch) => {
      ctx.fillText(ch, x, line.y)
      x += ctx.measureText(ch).width + spacingPx
    })
  })
}

function createTexture(width, height, dpr, layout, colors, letterSpacing, family, weight) {
  const canvas = document.createElement('canvas')
  canvas.width = Math.max(1, Math.ceil(width * dpr))
  canvas.height = Math.max(1, Math.ceil(height * dpr))
  const ctx = canvas.getContext('2d')
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  ctx._fontFamily = family
  ctx._fontWeight = weight
  const grad = ctx.createLinearGradient(layout.originX, 0, layout.originX + layout.blockW, 0)
  grad.addColorStop(0, parseColor(colors[0], '#f5f5f5'))
  grad.addColorStop(1, parseColor(colors[1] ?? colors[0], '#f5f5f5'))
  drawLines(ctx, layout.lines, layout.size, letterSpacing, grad)
  return canvas
}

function sampleOpaque(data, width, height, x, y) {
  const ix = clamp(Math.floor(x), 0, width - 1)
  const iy = clamp(Math.floor(y), 0, height - 1)
  return data[(iy * width + ix) * 4 + 3] > 24
}

function triangleCentroid(a, b, c) {
  return { x: (a.x + b.x + c.x) / 3, y: (a.y + b.y + c.y) / 3 }
}

function buildShards(bounds, fontSize, shardSize, irregularity, texture, dpr) {
  const cell = Math.max(10, fontSize * Math.max(0.04, shardSize))
  const pad = cell * 0.4
  const x0 = bounds.x - pad
  const y0 = bounds.y - pad
  const x1 = bounds.x + bounds.w + pad
  const y1 = bounds.y + bounds.h + pad
  const cols = Math.max(2, Math.ceil((x1 - x0) / cell))
  const rows = Math.max(2, Math.ceil((y1 - y0) / cell))
  const points = []

  for (let r = 0; r <= rows; r++) {
    for (let c = 0; c <= cols; c++) {
      const jx = (hash(r * 97 + c * 13 + 1) - 0.5) * cell * irregularity
      const jy = (hash(r * 53 + c * 29 + 7) - 0.5) * cell * irregularity
      points.push({
        x: x0 + (c / cols) * (x1 - x0) + jx,
        y: y0 + (r / rows) * (y1 - y0) + jy,
        r,
        c,
      })
    }
  }

  const idx = (r, c) => r * (cols + 1) + c
  const tris = []
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const p00 = points[idx(r, c)]
      const p10 = points[idx(r, c + 1)]
      const p01 = points[idx(r + 1, c)]
      const p11 = points[idx(r + 1, c + 1)]
      if ((r + c) % 2 === 0) {
        tris.push([p00, p10, p11], [p00, p11, p01])
      } else {
        tris.push([p00, p10, p01], [p10, p11, p01])
      }
    }
  }

  const tw = texture.width
  const th = texture.height
  const tctx = texture.getContext('2d', { willReadFrequently: true })
  const img = tctx.getImageData(0, 0, tw, th).data

  const shards = []
  tris.forEach((tri, i) => {
    const [a, b, c] = tri
    const mid = triangleCentroid(a, b, c)
    const hits = [
      mid,
      { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 },
      { x: (b.x + c.x) / 2, y: (b.y + c.y) / 2 },
      { x: (c.x + a.x) / 2, y: (c.y + a.y) / 2 },
      a,
      b,
      c,
    ].some((p) => sampleOpaque(img, tw, th, p.x * dpr, p.y * dpr))
    if (!hits) return

    const nx = hash(i * 3.1) - 0.5
    const ny = hash(i * 5.7) - 0.5
    const len = Math.hypot(nx, ny) || 1
    shards.push({
      a,
      b,
      c,
      cx: mid.x,
      cy: mid.y,
      nx: nx / len,
      ny: ny / len,
      ox: 0,
      oy: 0,
      oz: 0,
      rot: 0,
      vx: 0,
      vy: 0,
      vz: 0,
      vr: 0,
      crack: 0,
      fly: 0,
      flash: 0,
      homeDelay: hash(i * 9.1),
    })
  })

  return shards
}

function drawShard(ctx, shard, texture, dpr, accent, glint, crackStrength) {
  const { a, b, c, cx, cy, ox, oy, oz, rot, crack, flash } = shard
  const lift = oz * 18
  const scale = 1 + oz * 0.35
  const crackPush = crack * crackStrength * 3.2

  ctx.save()
  ctx.translate(cx + ox + shard.nx * crackPush, cy + oy + shard.ny * crackPush - lift)
  ctx.rotate(rot)
  ctx.scale(scale, scale)
  ctx.translate(-cx, -cy)

  const showingBack = Math.abs(rot) > 0.55 || oz > 0.55
  ctx.beginPath()
  ctx.moveTo(a.x, a.y)
  ctx.lineTo(b.x, b.y)
  ctx.lineTo(c.x, c.y)
  ctx.closePath()

  if (showingBack) {
    ctx.fillStyle = accent
    ctx.globalAlpha = 0.92
    ctx.fill()
  } else {
    ctx.save()
    ctx.clip()
    ctx.drawImage(texture, 0, 0, texture.width, texture.height, 0, 0, texture.width / dpr, texture.height / dpr)
    ctx.restore()

    // 静止时不描边，避免标题看起来有「裂缝」
    if (crack > 0.04) {
      ctx.strokeStyle = `rgba(255,255,255,${0.12 + crack * 0.4})`
      ctx.lineWidth = 0.6 + crack * 0.7
      ctx.stroke()
    }
  }

  if (flash > 0.01 || (glint > 0 && Math.abs(rot) > 0.15)) {
    const g = ctx.createLinearGradient(a.x, a.y, c.x, c.y)
    g.addColorStop(0, `rgba(255,255,255,${0.05 * glint + flash * 0.55})`)
    g.addColorStop(0.5, `rgba(255,255,255,${0.18 * glint + flash * 0.8})`)
    g.addColorStop(1, 'rgba(255,255,255,0)')
    ctx.fillStyle = g
    ctx.globalAlpha = 1
    ctx.fill()
  }

  ctx.restore()
}

export default function ShatterType({
  text = 'Shatter',
  fontFamily = '',
  fontWeight = 700,
  fontSize = 0,
  letterSpacing = -0.02,
  lineHeight = 1.05,
  align = 'center',
  verticalAlign = 'center',
  colors = ['currentColor', 'currentColor'],
  accentColor = '#7B5CFF',
  shardSize = 0.09,
  irregularity = 0.6,
  crack = 0.6,
  crackRadius = 0.5,
  heal = 0.9,
  shatter = true,
  shatterRadius = 0.55,
  force = 1,
  spin = 1,
  depth = 1,
  gravity = 0,
  reassemble = 1.1,
  stiffness = 0.55,
  glint = 0.8,
  intro = 'assemble',
  introDuration = 1.6,
  autoplay = false,
  autoplayInterval = 4,
  interactive = true,
  paused = false,
  quality = 1,
  className = '',
  style,
}) {
  const rootRef = useRef(null)
  const canvasRef = useRef(null)
  const settingsRef = useRef({})
  const wakeRef = useRef(() => {})

  settingsRef.current = {
    text,
    fontFamily,
    fontWeight,
    fontSize,
    letterSpacing,
    lineHeight,
    align,
    verticalAlign,
    colors,
    accentColor,
    shardSize,
    irregularity,
    crack,
    crackRadius,
    heal,
    shatter,
    shatterRadius,
    force,
    spin,
    depth,
    gravity,
    reassemble,
    stiffness,
    glint,
    intro,
    introDuration,
    autoplay,
    autoplayInterval,
    interactive,
    paused,
    quality,
  }

  useEffect(() => {
    const root = rootRef.current
    const canvas = canvasRef.current
    if (!root || !canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    let raf = 0
    let running = true
    let visible = true
    let width = 0
    let height = 0
    let dpr = 1
    let texture = null
    let shards = []
    let pointer = { x: -9999, y: -9999, inside: false }
    let introT = 0
    let introDone = false
    let last = performance.now()
    let autoT = 0
    let bustUntil = 0
    let sortedCache = []
    let needsSort = true

    const resolvedColors = () => {
      const s = settingsRef.current
      const styleColor = getComputedStyle(root).color || '#f5f5f5'
      return s.colors.map((c) => (c === 'currentColor' ? styleColor : c))
    }

    const rebuild = () => {
      const s = settingsRef.current
      const rect = root.getBoundingClientRect()
      width = Math.max(1, rect.width)
      height = Math.max(1, rect.height)
      dpr = Math.min(1.5, (window.devicePixelRatio || 1) * clamp(s.quality, 0.5, 1))
      canvas.width = Math.ceil(width * dpr)
      canvas.height = Math.ceil(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      needsSort = true

      const probe = document.createElement('canvas').getContext('2d')
      probe._fontFamily = s.fontFamily
      probe._fontWeight = s.fontWeight
      const layout = layoutText(
        probe,
        s.text,
        s.fontSize,
        s.letterSpacing,
        s.lineHeight,
        s.align,
        s.verticalAlign,
        width,
        height
      )

      texture = createTexture(
        width,
        height,
        dpr,
        layout,
        resolvedColors(),
        s.letterSpacing,
        s.fontFamily,
        s.fontWeight
      )

      const bounds = {
        x: layout.originX,
        y: layout.originY,
        w: layout.blockW,
        h: layout.blockH,
      }
      shards = buildShards(bounds, layout.size, s.shardSize, s.irregularity, texture, dpr)

      if (s.intro === 'assemble' || s.intro === 'drop') {
        introT = 0
        introDone = false
        shards.forEach((sh, i) => {
          const ang = hash(i * 2.3) * Math.PI * 2
          const dist = 80 + hash(i * 4.1) * 160
          if (s.intro === 'drop') {
            sh.sx = (hash(i * 1.7) - 0.5) * 40
            sh.sy = -120 - hash(i * 2.9) * 180
          } else {
            sh.sx = Math.cos(ang) * dist
            sh.sy = Math.sin(ang) * dist
          }
          sh.sz = 0.4 + hash(i * 6.2) * 0.8
          sh.sr = (hash(i * 8.4) - 0.5) * 2.4
          sh.ox = sh.sx
          sh.oy = sh.sy
          sh.oz = sh.sz
          sh.rot = sh.sr
          sh.fly = 0
        })
      } else {
        introDone = true
        introT = 1
      }
    }

    const shatterAt = (x, y) => {
      const s = settingsRef.current
      if (!s.shatter) return
      const radius = Math.max(24, s.shatterRadius * (layoutFontSize() || 80))
      const crackR = Math.max(30, s.crackRadius * (layoutFontSize() || 80) * 1.6)
      bustUntil = performance.now() + s.reassemble * 1000

      shards.forEach((sh) => {
        const dx = sh.cx - x
        const dy = sh.cy - y
        const dist = Math.hypot(dx, dy)
        if (dist < radius) {
          const power = (1 - dist / radius) * s.force
          const ang = Math.atan2(dy, dx) + (hash(sh.cx + sh.cy) - 0.5) * 0.8
          sh.vx += Math.cos(ang) * (180 + power * 420)
          sh.vy += Math.sin(ang) * (180 + power * 420) - 80 * s.force
          sh.vz += (0.8 + hash(sh.cy) * 1.2) * s.depth * power
          sh.vr += (hash(sh.cx) - 0.5) * 10 * s.spin * power
          sh.fly = 1
          sh.flash = 1
          sh.crack = 1
        } else if (dist < crackR) {
          sh.crack = Math.max(sh.crack, 0.35 + (1 - dist / crackR) * 0.65)
        }
      })
      wake()
    }

    const layoutFontSize = () => {
      const s = settingsRef.current
      if (s.fontSize > 0) return s.fontSize
      return Math.max(24, Math.min(width, height) * 0.18)
    }

    const onMove = (e) => {
      if (!settingsRef.current.interactive) return
      const rect = root.getBoundingClientRect()
      pointer.x = e.clientX - rect.left
      pointer.y = e.clientY - rect.top
      pointer.inside = true
      wake()
    }
    const onLeave = () => {
      pointer.inside = false
      pointer.x = -9999
      pointer.y = -9999
    }
    const onDown = (e) => {
      if (!settingsRef.current.interactive || !settingsRef.current.shatter) return
      const rect = root.getBoundingClientRect()
      shatterAt(e.clientX - rect.left, e.clientY - rect.top)
    }

    const frame = (now) => {
      if (!running) return
      raf = 0
      if (!visible || document.hidden) return

      const dt = clamp((now - last) / 1000, 0.001, 0.05)
      last = now
      const s = settingsRef.current
      let moving = !introDone

      if (!s.paused) {
        if (!introDone) {
          introT = clamp(introT + dt / Math.max(0.2, s.introDuration), 0, 1)
          const t = easeOutCubic(introT)
          for (let i = 0; i < shards.length; i++) {
            const sh = shards[i]
            const local = clamp((t - sh.homeDelay * 0.35) / 0.65, 0, 1)
            const p = easeOutCubic(local)
            sh.ox = lerp(sh.sx || 0, 0, p)
            sh.oy = lerp(sh.sy || 0, 0, p)
            sh.oz = lerp(sh.sz || 0, 0, p)
            sh.rot = lerp(sh.sr || 0, 0, p)
            if (local > 0.92) sh.flash = Math.max(sh.flash, (local - 0.92) / 0.08)
          }
          needsSort = true
          if (introT >= 1) {
            introDone = true
            for (let i = 0; i < shards.length; i++) {
              const sh = shards[i]
              sh.ox = sh.oy = sh.oz = sh.rot = 0
              sh.vx = sh.vy = sh.vz = sh.vr = 0
            }
          }
        } else {
          const em = layoutFontSize()
          const crackR = Math.max(20, s.crackRadius * em)
          const spring = 8 + s.stiffness * 26
          const damp = 0.86 - s.stiffness * 0.08

          for (let i = 0; i < shards.length; i++) {
            const sh = shards[i]
            if (pointer.inside && s.interactive) {
              const dist = Math.hypot(sh.cx - pointer.x, sh.cy - pointer.y)
              if (dist < crackR) {
                const amount = (1 - dist / crackR) * s.crack
                sh.crack = Math.max(sh.crack, amount)
              }
            }

            if (sh.fly > 0 || Math.hypot(sh.vx, sh.vy, sh.vz, sh.vr) > 0.2) {
              moving = true
              needsSort = true
              sh.vy += s.gravity * 900 * dt
              sh.ox += sh.vx * dt
              sh.oy += sh.vy * dt
              sh.oz += sh.vz * dt
              sh.rot += sh.vr * dt
              sh.vx *= damp
              sh.vy *= damp
              sh.vz *= damp
              sh.vr *= damp

              if (now > bustUntil) {
                sh.vx += -sh.ox * spring * dt
                sh.vy += -sh.oy * spring * dt
                sh.vz += -sh.oz * spring * dt
                sh.vr += -sh.rot * spring * dt
                if (Math.hypot(sh.ox, sh.oy, sh.oz, sh.rot) < 0.8 && Math.hypot(sh.vx, sh.vy) < 8) {
                  sh.ox = sh.oy = sh.oz = sh.rot = 0
                  sh.vx = sh.vy = sh.vz = sh.vr = 0
                  sh.fly = 0
                  sh.flash = Math.max(sh.flash, 0.7)
                }
              }
            }

            if (sh.crack > 0 || sh.flash > 0) moving = true
            sh.crack = Math.max(0, sh.crack - dt / Math.max(0.15, s.heal))
            sh.flash = Math.max(0, sh.flash - dt * 2.4)
          }

          if (s.autoplay && !pointer.inside) {
            autoT += dt
            if (autoT >= s.autoplayInterval) {
              autoT = 0
              const pick = shards[Math.floor(hash(now) * shards.length)] || shards[0]
              if (pick) shatterAt(pick.cx, pick.cy)
            }
          }
        }
      }

      ctx.clearRect(0, 0, width, height)
      if (needsSort) {
        sortedCache = shards.slice().sort((a, b) => a.oz - b.oz || a.cy - b.cy)
        needsSort = false
      }
      const accent = parseColor(s.accentColor, '#7B5CFF')
      for (let i = 0; i < sortedCache.length; i++) {
        drawShard(ctx, sortedCache[i], texture, dpr, accent, s.glint, s.crack)
      }

      const busy = moving || pointer.inside || now < bustUntil + 600 || !introDone
      if (busy && !s.paused && visible && !document.hidden) raf = requestAnimationFrame(frame)
    }

    const wake = () => {
      if (raf || !running || !visible || document.hidden) return
      last = performance.now()
      raf = requestAnimationFrame(frame)
    }
    wakeRef.current = wake

    let lastSize = ''
    let resizeTimer = 0
    const ro = new ResizeObserver(() => {
      const next = `${Math.round(root.clientWidth)}x${Math.round(root.clientHeight)}`
      if (next === lastSize && texture) return
      lastSize = next
      clearTimeout(resizeTimer)
      resizeTimer = window.setTimeout(() => {
        rebuild()
        wake()
      }, 80)
    })

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
        if (visible) wake()
        else if (raf) {
          cancelAnimationFrame(raf)
          raf = 0
        }
      },
      { threshold: 0.05 }
    )

    rebuild()
    lastSize = `${Math.round(root.clientWidth)}x${Math.round(root.clientHeight)}`
    wake()
    ro.observe(root)
    io.observe(root)
    root.addEventListener('pointermove', onMove, { passive: true })
    root.addEventListener('pointerenter', onMove, { passive: true })
    root.addEventListener('pointerleave', onLeave)
    root.addEventListener('pointerdown', onDown)
    document.addEventListener('visibilitychange', wake)

    return () => {
      running = false
      cancelAnimationFrame(raf)
      clearTimeout(resizeTimer)
      ro.disconnect()
      io.disconnect()
      document.removeEventListener('visibilitychange', wake)
      root.removeEventListener('pointermove', onMove)
      root.removeEventListener('pointerenter', onMove)
      root.removeEventListener('pointerleave', onLeave)
      root.removeEventListener('pointerdown', onDown)
    }
  }, [])

  return (
    <div ref={rootRef} className={`shatter-type ${className}`.trim()} style={style} role="img" aria-label={text}>
      <span className="shatter-type-sr">{text}</span>
      <canvas ref={canvasRef} className="shatter-type-canvas" />
    </div>
  )
}
