const Discord = require('discord.js')

exports.run = async (bot, message, args) => {

let patEmb = new Discord.RichEmbed()
   .setTitle("**List ID Member Indicator Squad**")
   .setDescription("__**Tersedia**__ \n `mip` \n `hadi` \n `potato` \n `bima` \n `dinan` \n `pororo` \n `Snap` \n `dina`");
   .setFooter("Contoh : m=idinc_<nama member>")

message.channel.send(patEmb);

}

exports.help = {
    name: "idinc"
}
