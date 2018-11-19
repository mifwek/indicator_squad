const Discord = require("discord.js");
const figlet = require("figlet");

exports.run = async (bot, message, args) => {
    if (!args.join(' ')) return message.channel.send('harap berikan teks');
        figlet(args.join(' '), (err, data) => {
          message.channel.send(data, {
            code: 'ascii'
          });
        });
}

exports.help = {
	name: "unik"
}