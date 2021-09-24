import * as yup from 'yup'

export const bookSchema = yup.object().shape({
    title: 
    yup.string()
        .required('Title is required')
        .min(6, 'Title must be at least 6 characters'),
    description: 
    yup.string()
        .required('Description is required')
        .min(10, 'Description must be at least 10 characters'),
    year: 
    yup.number()
        .required('Year is required')
        .min(4, 'Year must be 4 digits of number'),
    pages: 
    yup.number()
        .required('Page is required')
        .min(1, 'Year must be at least 0 pages'),
    language: 
    yup.string()
        .required('Language is required')
        .min(3, 'Language must be at least 3 characters'),
    publisher: 
    yup.string()
        .required('Publisher is required')
        .min(4, 'Publisher must be at least 4 characters'),
    price: 
    yup.number()
        .required('Price is required')
        .min(0, 'Price can not be 0'),
    purchaseAmount:
    yup.number()
        .required('Purchase amount is required')
        .min(0, 'Purchase amount can not be 0'),    
    stock: 
    yup.number()
        .required('Stock is required')
        .min(0, 'Stock cann ot be 0'),
})