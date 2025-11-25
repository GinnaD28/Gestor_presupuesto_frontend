import { useMutation } from '@tanstack/react-query'
import { useAuthStore } from '../store/authStore'
import { login as loginApi, register as registerApi } from '../api/auth.api'
import { useNavigate } from 'react-router-dom'

export const useLogin = () => {
  const { login } = useAuthStore()
  const navigate = useNavigate()

  return useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      if (data.success && data.data) {
        const { user, token } = data.data
        localStorage.setItem('user', JSON.stringify(user))
        login(user, token)
        navigate('/dashboard')
      }
    },
  })
}

export const useRegister = () => {
  const { login } = useAuthStore()
  const navigate = useNavigate()

  return useMutation({
    mutationFn: registerApi,
    onSuccess: (data) => {
      if (data.success && data.data) {
        const { user, token } = data.data
        localStorage.setItem('user', JSON.stringify(user))
        login(user, token)
        navigate('/dashboard')
      }
    },
  })
}

