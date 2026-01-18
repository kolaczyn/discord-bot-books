import { checkIfBookAvailable } from "./checkIfBookAvailable";
import type { BookToCheck, BookWithAvailability } from "../types";

export const checkAllBooksAvailability = (books: BookToCheck[]): Promise<BookWithAvailability[]> => {
    return Promise.all(books.map(async (book) => {
        const availability = await checkIfBookAvailable(book.url);
        return {
            ...book,
            availability
        };
    }));
}