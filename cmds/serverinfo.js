const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setTitle("Informasi Server")
    .setColor("RANDOM")
    .setThumbnail(sicon)
    .addField("Nama Server", message.guild.name)
    .addField("ID", message.guild.id)
    .addField("Member", message.guild.memberCount)
    .addField("Negara", message.guild.region)
    .addField("Dibuat", message.guild.createdAt)
    .addField("Owner", message.guild.owner)

    message.channel.send(serverembed);
}

exports.help = {
	name: "serverinfo"
}