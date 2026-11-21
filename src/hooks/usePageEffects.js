import { useEffect } from 'react'

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
  useEffect(() => {
    const scrollProgress = document.querySelector('.scroll-progress')
    const header = document.querySelector('header')
    const navLinks = document.querySelectorAll('.nav-link')
    const sections = document.querySelectorAll('section[id]')
    const heroContent = document.querySelector('.hero-content')

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
          if (countEl && !countEl.dataset.counted) {
            countEl.dataset.counted = '1'
            animateCount(countEl)
          }
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

    document.querySelectorAll('.reveal').forEach((el, i) => {
      el.style.transitionDelay = `${(i % 6) * 0.1}s`
    })
    revealOnScroll()

    const anchors = document.querySelectorAll('a[href^="#"]')
    anchors.forEach((a) => a.addEventListener('click', handleAnchorClick))
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      anchors.forEach((a) => a.removeEventListener('click', handleAnchorClick))
    }
  }, [])
}
