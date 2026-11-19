<script setup>
import { usePageEffects } from './composables/usePageEffects'
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import WorkSection from './components/WorkSection.vue'
import ContactSection from './components/ContactSection.vue'
import AppFooter from './components/AppFooter.vue'

usePageEffects()
</script>

<template>
  <div class="scroll-progress"></div>
  <div class="cursor"></div>
  <div class="cursor-dot"></div>

  <AppHeader />
  <HeroSection />
  <AboutSection />
  <SkillsSection />
  <WorkSection />
  <ContactSection />
  <AppFooter />
</template>
