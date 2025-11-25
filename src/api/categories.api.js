import axiosInstance from './axiosInstance'

/**
 * Obtiene todas las categorías
 * @returns {Promise} - Lista de categorías
 */
export const getCategories = async () => {
  const response = await axiosInstance.get('/categories')
  return response.data
}

/**
 * Crea una nueva categoría
 * @param {Object} categoryData - Datos de la categoría { name }
 * @returns {Promise} - Categoría creada
 */
export const createCategory = async (categoryData) => {
  const response = await axiosInstance.post('/categories', categoryData)
  return response.data
}

