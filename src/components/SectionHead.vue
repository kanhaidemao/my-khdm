<script setup>
defineProps({
  num: { type: String, required: true },
  title: { type: String, required: true }
})
</script>

<template>
  <div class="section-head">
    <span class="section-num">{{ num }}</span>
    <h2 class="section-title">{{ title }}</h2>
  </div>
</template>
