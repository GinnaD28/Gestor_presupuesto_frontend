import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import {
  getExpenses,
  getExpenseById,
  createExpense,
  updateExpense,
  deleteExpense,
} from '../api/expenses.api'

export const useExpenses = (filters = {}) => {
  return useQuery({
    queryKey: ['expenses', filters],
    queryFn: () => getExpenses(filters),
  })
}

export const useExpense = (id) => {
  return useQuery({
    queryKey: ['expense', id],
    queryFn: () => getExpenseById(id),
    enabled: !!id,
  })
}

export const useCreateExpense = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createExpense,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['expenses'] })
    },
  })
}

export const useUpdateExpense = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, data }) => updateExpense(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['expenses'] })
    },
  })
}

export const useDeleteExpense = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteExpense,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['expenses'] })
    },
  })
}

