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

// distube
const Distube = require("distube");
let distube = new Distube(client, {
  searchSongs: false,
  leaveOnEmpty: false
})

let channel;

// login as bot
client.login(config.token);

// events
client.on("ready", () => {
  
  console.log("[BOT] ready to 24/7 :)");
  
  channel = client.channels.cache.get(config.channel);
  if (!channel) return console.log("Invalid channel.");
  if (!channel.type === "voice") return console.log("Invalid channel.");
  
  distube.play(null, "https://www.youtube.com/watch?v=5qap5aO4i9A");
  distube.setRepeatMode()
  
});

client.on("voiceStateUpdate", async (oldV, newV) => {
  
  
  
});