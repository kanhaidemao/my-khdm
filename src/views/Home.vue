<script setup>
import { profile, skills, stats, works } from '../data/site'
</script>

<template>
  <div>
  <section class="hero">
    <div class="container hero-inner">
      <img class="avatar" :src="profile.avatar" :alt="profile.name" />
      <h1>你好，我是 <em>{{ profile.name }}</em></h1>
      <p class="title">{{ profile.title }}</p>
      <p class="intro">{{ profile.intro }}</p>
      <div class="hero-btns">
        <router-link to="/works" class="btn btn-primary">查看作品集</router-link>
        <router-link to="/contact" class="btn btn-ghost">联系我</router-link>
      </div>
    </div>
  </section>

  <section class="container stats">
    <div v-for="s in stats" :key="s.label" class="stat card">
      <strong>{{ s.num }}</strong>
      <span>{{ s.label }}</span>
    </div>
  </section>

  <section class="container">
    <h2 class="section-title">技能栈</h2>
    <p class="section-sub">我熟悉并使用这些技术</p>
    <ul class="skills">
      <li v-for="s in skills" :key="s">{{ s }}</li>
    </ul>
  </section>

  <section class="container">
    <h2 class="section-title">精选项目</h2>
    <p class="section-sub">最近完成的一些作品</p>
    <div class="preview-grid">
      <router-link
        v-for="w in works.slice(0, 2)"
        :key="w.id"
        to="/works"
        class="card preview"
      >
        <img :src="w.image" :alt="w.title" />
        <div class="preview-body">
          <h3>{{ w.title }}</h3>
          <p>{{ w.desc }}</p>
        </div>
      </router-link>
    </div>
    <div class="more">
      <router-link to="/works" class="btn btn-primary">查看全部作品 →</router-link>
    </div>
  </section>
  </div>
</template>

<style scoped>
.hero {
  background: linear-gradient(160deg, var(--blue-900) 0%, var(--blue-700) 60%, var(--blue-500) 130%);
  color: #fff;
  padding: 88px 0 96px;
  text-align: center;
}

.avatar {
  width: 132px;
  height: 132px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 24px;
  border: 4px solid rgba(255, 255, 255, 0.35);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

h1 {
  font-size: 2.4rem;
  margin-bottom: 8px;
}

h1 em {
  font-style: normal;
  color: var(--blue-400);
}

.title {
  font-size: 1.15rem;
  color: #bcd0ee;
  margin-bottom: 16px;
}

.intro {
  max-width: 560px;
  margin: 0 auto 32px;
  color: #dbe6f6;
}

.hero-btns {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: -44px;
  position: relative;
  z-index: 1;
}

.stat {
  padding: 24px;
  text-align: center;
}

.stat strong {
  display: block;
  font-size: 2rem;
  color: var(--blue-500);
}

.stat span {
  color: var(--text-light);
  font-size: 0.95rem;
}

section.container {
  margin-top: 64px;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  list-style: none;
}

.skills li {
  background: var(--blue-100);
  color: var(--blue-700);
  padding: 8px 20px;
  border-radius: 999px;
  font-size: 0.95rem;
}

.preview-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.preview img {
  width: 100%;
  height: 210px;
  object-fit: cover;
}

.preview-body {
  padding: 20px 22px 24px;
}

.preview-body h3 {
  color: var(--blue-900);
  margin-bottom: 6px;
}

.preview-body p {
  color: var(--text-light);
  font-size: 0.95rem;
}

.more {
  text-align: center;
  margin-top: 28px;
}

@media (max-width: 640px) {
  h1 {
    font-size: 1.7rem;
  }
  .stats,
  .preview-grid {
    grid-template-columns: 1fr;
  }
}
</style>
