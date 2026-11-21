import { useEffect } from 'react'

function animateCount(el) {
  const target = parseInt(el.dataset.count, 10)
  const duration = 1200
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
  useEffect(() => {
    const scrollProgress = document.querySelector('.scroll-progress')
    const header = document.querySelector('header')
    const navLinks = Array.from(document.querySelectorAll('.nav-link'))
    const sections = Array.from(document.querySelectorAll('section[id]'))
    const heroContent = document.querySelector('.hero-content')
    const revealNodes = () => document.querySelectorAll('.reveal:not(.visible), .section-head:not(.visible)')

    let ticking = false

    function revealOnScroll() {
      const vh = window.innerHeight
      revealNodes().forEach((el) => {
        if (el.getBoundingClientRect().top < vh * 0.88) {
          el.classList.add('visible')
          const countEl = el.querySelector('[data-count]')
          if (countEl && !countEl.dataset.counted) {
            countEl.dataset.counted = '1'
            animateCount(countEl)
          }
        }
      })
    }

    function update() {
      ticking = false
      const scrollTop = window.scrollY
      revealOnScroll()

      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (scrollProgress && docHeight > 0) {
        scrollProgress.style.width = `${(scrollTop / docHeight) * 100}%`
      }
      if (header) header.classList.toggle('scrolled', scrollTop > 100)

      let current = ''
      for (let i = 0; i < sections.length; i++) {
        if (scrollTop >= sections[i].offsetTop - 200) current = sections[i].id
      }
      const activeHref = `#${current}`
      for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.toggle('active', navLinks[i].getAttribute('href') === activeHref)
      }

      if (heroContent && scrollTop < window.innerHeight) {
        const y = scrollTop * 0.18
        heroContent.style.transform = y ? `translate3d(0, ${y}px, 0)` : ''
        heroContent.style.opacity = String(Math.max(0, 1 - scrollTop / 700))
      }
    }

    function onScroll() {
      if (ticking) return
      ticking = true
      requestAnimationFrame(update)
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

    document.querySelectorAll('.reveal').forEach((el, i) => {
      el.style.transitionDelay = `${(i % 4) * 0.06}s`
    })
    update()

    const anchors = document.querySelectorAll('a[href^="#"]')
    anchors.forEach((a) => a.addEventListener('click', handleAnchorClick))
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      anchors.forEach((a) => a.removeEventListener('click', handleAnchorClick))
    }
  }, [])
}
