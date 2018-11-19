const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
     var embedhelpmember = new Discord.RichEmbed()
            .setTitle("__**📁COMMAND LIST**__")
            .addField(" - Serverinfo", "`m=serverinfo`")
            .addField(" - Botinfo", "`m=botinfo`")
            .addField(" - Userinfo", "`m=userinfo @mention`")
            .addField(" - Youtube", "`m=youtube`")
            .addField(" - Avatar", "`m=avatar @mention`")
            .addField(" - Judi", "`m=judi`")
            .addField(" - Kuis", "`m=kuis`")
            .addField(" - Ping", "`m=ping`")
            .addField(" - Unik", "`m=unik`")
            .setColor(0x00FFEE)
            .setFooter("Ⓒ 2018 Indicator_Squad Bot");
            message.channel.send(embedhelpmember)
}

exports.help = {
	name: "help"
}