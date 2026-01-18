import type { BookAvailability, BookWithAvailability } from "../types";

const makeBookAvailabilityStr = (bookAvailability: BookAvailability): string => {
    if (bookAvailability === 'available') return '**dostępna!**'
    if (bookAvailability === 'not-available') return 'niedostępna'

    return 'nieznany'
}

export const makeMessage = (booksArr: BookWithAvailability[]) => {
    const isAnyBookAvailable = booksArr.some(book => book.availability === 'available')
    const availableHeader = isAnyBookAvailable ? '@everyone coś jest dostępne!\n' : ''
    const statusBody = booksArr.map(book => `[${book.title}](${book.url}): ${makeBookAvailabilityStr(book.availability)}`).join('\n')

    return [availableHeader, statusBody].join('')
}