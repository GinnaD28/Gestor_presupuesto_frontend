import { useState } from 'react'

const CategoryForm = ({ onSubmit, onCancel, isLoading, existingCategories = [] }) => {
  const [name, setName] = useState('')
  const [error, setError] = useState('')

  const validate = () => {
    if (!name.trim()) {
      setError('El nombre de la categoría es requerido')
      return false
    }

    if (name.length > 100) {
      setError('El nombre no puede exceder 100 caracteres')
      return false
    }

    // Validar duplicados
    const normalizedName = name.trim().toLowerCase()
    const exists = existingCategories.some(
      (cat) => cat.name.toLowerCase() === normalizedName
    )

    if (exists) {
      setError('Esta categoría ya existe')
      return false
    }

    setError('')
    return true
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      onSubmit({ name: name.trim() })
      setName('')
      setError('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Nombre de la categoría *
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
            if (error) setError('')
          }}
          className={`input-field ${error ? 'border-red-500' : ''}`}
          placeholder="Ej: Alimentación, Transporte"
        />
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>

      <div className="flex justify-end space-x-3 pt-4">
        <button
          type="button"
          onClick={() => {
            onCancel()
            setName('')
            setError('')
          }}
          className="btn-secondary"
          disabled={isLoading}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="btn-primary"
          disabled={isLoading}
        >
          {isLoading ? 'Creando...' : 'Crear Categoría'}
        </button>
      </div>
    </form>
  )
}

export default CategoryForm

