import { NavigationGuard } from 'vue-router'
import { useAuthStore } from '@/store/auth'

export const authentication = (): NavigationGuard => async (to, from, next) => {
  const { isAuthenticated } = useAuthStore()

  if (!isAuthenticated) {
    next({ name: 'login' })
  } else {
    next()
  }
}

export const mainAuth = (): NavigationGuard => async (to, from, next) => {
  const { isAuthenticated } = useAuthStore()

  if (isAuthenticated) {
    next({ name: 'main' })
  } else {
    next()
  }
}