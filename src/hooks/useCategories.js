import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getCategories, createCategory } from '../api/categories.api'

export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
    retry: 1,
    refetchOnWindowFocus: false,
    onError: (error) => {
      // Solo loguear errores que no sean 401 (ya se manejan en el interceptor)
      if (error.response?.status !== 401) {
        console.error('Error al obtener categorías:', error)
      }
    },
  })
}

export const useCreateCategory = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] })
    },
  })
}




