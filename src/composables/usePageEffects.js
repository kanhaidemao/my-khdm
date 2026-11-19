import { onMounted, onBeforeUnmount } from 'vue'

function animateCount(el) {
  const target = parseInt(el.dataset.count, 10)
  const duration = 1500
  const startTime = performance.now()

  function update(currentTime) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const ease = 1 - Math.pow(1 - progress, 3)
    el.textContent = Math.floor(ease * target)
    if (progress < 1) requestAnimationFrame(update)
    else el.textContent = target
  }

  requestAnimationFrame(update)
}

export function usePageEffects() {
  let cursor = null
  let cursorDot = null
  let scrollProgress = null
  let header = null
  let navLinks = []
  let sections = []
  let heroContent = null
  let rafId = 0
  let mouseX = 0
  let mouseY = 0
  let cursorX = 0
  let cursorY = 0

  function onMouseMove(e) {
    mouseX = e.clientX
    mouseY = e.clientY
    if (cursorDot) {
      cursorDot.style.left = mouseX + 'px'
      cursorDot.style.top = mouseY + 'px'
    }
  }

  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.15
    cursorY += (mouseY - cursorY) * 0.15
    if (cursor) {
      cursor.style.left = cursorX + 'px'
      cursor.style.top = cursorY + 'px'
    }
    rafId = requestAnimationFrame(animateCursor)
  }

  function revealOnScroll() {
    const vh = window.innerHeight
    document.querySelectorAll('.reveal:not(.visible), .section-head:not(.visible)').forEach((el) => {
      if (el.getBoundingClientRect().top < vh * 0.85) {
        el.classList.add('visible')
        const skillFill = el.querySelector('.skill-fill')
        if (skillFill) {
          setTimeout(() => {
            skillFill.style.width = skillFill.dataset.width
          }, 300)
        }
        const countEl = el.querySelector('[data-count]')
        if (countEl) animateCount(countEl)
      }
    })
  }

  function onScroll() {
    const scrollTop = window.scrollY
    revealOnScroll()
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    if (scrollProgress) scrollProgress.style.width = (scrollTop / docHeight) * 100 + '%'
    if (header) header.classList.toggle('scrolled', scrollTop > 100)

    let current = ''
    sections.forEach((sec) => {
      if (scrollTop >= sec.offsetTop - 200) current = sec.getAttribute('id')
    })
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current)
    })

    if (heroContent && scrollTop < window.innerHeight) {
      heroContent.style.transform = `translateY(${scrollTop * 0.25}px)`
      heroContent.style.opacity = 1 - scrollTop / 600
    }
  }

  function handleAnchorClick(e) {
    const href = e.currentTarget.getAttribute('href')
    if (!href || !href.startsWith('#')) return
    if (href === '#') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const target = document.querySelector(href)
    if (target) {
      e.preventDefault()
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  onMounted(() => {
    cursor = document.querySelector('.cursor')
    cursorDot = document.querySelector('.cursor-dot')
    scrollProgress = document.querySelector('.scroll-progress')
    header = document.querySelector('header')
    navLinks = document.querySelectorAll('.nav-link')
    sections = document.querySelectorAll('section[id]')
    heroContent = document.querySelector('.hero-content')

    document.querySelectorAll('a, button, .project-item, .skill-row').forEach((el) => {
      el.addEventListener('mouseenter', () => cursor && cursor.classList.add('hover'))
      el.addEventListener('mouseleave', () => cursor && cursor.classList.remove('hover'))
    })

    document.querySelectorAll('.reveal').forEach((el, i) => {
      el.style.transitionDelay = `${(i % 6) * 0.1}s`
    })
    revealOnScroll()

    document.querySelectorAll('a[href^="#"]').forEach((a) => a.addEventListener('click', handleAnchorClick))

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('scroll', onScroll)
    animateCursor()
  })

  onBeforeUnmount(() => {
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('scroll', onScroll)
    if (rafId) cancelAnimationFrame(rafId)
    document.querySelectorAll('a[href^="#"]').forEach((a) => a.removeEventListener('click', handleAnchorClick))
  })
}
