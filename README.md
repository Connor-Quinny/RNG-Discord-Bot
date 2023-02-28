# RNG-Discord-Bot
This project is a discord bot that uses a slash command for you to type a number, and it will choose a random number from 1 - your number, and will announce the winner as the first person to reply with the correct number.

# Instructions
```
git clone https://github.com/Connor-Quinny/name
cd name
```
- `npm install`
- Create a `config.json` file 
- Fill these values in your config file: 

```
{
    "clientId": "your clientId", 
    "guildId": "your guildId", 
    "token": "your token"
}
```
- add `config.json` to `.gitignore`
- `node deployCommands.js`
- `node index.js`