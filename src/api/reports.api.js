import axiosInstance from './axiosInstance'

/**
 * Descarga un reporte PDF de gastos
 * @param {Object} filters - Filtros opcionales { startDate, endDate }
 * @returns {Promise} - Blob del archivo PDF
 */
export const downloadExpensesPDF = async (filters = {}) => {
  const params = new URLSearchParams()
  
  if (filters.startDate) params.append('startDate', filters.startDate)
  if (filters.endDate) params.append('endDate', filters.endDate)
  
  const queryString = params.toString()
  const url = `/reports/expenses-pdf${queryString ? `?${queryString}` : ''}`
  
  const response = await axiosInstance.get(url, {
    responseType: 'blob',
  })
  
  // Crear URL del blob y descargar
  const blob = new Blob([response.data], { type: 'application/pdf' })
  const urlBlob = window.URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = urlBlob
  
  // Generar nombre de archivo con fecha actual
  const today = new Date().toISOString().split('T')[0]
  link.download = `gastos_${today}.pdf`
  
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  window.URL.revokeObjectURL(urlBlob)
  
  return response.data
}

