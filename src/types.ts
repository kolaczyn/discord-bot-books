export type BookToCheck = {
    title: string,
    url: `https://www.mag-sklep.pl/pl/p/${string}`,
    /** If it's set to `true`, it will ping @everybody that it's available */
    important: boolean
}

export type BookAvailability = 'available' | 'not-available' | 'unknown'

export type BookWithAvailability = BookToCheck & {
    availability: BookAvailability
}