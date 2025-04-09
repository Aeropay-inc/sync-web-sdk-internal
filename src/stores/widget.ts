import { acceptHMRUpdate, defineStore } from 'pinia'

export const useWidgetStore = defineStore('widget', () => {
  /*
  * Widget attributes
  */
  const widgetConfig = reactive({
    token: '',
    environment: '',
    configurationId: '',
    aeroPassUserUuid: '',
  })
  function updateToken(value: string) {
    widgetConfig.token = value
  }
  function updateEnvironment(value: string) {
    widgetConfig.environment = value
  }
  function updateConfigurationId(value: string) {
    widgetConfig.configurationId = value
  }
  function updateAeroPassUserUuid(value: string) {
    widgetConfig.aeroPassUserUuid = value
  }

  return {
    widgetConfig,
    updateToken,
    updateEnvironment,
    updateConfigurationId,
    updateAeroPassUserUuid,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore as any, import.meta.hot))
