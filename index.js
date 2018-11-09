const Discord = require('discord.js');
const client = new Discord.Client();

let prefix = 'm=';

client.on('ready', () => {                
    console.log('Ready!');
    bot.user.setActivity("Active!", {type: "LISTENING"});   
});

bot.on('guildMemberAdd', async (member) => {
    const joinchannel = member.guild.channels.find('name', 'welcomer_goodbye');
    joinchannel.send(`SELAMAT DATANG ${member.user.tag}!`);

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

    if (message.content === prefix + 'say') {
        let say = args.join(" ");
    if(!say) return message.reply("masukan sebuah kata atau kalimat");
          message.delete().catch(O_o=>{}); 
          message.channel.send(say);
    }
});

client.login("process.env.TOKEN");
