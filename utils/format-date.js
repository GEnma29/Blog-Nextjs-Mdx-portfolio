import { format, compareAsc } from 'date-fns'

export const formatDate = (date) =>format(new Date(date.split('-')), 'MM/dd/yyyy')