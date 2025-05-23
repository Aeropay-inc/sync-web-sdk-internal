import type { WidgetConfigType } from '~/interfaces/widget.interface'
import { acceptHMRUpdate, defineStore } from 'pinia'

export const useWidgetStore = defineStore('widget', () => {
  /*
  * Widget attributes
  */
  const isWidgetConfigSet = ref(false)
  const widgetConfig = ref<WidgetConfigType>({
    token: '',
    environment: 'qa',
    configurationId: '',
    aeroPassUserUuid: '',
    isEmbeddedFlow: true,
    sdkVersion: 'v111',
    handleMFA: false,
    connectionId: '',
    jobId: '',
  })

  const updateWidgetConfig = (value: WidgetConfigType) => {
    widgetConfig.value = {
      ...widgetConfig.value,
      ...value,
    }
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
