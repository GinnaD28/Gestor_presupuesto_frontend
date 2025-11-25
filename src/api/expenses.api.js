import axiosInstance from './axiosInstance'

/**
 * Obtiene todos los gastos del usuario
 * @param {Object} filters - Filtros opcionales { category, startDate, endDate }
 * @returns {Promise} - Lista de gastos
 */
export const getExpenses = async (filters = {}) => {
  const params = new URLSearchParams()
  
  if (filters.category) params.append('category', filters.category)
  if (filters.startDate) params.append('startDate', filters.startDate)
  if (filters.endDate) params.append('endDate', filters.endDate)
  
  const queryString = params.toString()
  const url = `/expenses${queryString ? `?${queryString}` : ''}`
  
  const response = await axiosInstance.get(url)
  return response.data
}

/**
 * Obtiene un gasto por ID
 * @param {number} id - ID del gasto
 * @returns {Promise} - Datos del gasto
 */
export const getExpenseById = async (id) => {
  const response = await axiosInstance.get(`/expenses/${id}`)
  return response.data
}

/**
 * Crea un nuevo gasto
 * @param {Object} expenseData - Datos del gasto
 * @returns {Promise} - Gasto creado
 */
export const createExpense = async (expenseData) => {
  const response = await axiosInstance.post('/expenses', expenseData)
  return response.data
}

/**
 * Actualiza un gasto existente
 * @param {number} id - ID del gasto
 * @param {Object} expenseData - Datos actualizados
 * @returns {Promise} - Gasto actualizado
 */
export const updateExpense = async (id, expenseData) => {
  const response = await axiosInstance.put(`/expenses/${id}`, expenseData)
  return response.data
}

/**
 * Elimina un gasto
 * @param {number} id - ID del gasto
 * @returns {Promise} - Respuesta del servidor
 */
export const deleteExpense = async (id) => {
  const response = await axiosInstance.delete(`/expenses/${id}`)
  return response.data
}

