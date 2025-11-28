import { Link, useLocation } from 'react-router-dom'

const PublicNavbar = () => {
  const location = useLocation()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#052B5B] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-white">Reporte de Gastos</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`transition-colors duration-200 font-medium ${
                location.pathname === '/'
                  ? 'text-white'
                  : 'text-white hover:text-gray-200'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`transition-colors duration-200 font-medium ${
                location.pathname === '/about'
                  ? 'text-white'
                  : 'text-white hover:text-gray-200'
              }`}
            >
              About Us
            </Link>
            <Link
              to="/login"
              className={`transition-colors duration-200 font-medium ${
                location.pathname === '/login'
                  ? 'text-white'
                  : 'text-white hover:text-gray-200'
              }`}
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white hover:text-gray-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default PublicNavbar
