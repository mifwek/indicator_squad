const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
   message.member.voiceChannel.join().then(x => x.playStream('https://www.rmfon.pl/play,156'));
}

exports.help = {
	name: "radio"
}
