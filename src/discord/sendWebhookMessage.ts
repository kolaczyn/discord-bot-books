import { EmbedBuilder, WebhookClient } from 'discord.js';
import { APP_WEBHOOK_ID, APP_WEBHOOK_TOKEN } from '../../config.json';
import type { BookWithAvailability } from '../types';
import { makeMessage } from './makeMessage';

export const sendWebhookMessage = async (booksWithAvailability: BookWithAvailability[]) => {
    console.log('Sending Webhook message...')
    const messageContent = makeMessage(booksWithAvailability)

    const webhookClient = new WebhookClient({ id: APP_WEBHOOK_ID, token: APP_WEBHOOK_TOKEN });

    const embed = new EmbedBuilder().setTitle('Status książek').setColor(0x00b0f4).setDescription(messageContent)
    await webhookClient.send({
        username: 'Status książek',
        avatarURL: 'https://www.graphicaudio.net/media/catalog/product/cache/7ce806cc4796fb4daabf8be971ff5dcb/m/i/mistborn-vin.jpg',
        embeds: [embed],
    });

    console.log('Sending Webhook message completed')
}