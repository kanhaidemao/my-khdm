<script setup>
import { contact } from '../data/site'

function sendMail() {
  window.location.href = `mailto:${contact.email}`
}
</script>

<template>
  <section class="container page">
    <h2 class="section-title">联系我</h2>
    <p class="section-sub">有合作想法或只是想打个招呼，都欢迎</p>

    <div class="cards">
      <a class="card item" :href="`mailto:${contact.email}`">
        <span class="icon">✉️</span>
        <h3>邮箱</h3>
        <p>{{ contact.email }}</p>
      </a>
      <a class="card item" :href="contact.github" target="_blank" rel="noopener">
        <span class="icon">💻</span>
        <h3>GitHub</h3>
        <p>{{ contact.github }}</p>
      </a>
      <div class="card item">
        <span class="icon">💬</span>
        <h3>微信</h3>
        <p>{{ contact.wechat }}</p>
      </div>
    </div>

    <div class="cta card">
      <h3>想一起做个项目？</h3>
      <p>给我发封邮件，通常会在 24 小时内回复。</p>
      <button class="btn btn-primary" @click="sendMail">发送邮件</button>
    </div>
  </section>
</template>

<style scoped>
.page {
  margin-top: 56px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.item {
  padding: 30px 24px;
  text-align: center;
}

.icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 10px;
}

.item h3 {
  color: var(--blue-900);
  margin-bottom: 6px;
}

.item p {
  color: var(--text-light);
  font-size: 0.9rem;
  word-break: break-all;
}

.cta {
  margin-top: 36px;
  padding: 44px 24px;
  text-align: center;
  background: linear-gradient(140deg, var(--blue-800), var(--blue-500));
  color: #fff;
}

.cta h3 {
  font-size: 1.5rem;
  margin-bottom: 8px;
}

.cta p {
  color: #dbe6f6;
  margin-bottom: 24px;
}

.cta .btn-primary {
  background: #fff;
  color: var(--blue-700);
}

.cta .btn-primary:hover {
  background: var(--blue-100);
}

@media (max-width: 720px) {
  .cards {
    grid-template-columns: 1fr;
  }
}
</style>
