<script setup lang='ts'>
import { } from 'vue'
import usePreviewStore from '@/store/previewStore';

const previewHook = () => {
  const previewStore = usePreviewStore()
  
  return {
    src: previewStore.srcState,
    close: previewStore.close
  }
}
const { src, close } = previewHook()

</script>

<template>
  <div class="preview">
    <div class="title">
      <span>图片</span>
      <div class="close" @click = close>x</div>
    </div>
    <div class="content">
      <img :src="src" alt="">
    </div>
  </div>
</template>

<style lang='scss' scoped>
.preview {
  width: 100%;
  min-height: 100vh;
  background-color: rgba(28, 28, 28, .5);
  backdrop-filter: saturate(180%) blur(10px);
  position: fixed;
  top: 0;
  left: 0;

  .title {
    text-align: center;
    color: white;
    font-weight: 900;
    font-size: 20px;
    margin: 30px 0;

    .close {
      cursor: pointer;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: white;
      color: red;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      position: absolute;
      right: 20px;
      top: 20px;
    }
  }

  .content {
    height: calc(100vh - 28px - 60px);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: auto;

    img, video {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>