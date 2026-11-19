<script setup>
import SectionHead from './SectionHead.vue'
import { projects } from '../data/portfolio'
</script>

<template>
  <section id="work">
    <SectionHead num="03 — Work" title="精选项目" />
    <div class="projects-list">
      <a href="#" class="project-item reveal" v-for="p in projects" :key="p.num">
        <span class="project-num">{{ p.num }}</span>
        <span class="project-name">{{ p.name }}</span>
        <span class="project-tags">{{ p.tags }}</span>
        <span class="project-arrow">→</span>
      </a>
    </div>
  </section>
</template>
