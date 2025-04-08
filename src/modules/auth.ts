import type { UserModule } from '~/types'

export const install: UserModule = ({ isClient, router }) => {
  if (isClient) {
    router.beforeEach((to, from, next) => {
      const user = useUserStore()
      if(to.meta.requireAuth && !user.isLoggedIn()) {
          next('/')
        } else {
          next()
        }
    })
  }
}
