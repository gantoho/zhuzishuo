<script setup lang='ts'>
import {  } from 'vue'
import Tools from '@/components/Tools.vue'

const motto = "你好，欢迎访问我的朋友圈";
</script>

<template>
  <div class="header">
    <Tools />
    <div class="info">
      <div class="avatar" :data-motto-text="motto">
        <div class="name">朱梓硕</div>
        <img src="@/assets/Snipaste_2024-01-17_17-42-41.png" width="100%" height="100%" />
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.header {
  background-image: url("@/assets/Guts_Berserk_2024_Mobile_Game_5K_Poster Wallpaper_1920x1080[10wallpaper.com].jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: var(--header-bg-color);
  background-blend-mode: darken;
  height: var(--header-height);
  color: #fff;
  display: flex;
  flex-direction: column;
  margin-bottom: 75px;

  .info {
    margin: auto var(--margin-size) -20px 0;

    .avatar {
      display: flex;
      justify-content: end;
      position: relative;

      .name {
        font-size: 24px;
        font-weight: 900;
        margin-top: 28px;
        margin-right: 20px;
      }

      img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 10px;
        box-shadow: 0 1px 10px #0000003a;
      }

      @media (max-width: 768px) {
        .name {
          margin-top: 18px;
        }
        img {
          width: 80px;
          height: 80px;
        }
      }

      &::after {
        content: attr(data-motto-text);
        display: block;
        width: 100%;
        color: var(--motto-text-color);
        position: absolute;
        top: calc(100% + 15px);
        right: 0;
        text-align: right;
        word-wrap: break-word;
      }
    }
  }
}
</style>
