import type { WidgetConfigType } from '~/interfaces/widget.interface'
import { acceptHMRUpdate, defineStore } from 'pinia'

export const useWidgetStore = defineStore('widget', () => {
  /*
  * Widget attributes
  */
  const isWidgetConfigSet = ref(false)
  const widgetConfig = ref({
    token: '',
    environment: 'QA',
    configurationId: '',
    aeroPassUserUuid: '',
  })

  const updateWidgetConfig = (value: WidgetConfigType) => {
    widgetConfig.value = value
  }

  watch(() => widgetConfig.value.token, (n) => {
    isWidgetConfigSet.value = n.trim() !== ''
  })

  return {
    widgetConfig,
    isWidgetConfigSet,
    updateWidgetConfig,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore as any, import.meta.hot))
