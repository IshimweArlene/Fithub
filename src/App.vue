<script setup>
import Header from './components/Pages/Header.vue'
</script>

<template>
  <Header />
  <main class="page-content">
    <RouterView />
  </main>
</template>

<style>
html, body, #app {
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif;
}
.page-content {
  padding-top: 80px;
}
</style>