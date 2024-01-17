<script setup lang='ts'>
import {  } from 'vue'
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="layout">
    <Header />
    <Main><RouterView></RouterView></Main>
    <Footer />
  </div>
</template>

<style lang='scss' scoped>
.layout {
  width: 100%;
  max-width: 600px;
  min-height: 100vh;
  margin: 0 auto;
  background-color: var(--main-bg-color);
  overflow: hidden;
}
</style>
