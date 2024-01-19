<template>
  <div class="not-found">404</div>
</template>

<style lang='scss' scoped>
.not-found {
  font-size: 100px;
  text-align: center;
  color: var(--main-text-color);
  // animation: clip 1s linear infinite;
  animation-name: myClip;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  animation-fill-mode: both;
  animation-duration: 1s;
  background-image: linear-gradient(90deg,rgb(255, 101, 101) 50%, rgb(114, 114, 255) 50%);
  -webkit-background-clip: text;
  background-clip: text;    
  color: transparent;
  -webkit-text-fill-color: transparent;

  @keyframes myClip {
    0% {
      clip-path: circle(0% at 100% 100%);
    }
    100%{
      clip-path: circle(100% at 100% 100%);
    }
  }
}
</style>
