const Discord = require('discord.js');
const client = new Discord.Client();

let prefix = 'm=';

client.on('ready', () => {                
    console.log('Ready!');   
});

client.on('message', message => {

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

client.login("process.env.TOKEN");
