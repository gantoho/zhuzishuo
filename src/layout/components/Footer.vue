<script setup lang='ts'>
import {  } from 'vue'
</script>

<template>
  <div class="footer">@<a href="//ganto.me">zhuozishuo.ganto.cn</a> &copy; 版权所有</div>
</template>

<style lang='scss' scoped>
.footer {
  margin: 20px var(--margin-size);
  text-align: center;
  color: var(--main-text-color);

  a {
    color: #1b8dff;
    font-weight: 900;

    &:hover {
      color: #00ffee;
    }
  }
}
</style>
