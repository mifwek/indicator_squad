const Discord = require("discord.js");
const bot = new Discord.Client({enableEveryone: true}, {enableTextChannel: true});
const config = require("./config.json");

bot.on("ready", async () => {
	console.log(`${bot.user.username} sudah online!`);
	bot.user.setActivity("Powershell", {type: "PLAYING"});
});

bot.on('guildMemberAdd', async (member) => {
const welcomeChannel = member.guild.channels.find('name', 'welcome-goodbye');
  if (welcomeChannel) {
     let WelcomeEmbed = new Discord.RichEmbed()
    .setTitle("[ MEMBER MASUK ]")
    .setThumbnail(member.user.displayAvatarURL)
    .setDescription(`👑 ${member.user} \n Selamat Datang Di Server ${member.guild.name} Discord. \nKami Harap Kamu Betah Di Server kami.`)
    .setFooter(`Kamu Member Ke ${member.guild.memberCount}`)
    .setTimestamp();
    welcomeChannel.send(WelcomeEmbed)
  }
  
});

bot.on('guildMemberRemove', async (member) => {
const byeChannel = member.guild.channels.find('name', 'welcome-goodbye');
  if (byeChannel) {
    let byeEmbed = new Discord.RichEmbed()
    .setTitle("[ MEMBER KELUAR ]")
    .setThumbnail(member.user.displayAvatarURL)
    .setDescription(`${member.user.tag} \n Semoga Kamu Menemukan Server \n Yang Lebih Baik Lagi!`)
    .setFooter(`Member Tinggal ${member.guild.memberCount}`)
    .setTimestamp();
    byeChannel.send(byeEmbed)
  }

});

bot.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === 'dm') return

  let prefix = config.prefix;
  let msg = message.content.toLowerCase();
  let args = message.content.slice(prefix.length).trim().split(" ")
  let cmd = args.shift().toLowerCase();

  if (!msg.startsWith(prefix)) return;
	
  try {
    let commandFile = require(`./cmds/${cmd}.js`);
    commandFile.run(bot, message, args);
  }catch (e) {
    console.log(e.message)
  }finally {
    console.log(`${author} menggunakan perintah ${cmd}`);
  }

});

bot.login(process.env.TOKEN);
