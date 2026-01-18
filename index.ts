import { checkAllBooksAvailability } from './src/checkAvailability/checkAllBooksAvailability';
import { booksToCheck } from './src/config/booksToCheck';
import { sendWebhookMessage } from './src/discord/sendWebhookMessage';

const booksWithAvailability = await checkAllBooksAvailability(booksToCheck)
await sendWebhookMessage(booksWithAvailability)
