import type { ToastContainerOptions } from 'vue3-toastify'
import type { UserModule } from '~/types'
import Vue3Toastify from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export const install: UserModule = ({ app }) => {
  app.use(Vue3Toastify, {
    autoClose: 3000,
  } as ToastContainerOptions)
}
