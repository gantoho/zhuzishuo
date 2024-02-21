import { defineStore } from 'pinia'
import { ref } from 'vue'

const usePreviewStore = defineStore('previewStore', () => {
  const previewState = ref(false)
  const srcState = ref("")

  const toogleState = (src: any) => {
    console.log(src, "=========")
    srcState.value = src.target.currentSrc
    previewState.value = true
  }

  const close = () => {
    previewState.value = false
  }

  return {
    previewState,
    srcState,
    toogleState,
    close
  }
})

export default usePreviewStore