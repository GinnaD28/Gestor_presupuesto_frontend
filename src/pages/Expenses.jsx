import { useState } from 'react'
import { useExpenses, useCreateExpense, useUpdateExpense, useDeleteExpense } from '../hooks/useExpenses'
import { useCategories } from '../hooks/useCategories'
import ExpenseTable from '../components/ExpenseTable'
import ExpenseForm from '../components/ExpenseForm'
import { downloadExpensesPDF } from '../api/reports.api'
import { formatDateInput } from '../utils/formatCurrency'
import { Download, Plus } from 'lucide-react'

const Expenses = () => {
  const [showModal, setShowModal] = useState(false)
  const [editingExpense, setEditingExpense] = useState(null)
  const [filters, setFilters] = useState({
    category: '',
    startDate: '',
    endDate: '',
  })

  const { data: expensesData, isLoading } = useExpenses(filters)
  const { data: categoriesData } = useCategories()
  const createMutation = useCreateExpense()
  const updateMutation = useUpdateExpense()
  const deleteMutation = useDeleteExpense()

  const expenses = expensesData?.data || []
  const categories = categoriesData?.data || []

  const handleCreate = () => {
    setEditingExpense(null)
    setShowModal(true)
  }

  const handleEdit = (expense) => {
    setEditingExpense(expense)
    setShowModal(true)
  }

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este gasto?')) {
      try {
        await deleteMutation.mutateAsync(id)
      } catch (error) {
        console.error('Error al eliminar:', error)
        alert('Error al eliminar el gasto')
      }
    }
  }

  const handleSubmit = async (formData) => {
    try {
      if (editingExpense) {
        await updateMutation.mutateAsync({
          id: editingExpense.id,
          data: formData,
        })
      } else {
        await createMutation.mutateAsync(formData)
      }
      setShowModal(false)
      setEditingExpense(null)
    } catch (error) {
      console.error('Error al guardar:', error)
      const errorMessage =
        error?.response?.data?.message || 'Error al guardar el gasto'
      alert(errorMessage)
    }
  }

  const handleCancel = () => {
    setShowModal(false)
    setEditingExpense(null)
  }

  const handleFilterChange = (e) => {
    const { name, value } = e.target
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const clearFilters = () => {
    setFilters({
      category: '',
      startDate: '',
      endDate: '',
    })
  }

  const handleDownloadPDF = async () => {
    try {
      await downloadExpensesPDF({
        startDate: filters.startDate || undefined,
        endDate: filters.endDate || undefined,
      })
    } catch (error) {
      console.error('Error al descargar PDF:', error)
      alert('Error al descargar el reporte PDF')
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Gastos</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Gestiona todos tus gastos
          </p>
        </div>
        <div className="flex space-x-3">
          <button onClick={handleDownloadPDF} className="btn-secondary flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Descargar PDF</span>
          </button>
          <button onClick={handleCreate} className="btn-primary flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Nuevo Gasto</span>
          </button>
        </div>
      </div>

      {/* Filtros */}
      <div className="card">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Filtros
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Categoría
            </label>
            <select
              name="category"
              value={filters.category}
              onChange={handleFilterChange}
              className="input-field"
            >
              <option value="">Todas</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Fecha Inicial
            </label>
            <input
              type="date"
              name="startDate"
              value={filters.startDate}
              onChange={handleFilterChange}
              className="input-field"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Fecha Final
            </label>
            <input
              type="date"
              name="endDate"
              value={filters.endDate}
              onChange={handleFilterChange}
              className="input-field"
            />
          </div>
        </div>

        {(filters.category || filters.startDate || filters.endDate) && (
          <div className="mt-4">
            <button onClick={clearFilters} className="btn-secondary text-sm">
              Limpiar Filtros
            </button>
          </div>
        )}
      </div>

      {/* Tabla de gastos */}
      <ExpenseTable
        expenses={expenses}
        onEdit={handleEdit}
        onDelete={handleDelete}
        isLoading={isLoading}
      />

      {/* Modal para crear/editar */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {editingExpense ? 'Editar Gasto' : 'Nuevo Gasto'}
              </h2>
              <button
                onClick={handleCancel}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                ✕
              </button>
            </div>
            <ExpenseForm
              expense={editingExpense}
              onSubmit={handleSubmit}
              onCancel={handleCancel}
              isLoading={createMutation.isPending || updateMutation.isPending}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Expenses

