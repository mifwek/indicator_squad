const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
     let user = message.mentions.users.first() || message.author;
        let embed = new Discord.RichEmbed()
        .setAuthor(`${user.tag}'s Info`, user.displayAvatarURL)
        .setThumbnail(user.displayAvatarURL)
        .setColor('RANDOM')
        .addField('ID', user.id, true)
        .addField('Username', user.username, true)
        .addField('Discrim', user.discriminator, true)
        .addField('Status', user.presence.status, true)
        .addField('Bot?', user.bot, true)
        .setThumbnail()
        message.channel.send(embed)
}

exports.help = {
	name: "userinfo"
}