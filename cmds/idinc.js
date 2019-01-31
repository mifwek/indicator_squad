const Discord = require('discord.js')

exports.run = async (bot, message, args) => {

var embedhelpadmin = new Discord.RichEmbed()
            .setTitle("List nama member indicator squad")
            .addField("Tersedia Sementara", "`hadi`, `potato`, `bima`, `dinan`, `pororo`, `papah`, `taufik`, `rifki`, `mail`")
            .addField("Contoh :", "Untuk menampilkan gambar ID member INC, \nKetikkan perintah berikut ; \n`m=idinc_<nama member>`")
            .setColor(0x00FFEE)
            .setFooter("By OFFICIAL BOT")

            message.channel.send(embedhelpadmin)
    };

exports.help = {
    name: "idinc"
}
