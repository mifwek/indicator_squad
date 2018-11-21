const Discord = require("discord.js"); 

exports.run = async (bot, message, args) => {
   let user = message.mentions.users.first() || message.author;
   let imageEmbed = new Discord.RichEmbed()
   .setImage (`${results[0]}`)
   message.channel.send(imageEmbed)}

exports.help = {
  name: "image"
}
