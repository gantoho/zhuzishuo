<script setup lang='ts'>
import {  } from 'vue'
import pencil from '@/assets/icon_pencil_.webp'
import comment from '@/assets/icon_comment_square_.webp'
import reload from '@/assets/icon_reload_.webp'
import sun from '@/assets/icon_sun_.webp'
import moon from '@/assets/icon_moon_.webp'
import useDarkStore from '@/store/darkStore'

const darkStore = useDarkStore()
const themeBtn = ($event) => {
  darkStore.toggleTheme($event)
}

const reset = () => {
  window.location.reload()
}
</script>

<template>
  <div class="tools">
    <div class="tools-start">
      <img :src="pencil" alt="edit">
      <img :src="comment" alt="info">
    </div>
    <div class="tools-end">
      <img :src="reload" alt="reset" @click="reset">
      <img v-if="darkStore.dark" :src="moon" alt="moon" @click="themeBtn">
      <img v-else  :src="sun" alt="sun" @click="themeBtn">
    </div>
  </div>
</template>

<style lang='scss' scoped>
.tools {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px 0;
  
  .tools-start {
    img {
      width: 36px;
      height: 36px;
      cursor: pointer;
      filter: drop-shadow(2px 2px 4px #0000007a);

      + img {
        margin-left: 20px;
      }
    }
  }

  .tools-end {
    img {
      width: 36px;
      height: 36px;
      cursor: pointer;
      filter: drop-shadow(2px 2px 4px #0000007a);

      + img {
        margin-left: 20px;
      }
    }
  }
}
</style>
