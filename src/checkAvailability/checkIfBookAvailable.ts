import type { BookAvailability } from "../types"

const notAvailableMessage = '<p>Ten produkt jest niedostępny.</p>'

export const checkIfBookAvailable = async (bookUrl: string): Promise<BookAvailability> => {
    console.log(`Fetching... # ${bookUrl}`)
    const response = await fetch(bookUrl)
    const html = await response.text()

    console.log(`Fetching completed # ${bookUrl}`)

    if (response.status !== 200) return 'unknown'

    const isNotAvailable = html.includes(notAvailableMessage)
    return isNotAvailable ? 'not-available' : 'available'
}