const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    var channel = message.guild.channels.find('name', '💢report');
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!member)
        return message.reply("Pengguna tidak ditemukan.");
    let reason = args.slice(1).join(' ');
    if (!reason) reason = "Tidak diinformasikan.";
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(message.author.avatarURL)
        .setTitle(`•REPORT•`)
        .addField('Yang melaporkan:', message.author)
        .addField('Yang dilaporkan:', member.user)
        .addField('Alasan:', reason)
        .setFooter(`Dikirimkan oleh ${message.author.username}.`)
        .setTimestamp()
    channel.send(embed);
}

exports.help = {
	name: "report"
}
