const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return;
    let say = args.join(" ");
    if(!say) return message.reply("masukan sebuah kata atau kalimat");
        message.delete().catch(O_o=>{}); 
        message.channel.send(say);
}

exports.help = {
	name: "say"
}