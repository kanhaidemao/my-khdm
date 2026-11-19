<script setup>
import { onMounted, onBeforeUnmount } from 'vue'

const navs = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' }
]

const stats = [
  { count: 5, label: 'Years Exp.' },
  { count: 30, label: 'Projects' },
  { count: 100, label: 'Dedication' }
]

const skills = [
  { name: 'JavaScript / TypeScript', level: '精通', width: '95%' },
  { name: 'Vue.js / Vuex / Pinia', level: '精通', width: '93%' },
  { name: 'React / Redux / Hooks', level: '熟练', width: '85%' },
  { name: 'HTML5 / CSS3 / 动画', level: '精通', width: '92%' },
  { name: 'Webpack / Vite / 工程化', level: '熟练', width: '88%' },
  { name: 'Node.js / Express', level: '了解', width: '70%' }
]

const projects = [
  { num: '01', name: '企业级管理后台', tags: 'Vue3 · TypeScript · Element Plus' },
  { num: '02', name: '电商小程序', tags: '微信小程序 · Vant · 云开发' },
  { num: '03', name: '数据可视化大屏', tags: 'ECharts · Three.js · WebGL' },
  { num: '04', name: '移动端 H5 活动页', tags: 'Vue · CSS3动画 · 性能优化' }
]

const socials = [
  { name: 'GitHub', href: '#' },
  { name: '掘金', href: '#' },
  { name: '微信', href: '#' },
  { name: 'LinkedIn', href: '#' }
]

let cursor = null
let cursorDot = null
let scrollProgress = null
let header = null
let navLinks = []
let sections = []
let heroContent = null
let rafId = 0
let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0

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

function revealOnScroll() {
  const vh = window.innerHeight
  document.querySelectorAll('.reveal:not(.visible), .section-head:not(.visible)').forEach((el) => {
    if (el.getBoundingClientRect().top < vh * 0.85) {
      el.classList.add('visible')
      const skillFill = el.querySelector('.skill-fill')
      if (skillFill) setTimeout(() => { skillFill.style.width = skillFill.dataset.width }, 300)
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

  // 导航高亮
  let current = ''
  sections.forEach((sec) => {
    if (scrollTop >= sec.offsetTop - 200) current = sec.getAttribute('id')
  })
  navLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current)
  })

  // Hero 视差
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

  // 光标悬停放大
  document.querySelectorAll('a, button, .project-item, .skill-row').forEach((el) => {
    el.addEventListener('mouseenter', () => cursor && cursor.classList.add('hover'))
    el.addEventListener('mouseleave', () => cursor && cursor.classList.remove('hover'))
  })

  // 入场动画：为每个 reveal 元素设置交错延迟，并按当前位置触发
  document.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.transitionDelay = `${(i % 6) * 0.1}s`
  })
  revealOnScroll()

  // 平滑滚动锚点
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
</script>

<template>
  <div class="scroll-progress"></div>
  <div class="cursor"></div>
  <div class="cursor-dot"></div>

  <header>
    <div class="brand">DEV.FOLIO</div>
    <ul class="menu">
      <li v-for="n in navs" :key="n.href">
        <a :href="n.href" class="nav-link">{{ n.label }}</a>
      </li>
    </ul>
  </header>

  <section class="hero">
    <div class="hero-content">
      <div class="hero-label">Frontend Developer</div>
      <h1>
        <span class="line">创造 <em>优雅</em> 且</span>
        <span class="line">富有生命力的</span>
        <span class="line">数字体验</span>
      </h1>
      <p>专注于现代 Web 前端开发，将设计美学与工程技术完美融合，打造极致的用户交互体验。</p>
      <a href="#work" class="hero-btn">
        <span>查看作品</span>
        <span class="arrow">→</span>
      </a>
    </div>
    <div class="scroll-indicator">Scroll</div>
  </section>

  <section id="about">
    <div class="section-head">
      <span class="section-num">01 — About</span>
      <h2 class="section-title">关于我</h2>
    </div>
    <div class="about-grid">
      <div class="portrait-wrap reveal">
        <div class="portrait"></div>
        <div class="portrait-border"></div>
      </div>
      <div class="about-text reveal">
        <h3>一名热爱设计与技术的前端工程师</h3>
        <p>我是一名拥有多年经验的前端开发工程师，专注于构建高性能、可维护的现代 Web 应用。对用户体验有着近乎偏执的追求，相信细节决定品质。</p>
        <p>擅长 Vue、React 等主流框架生态，精通 CSS 动画与交互设计。具备良好的产品思维与审美能力，能够独立完成从需求到上线的完整开发流程。</p>
        <p>热爱开源与技术分享，持续关注前端前沿技术，不断探索更好的开发方式。</p>
        <div class="stats">
          <div class="stat-item reveal" v-for="s in stats" :key="s.label">
            <h4 :data-count="s.count">0</h4>
            <p>{{ s.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="skills" class="skills-section">
    <div class="section-head">
      <span class="section-num">02 — Skills</span>
      <h2 class="section-title">技术能力</h2>
    </div>
    <div class="skills-list">
      <div class="skill-row reveal" v-for="s in skills" :key="s.name">
        <h4>{{ s.name }} <span>{{ s.level }}</span></h4>
        <div class="skill-track"><div class="skill-fill" :data-width="s.width"></div></div>
      </div>
    </div>
  </section>

  <section id="work">
    <div class="section-head">
      <span class="section-num">03 — Work</span>
      <h2 class="section-title">精选项目</h2>
    </div>
    <div class="projects-list">
      <a href="#" class="project-item reveal" v-for="p in projects" :key="p.num">
        <span class="project-num">{{ p.num }}</span>
        <span class="project-name">{{ p.name }}</span>
        <span class="project-tags">{{ p.tags }}</span>
        <span class="project-arrow">→</span>
      </a>
    </div>
  </section>

  <section id="contact" class="contact-section">
    <div class="section-head">
      <span class="section-num">04 — Contact</span>
      <h2 class="section-title">联系我</h2>
    </div>
    <p class="contact-big reveal">
      有合作意向？<br>
      <a href="mailto:hello@example.com">发邮件给我 →</a>
    </p>
    <div class="social-links reveal">
      <a v-for="so in socials" :key="so.name" :href="so.href">{{ so.name }}</a>
    </div>
  </section>

  <footer>
    <span>© 2026 Frontend Developer Portfolio</span>
    <a href="#" class="back-top">↑ 回到顶部</a>
    <span>Designed & Built with passion</span>
  </footer>
</template>
