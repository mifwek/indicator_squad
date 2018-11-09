const Discord = require('discord.js');
const bot = new Discord.Client();

let prefix = 'm=';

bot.on('ready', () => {                
    console.log('Ready!');   
});

bot.on('message', message => {

    let msg = message.content.toLowerCase();
    let sender = message.author;
    let args = message.content.slice(prefix.length).trim().split(" ");
    let cmd = args.shift().toLowerCase();

    if (sender.bot) return;
    if (!message.content.startsWith(prefix)) return;
    if (message.channel.type === 'dm') return;

    if (message.content === prefix + 'ping') {
        message.reply('pong')
    }
      
    if (message.content === prefix + 'halo'){
        message.reply('hai')
    }
});

bot.login("process.env.TOKEN");
