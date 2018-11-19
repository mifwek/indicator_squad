const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
     if(isNaN(args[0])) return message.channel.send('Harap berikan jumlah yang valid untuk membersihkan atau menghapus pesan!');
      if (args[0] > 100) return message.channel.send('Berikan jumlah kurang dari 100!');
      message.channel.bulkDelete(args[0])
}

exports.help = {
	name: "hapus"
}