<script setup>
import SectionHead from './SectionHead.vue'
import { skills } from '../data/portfolio'
</script>

<template>
  <section id="skills" class="skills-section">
    <SectionHead num="02 — Skills" title="技术能力" />
    <div class="skills-list">
      <div class="skill-row reveal" v-for="s in skills" :key="s.name">
        <h4>{{ s.name }} <span>{{ s.level }}</span></h4>
        <div class="skill-track">
          <div class="skill-fill" :data-width="s.width"></div>
        </div>
      </div>
    </div>
  </section>
</template>
