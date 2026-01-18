export type BookToCheck = {
    title: string,
    url: `https://www.mag-sklep.pl/pl/p/${string}`
}

export type BookAvailability = 'available' | 'not-available' | 'unknown'

export type BookWithAvailability = BookToCheck & {
    availability: BookAvailability
}