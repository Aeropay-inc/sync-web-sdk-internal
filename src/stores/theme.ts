import { acceptHMRUpdate, defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  /*
  * App theme attributes
  */
  const isSideBarOpen = ref(true)

  const updateSideBarState = () => {
    isSideBarOpen.value = !isSideBarOpen.value
  }

  return {
    isSideBarOpen,
    updateSideBarState,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore as any, import.meta.hot))
