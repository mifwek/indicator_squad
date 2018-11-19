const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    let user = message.mentions.users.first() || message.author;
      let embed = new Discord.RichEmbed()
      .setAuthor(`${user.username}'s Avatar`)
      .setImage(user.displayAvatarURL)
      .setColor('RANDOM')
      message.channel.send(embed)
}

exports.help = {
	name: "avatar"
}