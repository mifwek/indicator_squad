const Discord = require('discord.js')

exports.run = async (bot, message, args) => {

var embedhelpadmin = new Discord.RichEmbed()
            .setTitle("List nama member indicator squad")
            .addField("Tersedia Sementara", "`mip`, `hadi`, `potato`, `bima`, `dinan`, `pororo`, `Snap`, `dina`, `suryo`, `papah`, \n`magnum`, `taufik`, `rifki`, `mail`")
            .addField("Contoh :", "Untuk menampilkan gambar ID member indicator squad, \nKetikkan perintah berikut ; \n`m=idinc_<nama member>`")
            .setColor(0x00FFEE)
            .setTimestamp();

            message.channel.send(embedhelpadmin)
    };

exports.help = {
    name: "idinc"
}
