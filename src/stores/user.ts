import { acceptHMRUpdate, defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  /*
  * User login attributes
  */
  const username = ref('')

  function isLoggedIn() {
    return username.value !== null && username.value.trim() !== ''
  }

  return {
    isLoggedIn,
    username,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore as any, import.meta.hot))
