<script setup>
import { works } from '../data/site'
</script>

<template>
  <section class="container page">
    <h2 class="section-title">作品集</h2>
    <p class="section-sub">这里是我做过的项目，点击卡片可访问在线演示</p>

    <div class="grid">
      <article v-for="w in works" :key="w.id" class="card work">
        <div class="thumb">
          <img :src="w.image" :alt="w.title" />
        </div>
        <div class="body">
          <h3>{{ w.title }}</h3>
          <p>{{ w.desc }}</p>
          <ul class="tags">
            <li v-for="t in w.tags" :key="t">{{ t }}</li>
          </ul>
          <a class="link" :href="w.link" target="_blank" rel="noopener">查看演示 →</a>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.page {
  margin-top: 56px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 26px;
}

.thumb img {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.body {
  padding: 22px 24px 26px;
}

.body h3 {
  color: var(--blue-900);
  font-size: 1.2rem;
  margin-bottom: 8px;
}

.body p {
  color: var(--text-light);
  font-size: 0.95rem;
  margin-bottom: 14px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
  margin-bottom: 16px;
}

.tags li {
  font-size: 0.8rem;
  background: var(--blue-100);
  color: var(--blue-700);
  padding: 3px 12px;
  border-radius: 999px;
}

.link {
  color: var(--blue-500);
  font-weight: 600;
  font-size: 0.95rem;
}

.link:hover {
  text-decoration: underline;
}

@media (max-width: 720px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
