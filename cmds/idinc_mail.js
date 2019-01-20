const Discord = require('discord.js')

exports.run = async (bot, message, args) => {

let patEmb = new Discord.RichEmbed()
   .setTitle("ID telah ditemukan")
   .setColor(0xA901DB)
   .setImage("https://cdn.discordapp.com/attachments/514635773895507979/536461771976998912/20190120_152646.jpg");

message.channel.send(patEmb);

}

exports.help = {
    name: "idinc_mail"
}
