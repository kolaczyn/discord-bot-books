import { describe, expect, test } from "bun:test";
import { checkIfBookAvailable } from "./checkIfBookAvailable";

// This test will fail when the books' availability status will change, but I don't really care much about that
test('Available book', async () => {
    const bookUrl = 'https://www.mag-sklep.pl/pl/p/LAPIDUCH/1315'
    const result = await checkIfBookAvailable(bookUrl)
    expect(result).toBe('available')
});

test('Available book', async () => {
    const bookUrl = 'https://www.mag-sklep.pl/pl/p/STOP-PRAWA-wydanie-jubileuszowe/1065'
    const result = await checkIfBookAvailable(bookUrl)
    expect(result).toBe('not-available')
});