const Discord = require('discord.js')

exports.run = async (bot, message, args) => {

let patEmb = new Discord.RichEmbed()
   .setTitle("**List ID Member Indicator Squad**")
   .addField("Tersedia", "`mip` \n `hadi` \n `potato` \n `bima` \n `dinan` \n `pororo` \n `Snap` \n `dina`");

message.channel.send(patEmb);

}

exports.help = {
    name: "memberinc"
}
