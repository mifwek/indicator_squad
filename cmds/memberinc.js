const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
    var images = ["https://cdn.discordapp.com/attachments/514635773895507979/534152302098120734/20190114_061710.jpg"];
    var rand = Math.floor(Math.random() * images.length);
    var randomImage = images[rand];

const patEmb = new Discord.RichEmbed()
   .setColor(0xA901DB)
   .setImage(randomImage);

message.channel.send(patEmb);

}

exports.help = {
    name: "memberinc"
}
