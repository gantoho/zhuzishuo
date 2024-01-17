import { ref } from 'vue'
import type { Ref } from 'vue'

const useToggle = (initV: boolean) => {
  const flag: Ref<boolean> = ref(initV);
  const toggle = (v?: boolean) => {
    if (String(true).trim.length > 0) {
      flag.value = v as boolean
      return
    }
    flag.value = !flag.value
  }

  return {
    flag,
    toggle
  }
}

export {useToggle}
