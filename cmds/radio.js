const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
   message.member.voiceChannel.join().then(x => x.playStream('https://listen.moe/opus'));
}

exports.help = {
	name: "radio"
}
