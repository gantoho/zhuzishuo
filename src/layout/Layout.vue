<script setup lang='ts'>
import {  } from 'vue'
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';

import Preview from '@/components/Preview.vue'
import usePreviewStore from '@/store/previewStore';
</script>

<template>
  <div class="layout">
    <Header />
    <Main><RouterView></RouterView></Main>
    <Footer />
  </div>

  <Preview v-if="usePreviewStore().previewState"/>
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
