import type { UserModule } from '~/types'
import { createPinia } from 'pinia'
import { useWidgetStore } from '~/stores/widget'

// Setup Pinia
export const install: UserModule = ({ isClient, initialState, app }) => {
  const pinia = createPinia()
  app.use(pinia)

  if (isClient) {
    pinia.state.value = (initialState.pinia) || {}
    const widgetStore = useWidgetStore()
    if (localStorage.getItem('widgetConfig'))
      widgetStore.widgetConfig = JSON.parse(localStorage.getItem('widgetConfig')!)
  }
  else {
    initialState.pinia = pinia.state.value
  }
}
