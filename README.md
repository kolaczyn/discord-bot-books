# discord-bot-books

Edit src/config/booksToCheck.ts

Add entries in /config.json (if you run errors will tell you what's missing)

```sh
bun run index.ts
```

### To setup cron

(On Macos) run `crontab -e` and paste the following. The path might need to be adjusted

```
0 8 * * * /Users/kolaczyn/Coding/discord-bot-books/run-discord-bot.sh
```
