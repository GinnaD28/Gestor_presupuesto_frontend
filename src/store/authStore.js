import { create } from 'zustand'

const useAuthStore = create((set) => {
  // Inicializar desde localStorage si existe
  const initializeAuth = () => {
    const token = localStorage.getItem('token')
    const userStr = localStorage.getItem('user')
    
    if (token && userStr) {
      try {
        const user = JSON.parse(userStr)
        return {
          user: user,
          token: token,
          isAuth: true,
        }
      } catch (error) {
        // Si hay error al parsear, limpiar
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        return {
          user: null,
          token: null,
          isAuth: false,
        }
      }
    }
    return {
      user: null,
      token: null,
      isAuth: false,
    }
  }

  return {
    ...initializeAuth(),
    
    login: (userData, token) => {
      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(userData))
      set({
        user: userData,
        token: token,
        isAuth: true,
      })
    },
    
    logout: () => {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      set({
        user: null,
        token: null,
        isAuth: false,
      })
    },
    
    // Inicializar desde localStorage si existe
    initialize: () => {
      const auth = initializeAuth()
      set(auth)
    },
  }
})

export { useAuthStore }

