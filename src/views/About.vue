<script setup>
import { profile, skills, timeline } from '../data/site'
</script>

<template>
  <section class="container page">
    <h2 class="section-title">关于我</h2>
    <p class="section-sub">了解一下屏幕背后的这个人</p>

    <div class="layout">
      <div class="card intro-card">
        <img :src="profile.avatar" :alt="profile.name" />
        <h3>{{ profile.name }}</h3>
        <p class="role">{{ profile.title }}</p>
        <p class="loc">📍 {{ profile.location }}</p>
        <ul class="skills">
          <li v-for="s in skills" :key="s">{{ s }}</li>
        </ul>
      </div>

      <div class="timeline">
        <div v-for="t in timeline" :key="t.year" class="item">
          <div class="dot"></div>
          <div class="content card">
            <strong>{{ t.year }}</strong>
            <p>{{ t.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.page {
  margin-top: 56px;
}

.layout {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 32px;
  align-items: start;
}

.intro-card {
  padding: 28px;
  text-align: center;
}

.intro-card img {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 16px;
  border: 3px solid var(--blue-100);
}

.intro-card h3 {
  color: var(--blue-900);
  font-size: 1.25rem;
}

.role {
  color: var(--blue-500);
  font-size: 0.95rem;
  margin: 4px 0 8px;
}

.loc {
  color: var(--text-light);
  font-size: 0.9rem;
  margin-bottom: 18px;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  list-style: none;
}

.skills li {
  background: var(--blue-100);
  color: var(--blue-700);
  font-size: 0.82rem;
  padding: 4px 14px;
  border-radius: 999px;
}

.timeline {
  position: relative;
  padding-left: 26px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 7px;
  top: 6px;
  bottom: 6px;
  width: 2px;
  background: var(--blue-100);
}

.item {
  position: relative;
  margin-bottom: 22px;
}

.dot {
  position: absolute;
  left: -26px;
  top: 24px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--blue-500);
  border: 3px solid #fff;
  box-shadow: 0 0 0 2px var(--blue-100);
}

.content {
  padding: 18px 22px;
}

.content strong {
  color: var(--blue-500);
  display: block;
  margin-bottom: 4px;
}

.content p {
  color: var(--text-light);
  font-size: 0.95rem;
}

@media (max-width: 720px) {
  .layout {
    grid-template-columns: 1fr;
  }
}
</style>
