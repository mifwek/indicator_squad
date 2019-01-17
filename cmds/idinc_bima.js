const Discord = require('discord.js')

exports.run = async (bot, message, args) => {

let patEmb = new Discord.RichEmbed()
   .setTitle("ID telah ditemukan")
   .setColor(0xA901DB)
   .setImage("https://cdn.discordapp.com/attachments/514635773895507979/535526587068710922/20190118_010104.jpg");

message.channel.send(patEmb);

}

exports.help = {
    name: "idinc_bima"
}
