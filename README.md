# discord-bot-books

Edit src/config/booksToCheck.ts

Add .env file based on .env.example. If you run the app, the errors will tell you what's missing.

```sh
bun run index.ts
```

### To setup cron

(On Macos) run `crontab -e` and paste the following. The path might need to be adjusted

```
0 8 * * * /Users/kolaczyn/Coding/discord-bot-books/run-discord-bot.sh
```
