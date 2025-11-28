import { Link } from 'react-router-dom'
import PublicNavbar from '../components/PublicNavbar'
import { Shield, TrendingUp, FileText } from 'lucide-react'

const Home = () => {
  return (
    <div className="min-h-screen bg-[#F5F6FA]">
      <PublicNavbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#052B5B] mb-6">
            Gestiona tus gastos con eficiencia
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Organiza, analiza y controla tus finanzas en un solo lugar.
          </p>
          <Link
            to="/register"
            className="inline-block bg-[#052B5B] hover:bg-[#0B4F8A] text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Comenzar
          </Link>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Seguridad */}
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-[#052B5B]/10 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-[#052B5B]" />
              </div>
              <h3 className="text-xl font-bold text-[#052B5B] mb-3">
                Seguridad
              </h3>
              <p className="text-gray-600">
                Tus datos siempre protegidos
              </p>
            </div>

            {/* Card 2: Control Financiero */}
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-[#052B5B]/10 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-[#052B5B]" />
              </div>
              <h3 className="text-xl font-bold text-[#052B5B] mb-3">
                Control Financiero
              </h3>
              <p className="text-gray-600">
                Monitorea tus gastos en tiempo real
              </p>
            </div>

            {/* Card 3: Reportes Inteligentes */}
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-[#052B5B]/10 rounded-xl flex items-center justify-center mb-6">
                <FileText className="w-8 h-8 text-[#052B5B]" />
              </div>
              <h3 className="text-xl font-bold text-[#052B5B] mb-3">
                Reportes Inteligentes
              </h3>
              <p className="text-gray-600">
                Visualiza tus finanzas con claridad
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home


