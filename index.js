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
let { Collection } = require("discord.js");
let MUSIC = new Collection();

let channel;

// login as bot
client.login(config.token);

// events
client.on("ready", () => {
  
  console.log("[BOT] ready to 24/7 :)");
  
  channel = client.channels.cache.get(config.channel);
  if (!channel) return console.log("Invalid channel.");
  if (!channel.type === "voice") return console.log("Invalid channel.");
  
});

client.on("voiceStateUpdate", async (oldV, newV) => {
  
  
  
});

async function handle() {
  if (!channel) return console.log("Invalid channel.");
  if (!channel.type === "voice") return console.log("Invalid channel.");  
  
  let Struct = {
    vc: channel
  }

			const dispatcher = queue.connection.play(ytdl(song.url))
				.on('finish', () => {
          handle();
				})
				.on('error', error => console.error(error));
			dispatcher.setVolumeLogarithmic(queue.volume / 5);
			queue.textChannel.send(`🎶 Start playing: **${song.title}**`);  
}