<script setup>
import SectionHead from './SectionHead.vue'
import { socials } from '../data/portfolio'
</script>

<template>
  <section id="contact" class="contact-section">
    <SectionHead num="04 — Contact" title="联系我" />
    <p class="contact-big reveal">
      有合作意向？<br>
      <a href="mailto:hello@example.com">发邮件给我 →</a>
    </p>
    <div class="social-links reveal">
      <a v-for="so in socials" :key="so.name" :href="so.href">{{ so.name }}</a>
    </div>
  </section>
</template>
