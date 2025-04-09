import { acceptHMRUpdate, defineStore } from 'pinia'

export const useWidgetStore = defineStore('widget', () => {
  /*
  * Widget attributes
  */
  const widgetConfig = reactive({
    token: '',
    environment: 'QA',
    configurationId: '',
    aeroPassUserUuid: '',
  })

  return {
    widgetConfig,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore as any, import.meta.hot))
