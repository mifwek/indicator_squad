const Discord = require('discord.js')

exports.run = async (bot, message, args) => {

var embedhelpadmin = new Discord.RichEmbed()
            .setTitle("List nama member kalap squad")
            .addField("Coming soon", "`-`")
            .addField("Contoh :", "Untuk menampilkan gambar ID member Kalap, \nKetikkan perintah berikut ; \n`m=idkalap_<nama member>`")
            .setColor(0x00FFEE)
            .setFooter("By OFFICIAL BOT")

            message.channel.send(embedhelpadmin)
    };

exports.help = {
    name: "idkalap"
}
