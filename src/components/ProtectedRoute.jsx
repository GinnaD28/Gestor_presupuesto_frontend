import { Navigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import { useEffect } from 'react'

const ProtectedRoute = ({ children }) => {
  const { isAuth, initialize } = useAuthStore()

  useEffect(() => {
    initialize()
  }, [initialize])

  if (!isAuth) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default ProtectedRoute

