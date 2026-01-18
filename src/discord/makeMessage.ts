import type { BookAvailability, BookWithAvailability } from "../types";

const makeBookAvailabilityStr = ({ availability, important }: BookWithAvailability): string => {
    if (availability === 'available') {
        return important ? '**dostępna!**' : 'dostępna'
    }
    if (availability === 'not-available') return 'niedostępna'

    return 'nieznany'
}

export const makeMessage = (booksArr: BookWithAvailability[]) => {
    const isAnyImportantBookAvailable = booksArr.filter(x => x.important).some(book => book.availability === 'available')
    const availableHeader = isAnyImportantBookAvailable ? '@everyone coś jest dostępne!\n' : ''
    const statusBody = booksArr.map(book => `[${book.title}](${book.url}): ${makeBookAvailabilityStr(book)}`).join('\n')

    return [availableHeader, statusBody].join('')
}