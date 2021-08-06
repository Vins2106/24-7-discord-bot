/*

* using discord.js v12.5.3
* make by Vins 2106
* please give me a credit if you want use this :)

*/

// process .env
require("dotenv").config();

// config
const config = {
  token: process.env.TOKEN,
  channel: process.env.CHANNEL
};

// bot
const Discord = require("discord.js");
const client = new Discord.Client({
  disableMentions: "everyone"
});

// login as bot
client.login(config.token);

// events
client.on("ready", () => {
  
  
})