const Discord = require("discord.js");
const bot = new Discord.Client({enableEveryone: true}, {enableTextChannel: true});
const config = require("./config.json");

bot.on("ready", async () => {
	console.log(`${bot.user.username} sudah online!`);
	bot.user.setActivity("| 1 Guild 🌐", {type: "WATCHING"});
});

bot.on('guildMemberAdd', async (member) => {
const welcomeChannel = member.guild.channels.find('name', 'welcomer-goodbye');
  if (welcomeChannel) {
     let WelcomeEmbed = new Discord.RichEmbed()
    .setImage("https://cdn.discordapp.com/attachments/514584901207588889/516393989889589299/welcome.jpg")
    .setTitle("[ MEMBER BARU ]")
    .setThumbnail(member.user.displayAvatarURL)
    .setDescription(`👑 ${member.user} \n Selamat Datang Di Server ${member.guild.name}, \n Jangan Lupa Ya Dibaca : \n # RULES \n # INFORMASI \n Dan Isi # BIODATA \n Terima Kasih!`)
    .setColor("RANDOM")
    .setFooter(`Kamu Member Ke ${member.guild.memberCount}`)
    .setTimestamp();
    welcomeChannel.send(WelcomeEmbed)
  }
  
});

bot.on('guildMemberRemove', async (member) => {
const byeChannel = member.guild.channels.find('name', 'welcomer-goodbye');
  if (byeChannel) {
    let byeEmbed = new Discord.RichEmbed()
    .setImage("https://cdn.discordapp.com/attachments/514584901207588889/516393990334054400/goodbye.jpg")
    .setTitle("[ MEMBER KELUAR ]")
    .setThumbnail(member.user.displayAvatarURL)
    .setDescription(`${member.user.tag} \n Semoga Kamu Menemukan Server \n Yang Lebih Baik Lagi!`)
    .setColor("RANDOM")
    .setTimestamp();
    byeChannel.send(byeEmbed)
  }

});

bot.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === 'dm') return

  let prefix = config.prefix;
  let msg = message.content.toLowerCase();
  let sender = message.author;
  let args = message.content.slice(prefix.length).trim().split(" ")
  let cmd = args.shift().toLowerCase();

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
