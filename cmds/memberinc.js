const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
    var images = ["https://cdn.discordapp.com/attachments/514635773895507979/534264424698216459/20190114_134618.jpg",
"https://cdn.discordapp.com/attachments/514635773895507979/534264424698216460/20190114_135145.jpg",
"https://cdn.discordapp.com/attachments/514635773895507979/534264425595666442/20190114_133509.jpg",
"https://cdn.discordapp.com/attachments/514635773895507979/534264425595666443/20190114_133621.jpg"
];
    var rand = Math.floor(Math.random() * images.length);
    var randomImage = images[rand];

const patEmb = new Discord.RichEmbed()
   .setColor(0xA901DB)
   .setImage(randomImage);

message.channel.send(patEmb);

}

exports.help = {
    name: "memberinc"
}
