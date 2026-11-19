<script setup>
const navs = [
  { to: '/', label: '首页' },
  { to: '/works', label: '作品集' },
  { to: '/about', label: '关于我' },
  { to: '/contact', label: '联系我' }
]
</script>

<template>
  <header class="navbar">
    <div class="container">
      <router-link to="/" class="logo">My<span>Site</span></router-link>
      <nav>
        <ul class="nav-links">
          <li v-for="n in navs" :key="n.to">
            <router-link :to="n.to">{{ n.label }}</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <main>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>

  <footer class="footer">
    <div class="container">© 2026 MySite · 用心记录每一个项目</div>
  </footer>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
