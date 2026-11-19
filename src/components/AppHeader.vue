<script setup>
import { navs } from '../data/portfolio'
</script>

<template>
  <header>
    <div class="brand">DEV.FOLIO</div>
    <ul class="menu">
      <li v-for="n in navs" :key="n.href">
        <a :href="n.href" class="nav-link">{{ n.label }}</a>
      </li>
    </ul>
  </header>
</template>
