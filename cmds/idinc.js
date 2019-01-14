const Discord = require('discord.js')

exports.run = async (bot, message, args) => {

var patEmb = new Discord.RichEmbed()
   .setTitle("**List ID Member Indicator Squad**")
   .addField("Tersedia", "`mip`, `hadi`, `potato`, `bima`, `dinan`, `pororo`, `Snap`, `dina`");
   .addField("Contoh :", "m=idinc_<nama member>")
   .setColor(0x00FFEE)
   .setTimestamp();

message.channel.send(patEmb);

}

exports.help = {
    name: "idinc"
}
