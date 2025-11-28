import PublicNavbar from '../components/PublicNavbar'
import { CheckCircle } from 'lucide-react'

const About = () => {
  const values = [
    {
      title: 'Simplicidad',
      description: 'Interfaz intuitiva y fácil de usar para todos.'
    },
    {
      title: 'Transparencia',
      description: 'Información clara y accesible sobre tus finanzas.'
    },
    {
      title: 'Seguridad',
      description: 'Protección de datos con los más altos estándares.'
    }
  ]

  return (
    <div className="min-h-screen bg-[#F5F6FA]">
      <PublicNavbar />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Título Principal */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#052B5B] mb-6">
              ¿Quiénes somos?
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Somos una plataforma diseñada para ayudar a las personas a gestionar de forma eficiente sus gastos diarios. Nuestro objetivo es ofrecer herramientas simples y seguras que permitan tomar decisiones financieras con claridad.
            </p>
          </div>

          {/* Sección de Valores */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-[#052B5B] mb-8 text-center">
              Nuestros Valores
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#052B5B]/10 rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-[#052B5B]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#052B5B] mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-600">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About


