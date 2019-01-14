const Discord = require('discord.js')

exports.run = async (bot, message, args) => {

var images = ["https://cdn.glitch.com/5df641e3-8d98-4abb-9045-d5482434003a%2FJake_pat.gif?1524497996034", "https://cdn.discordapp.com/attachments/514635773895507979/534152302098120734/20190114_061710.jpg"];
var rand = Math.floor(Math.random() * images.length);
var randomImage = images[rand];

const patEmb = new Discord.RichEmbed()
.setColor(0xA901DB)
.setImage(randomImage);
const sadEmb = new Discord.RichEmbed()
.setColor(0xA901DB)
.setImage('https://media.giphy.com/media/Y4z9olnoVl5QI/giphy.gif');
if(!args[0]) {
  message.channel.send(`<@${message.author.id}> pat <@${message.author.id}>.. Oh wait! You can't pat yourself!`, {embed: sadEmb});
  return;
}

if (!message.mentions.users.first()) return message.channel.send(`Please mention someone!`).then(msg => {
    msg.delete(3000)
  });
message.channel.send(`<@${message.author.id}> pat ${args[0]}`, {embed: patEmb});


}

exports.help = {
    name: "memberinc"
}
