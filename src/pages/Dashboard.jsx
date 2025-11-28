import { useMemo } from 'react'
import { useExpenses } from '../hooks/useExpenses'
import { useCategories } from '../hooks/useCategories'
import { downloadExpensesPDF } from '../api/reports.api'
import { formatCurrency, formatDate } from '../utils/formatCurrency'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts'
import { DollarSign, Receipt, FolderOpen, Download } from 'lucide-react'

const Dashboard = () => {
  const { data: expensesData, isLoading: expensesLoading } = useExpenses()
  const { data: categoriesData } = useCategories()

  const expenses = expensesData?.data || []
  const categories = categoriesData?.data || []

  // Calcular total del mes actual
  const currentMonthTotal = useMemo(() => {
    const now = new Date()
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0)

    return expenses
      .filter((exp) => {
        const expDate = new Date(exp.date)
        return expDate >= startOfMonth && expDate <= endOfMonth
      })
      .reduce((sum, exp) => sum + exp.amount, 0)
  }, [expenses])

  // Calcular gastos por categoría
  const expensesByCategory = useMemo(() => {
    const categoryMap = {}
    expenses.forEach((exp) => {
      if (!categoryMap[exp.category]) {
        categoryMap[exp.category] = 0
      }
      categoryMap[exp.category] += exp.amount
    })

    return Object.entries(categoryMap).map(([name, value]) => ({
      name,
      value: parseFloat(value.toFixed(2)),
    }))
  }, [expenses])

  // Obtener gastos más recientes
  const recentExpenses = useMemo(() => {
    return [...expenses]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 5)
  }, [expenses])

  // Colores para el gráfico usando la paleta profesional
  const COLORS = [
    '#052B5B',
    '#1E5AA8',
    '#2A6FFF',
    '#00C4B3',
    '#8b5cf6',
    '#ec4899',
    '#f59e0b',
    '#10b981',
  ]

  const handleDownloadPDF = async () => {
    try {
      await downloadExpensesPDF()
    } catch (error) {
      console.error('Error al descargar PDF:', error)
      alert('Error al descargar el reporte PDF')
    }
  }

  if (expensesLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#052B5B]"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-[#052B5B]">Dashboard</h1>
          <p className="text-gray-600 mt-1">
            Resumen de tus gastos y finanzas
          </p>
        </div>
        <button 
          onClick={handleDownloadPDF} 
          className="bg-[#052B5B] hover:bg-[#1E5AA8] text-white font-semibold py-2.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center space-x-2"
        >
          <Download className="w-5 h-5" />
          <span>Descargar Reporte PDF</span>
        </button>
      </div>

      {/* Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card-modern">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total del Mes</p>
              <p className="text-3xl font-bold text-gray-dark">
                {formatCurrency(currentMonthTotal)}
              </p>
            </div>
            <div className="w-12 h-12 bg-[#052B5B]/10 rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-[#052B5B]" />
            </div>
          </div>
        </div>

        <div className="card-modern">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total de Gastos</p>
              <p className="text-3xl font-bold text-gray-dark">
                {expenses.length}
              </p>
            </div>
            <div className="w-12 h-12 bg-[#052B5B]/10 rounded-xl flex items-center justify-center">
              <Receipt className="w-6 h-6 text-[#052B5B]" />
            </div>
          </div>
        </div>

        <div className="card-modern">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Categorías</p>
              <p className="text-3xl font-bold text-gray-dark">
                {categories.length}
              </p>
            </div>
            <div className="w-12 h-12 bg-[#052B5B]/10 rounded-xl flex items-center justify-center">
              <FolderOpen className="w-6 h-6 text-[#052B5B]" />
            </div>
          </div>
        </div>
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Gráfico de pastel */}
        <div className="card-modern">
          <h2 className="card-header">
            Gastos por Categoría
          </h2>
          {expensesByCategory.length > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={expensesByCategory}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {expensesByCategory.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => formatCurrency(value)} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex items-center justify-center h-64 text-gray-500">
              No hay datos para mostrar
            </div>
          )}
        </div>

        {/* Gráfico de barras */}
        <div className="card-modern">
          <h2 className="card-header">
            Distribución de Gastos
          </h2>
          {expensesByCategory.length > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={expensesByCategory}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip formatter={(value) => formatCurrency(value)} />
                <Bar dataKey="value" fill="#052B5B" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex items-center justify-center h-64 text-gray-500">
              No hay datos para mostrar
            </div>
          )}
        </div>
      </div>

      {/* Gastos recientes */}
      <div className="card-modern">
        <h2 className="card-header">
          Gastos Más Recientes
        </h2>
        {recentExpenses.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#052B5B] uppercase tracking-wider">
                    Título
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#052B5B] uppercase tracking-wider">
                    Monto
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#052B5B] uppercase tracking-wider">
                    Categoría
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#052B5B] uppercase tracking-wider">
                    Fecha
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentExpenses.map((expense) => (
                  <tr key={expense.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-dark">
                      {expense.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-dark">
                      {formatCurrency(expense.amount)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-[#052B5B]/10 text-[#052B5B]">
                        {expense.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {formatDate(expense.date)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            No hay gastos registrados
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard
