<script setup lang='ts'>
import { ref } from 'vue'
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

const dialogRef = ref(null)
const publish = () => {
  dialogRef.value.showModal()
}
const close = () => {
  dialogRef.value.close()
}
const published = () => {
  alert('TODO：发布功能未完成')
  dialogRef.value.close()
}

const reset = () => {
  window.location.reload()
}

const info = () => {
  alert('TODO：信息功能未完成')
}
</script>

<template>
  <div class="tools">
    <div class="tools-start">
      <img :src="pencil" alt="publish" @click="publish">
      <img :src="comment" alt="info" @click="info">
    </div>
    <div class="tools-end">
      <img :src="reload" alt="reset" @click="reset">
      <img v-if="darkStore.dark" :src="moon" alt="moon" @click="themeBtn">
      <img v-else  :src="sun" alt="sun" @click="themeBtn">
    </div>
  </div>
  <dialog ref="dialogRef" id="dialog">
    <textarea name="" id="" cols="30" rows="10"></textarea>
    <div class="dialog-buttons">
      <button @click="close">关闭</button>
      <button @click="published">发布</button>
    </div>
  </dialog>
</template>

<style lang='scss' scoped>
.tools {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px 0;
  
  .tools-start {
    img {
      width: 26px;
      height: 26px;
      cursor: pointer;
      filter: drop-shadow(2px 2px 4px #0000007a);

      + img {
        margin-left: 20px;
      }
    }
  }

  .tools-end {
    img {
      width: 26px;
      height: 26px;
      cursor: pointer;
      filter: drop-shadow(2px 2px 4px #0000007a);

      + img {
        margin-left: 20px;
      }
    }
  }
}

#dialog {
  background-color: var(--main-bg-color);
  color: var(--main-text-color);
  margin: auto;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #c0c0c0;

  textarea {
    background-color: transparent;
  }

  .dialog-buttons {
    text-align: right;

    button {
      background-color: var(--main-bg-color);
      color: var(--main-text-color);

      + button {
        margin-left: 10px;
      }
    }
  }
}
</style>
