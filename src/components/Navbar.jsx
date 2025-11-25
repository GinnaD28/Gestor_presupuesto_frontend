import { useAuthStore } from '../store/authStore'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const { user, logout } = useAuthStore()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-primary-600 dark:text-primary-400">
            Expense Tracker Pro
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">{user?.name || user?.email}</span>
          </div>
          <button
            onClick={handleLogout}
            className="btn-secondary text-sm"
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

