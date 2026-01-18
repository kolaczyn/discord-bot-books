import { Client, Events, GatewayIntentBits } from 'discord.js';
import { APP_TOKEN } from '../../config.json';

export const exampleLoginBot = async () => {
    const client = new Client({ intents: [GatewayIntentBits.Guilds] });

    client.once(Events.ClientReady, (readyClient) => {
        console.log(`Ready! Logged in as ${readyClient.user.tag}`);
    });

    await client.login(APP_TOKEN);
}