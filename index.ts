import { Client, Events, GatewayIntentBits } from "discord.js";
import { APP_TOKEN } from "./config.json";
import { EmbedBuilder, WebhookClient } from 'discord.js';
import { APP_WEBHOOK_ID, APP_WEBHOOK_TOKEN } from './config.json';

const exampleLoginBot = async () => {
	const client = new Client({ intents: [GatewayIntentBits.Guilds] });
	// When the client is ready, run this code (only once).
	// The distinction between `client: Client<boolean>` and `readyClient: Client<true>` is important for TypeScript developers.
	// It makes some properties non-nullable.
	client.once(Events.ClientReady, (readyClient) => {
		console.log(`Ready! Logged in as ${readyClient.user.tag}`);
	});

	await client.login(APP_TOKEN);
}

const exampleWebhook = async () => {
	const webhookClient = new WebhookClient({ id: APP_WEBHOOK_ID, token: APP_WEBHOOK_TOKEN });
	const embed = new EmbedBuilder().setTitle('Some Title').setColor(0x00ffff);
	webhookClient.send({
		content: 'Webhook test',
		username: 'some-username',
		avatarURL: 'https://i.imgur.com/AfFp7pu.png',
		embeds: [embed],
	});
}

exampleWebhook()