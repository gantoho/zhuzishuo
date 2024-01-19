import { defineStore } from "pinia";
import { ref, computed } from 'vue'
import { useDark, useToggle } from '@vueuse/core'

const useDarkStore = defineStore('darkStore', () => {
  const isDark = useDark()
  const toggleDark = useToggle(isDark)
  const dark = ref(isDark)
  const darkMode = computed(() => {
    return dark.value? 'dark' : 'light'
  })

  const toggleTheme = ($event) => {
    const x = $event.clientX
    const y = $event.clientY
    // 计算鼠标点击位置距离视窗的最大圆半径
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y),
    )
    document.documentElement.style.setProperty('--tx', x + 'px')
    document.documentElement.style.setProperty('--ty', y + 'px')
    document.documentElement.style.setProperty('--tr', endRadius + 'px')
    // 判断浏览器是否支持document.startViewTransition
    if ((document as any).startViewTransition) {
      // 如果支持就使用document.startViewTransition方法
      (document as any).startViewTransition(() => {
        dark.value = toggleDark()
      })
    } else {
      // 如果不支持，就使用最原始的方式，切换主题
      dark.value = toggleDark()
    }
  }

  return {
    dark,
    darkMode,
    toggleTheme
  }
})

export default useDarkStore
