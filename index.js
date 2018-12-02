const Discord = require("discord.js");
const bot = new Discord.Client({enableEveryone: true}, {enableTextChannel: true});
const config = require("./config.json");

const size    = config.colors;
const rainbow = new Array(size);

for (var i=0; i<size; i++) {
  var red   = sin_to_hex(i, 0 * Math.PI * 2/3); // 0   deg
  var blue  = sin_to_hex(i, 1 * Math.PI * 2/3); // 120 deg
  var green = sin_to_hex(i, 2 * Math.PI * 2/3); // 240 deg 

  rainbow[i] = '#'+ red + green + blue;
}

function sin_to_hex(i, phase) {
  var sin = Math.sin(Math.PI / size * 2 * i + phase);
  var int = Math.floor(sin * 127) + 128;
  var hex = int.toString(16);

  return hex.length === 1 ? '0'+hex : hex;
}

let place = 0;
const servers = config.servers;

function changeColor() {
  for (let index = 0; index < servers.length; ++index) {    
    bot.guilds.get(servers[index]).roles.find('name', config.roleName).setColor(rainbow[place])
    .catch(console.error);
    
    if(config.logging){
      console.log(`[ColorChanger] Changed color to ${rainbow[place]} in server: ${servers[index]}`);
    }
    if(place == (size - 1)){
      place = 0;
    }else{
      place++;
    }
  }
}

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.username}!`);
  if(config.speed < 2000){console.log("The minimum speed is 2000"); process.exit(1);}
  setInterval(changeColor, config.speed);
});

bot.on("ready", async () => {
	console.log(`${bot.user.username} sudah online!`);
	bot.user.setActivity("Active!", {type: "LISTENING"});
});

bot.on('guildMemberAdd', async (member) => {
const welcomeChannel = member.guild.channels.find('name', 'welcomer-goodbye');
  if (welcomeChannel) {
     let WelcomeEmbed = new Discord.RichEmbed()
    .setImage("https://cdn.discordapp.com/attachments/514584901207588889/516393989889589299/welcome.jpg")
    .setTitle("[ MEMBER BARU ]")
    .setThumbnail(member.user.displayAvatarURL)
    .setDescription(`${member.user} \n Selamat Datang Di Server ${member.guild.name}, \n Jangan Lupa Ya Dibaca : \n # RULES \n # INFORMASI \n Dan Isi # BIODATA \n Terima Kasih!`)
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
