const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("Informasi Bot")
    .setColor("RANDOM")
    .setThumbnail(bicon)
    .addField("Nama Bot", bot.user.username)
    .addField("Dibuat", bot.user.createdAt);
    message.channel.send(botembed);
}

exports.help = {
	name: "botinfo"
}