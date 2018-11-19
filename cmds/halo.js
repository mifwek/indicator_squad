const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    message.channel.send("halo juga");
}

exports.help = {
	name: "halo"
}