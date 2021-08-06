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
let ytdl = require("ytdl-core")

let channel;

// login as bot
client.login(config.token);

// events
client.on("ready", () => {
  
  console.log("[BOT] ready to 24/7 :)");
  
  channel = client.channels.cache.get(config.channel);
  if (!channel) return console.log("Invalid channel.");
  if (!channel.type === "voice") return console.log("Invalid channel.");
  
  handle()
  
});

client.on("voiceStateUpdate", async (oldV, newV) => {
  
  if (newV.member.id !== client.user.id) return;
  
  if (oldV.channel.id == channel.id && !newV.channel) {
    handle()
  }
  
});

async function handle() {
  if (!channel) return console.log("Invalid channel.");
  if (!channel.type === "voice") return console.log("Invalid channel.");  
  
  let Struct = {
    vc: channel,
    c: await channel.join()
  }

  play()
  
  async function play() {
			const dispatcher = Struct.c.play(ytdl('https://www.youtube.com/watch?v=5qap5aO4i9A'))
				.on('finish', () => {
          play(); 
				})
				.on('error', error => console.error(error));
			dispatcher.setVolumeLogarithmic(100 / 100);    
  }
}