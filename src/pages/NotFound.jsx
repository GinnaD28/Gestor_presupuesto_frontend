import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary-600 dark:text-primary-400">404</h1>
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-4">
          Página no encontrada
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2 mb-8">
          La página que buscas no existe o ha sido movida.
        </p>
        <Link to="/dashboard" className="btn-primary">
          Volver al Dashboard
        </Link>
      </div>
    </div>
  )
}

export default NotFound





