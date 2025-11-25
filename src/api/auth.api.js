import axiosInstance from './axiosInstance'

/**
 * Registra un nuevo usuario
 * @param {Object} userData - Datos del usuario { name, email, password }
 * @returns {Promise} - Respuesta del servidor
 */
export const register = async (userData) => {
  const response = await axiosInstance.post('/auth/register', userData)
  return response.data
}

/**
 * Inicia sesión con email y contraseña
 * @param {Object} credentials - Credenciales { email, password }
 * @returns {Promise} - Respuesta del servidor con token y usuario
 */
export const login = async (credentials) => {
  const response = await axiosInstance.post('/auth/login', credentials)
  return response.data
}

