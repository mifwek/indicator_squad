const Discord = require("discord.js");
const bot = new Discord.Client({enableEveryone: true}, {enableTextChannel: true});
const config = require("./config.json");
const YouTube = require("simple-youtube-api");
const ytdl = require('ytdl-core');
const youtube = new YouTube("AIzaSyDbEcpxDcLwU4M6krBHQloNeVc7M98zbC8");
const figlet = require("figlet");

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

function changing_status() {
    let status = ['DISCORD!', 'FREE FIRE', 'INDICATOR']
    let random = status[Math.floor(Math.random() * status.length)]
    bot.user.setActivity(random)
}

bot.on("ready", async () => {
    console.log(`Sudah Online!`);
    setInterval(changing_status, 20000);
});

bot.on('guildMemberAdd', async (member) => {
const welcomeChannel = member.guild.channels.find('name', 'welcomer_goodbye');
  if (welcomeChannel) {
     let WelcomeEmbed = new Discord.RichEmbed()
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
const byeChannel = member.guild.channels.find('name', 'welcomer_goodbye');
  if (byeChannel) {
    let byeEmbed = new Discord.RichEmbed()
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
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (cmd === `${prefix}halo`) {
    message.channel.send("halo juga");
  }

    if (cmd === `${prefix}help`) {
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
    };

  if (cmd === `${prefix}botinfo`) {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("Informasi Bot")
    .setColor("RANDOM")
    .setThumbnail(bicon)
    .addField("Nama Bot", bot.user.username)
    .addField("Dibuat", bot.user.createdAt);
    message.channel.send(botembed);
  }

    if (cmd === `${prefix}kuis`) {
       const quiz = [
           { q: "Pak RT bisa terbang, Pak RT punya?", a: ["tiket"] }, 
           { q: "Mobil Tidak Bisa Jalan Maju, Sebab?", a: ["parkir"] },
           { q: "Bola apa yang mirip kucing?", a: ["bolaemon"] },
           { q: "Nenek nenek kecebur sumur muncul dimana?", a: ["diberita"] },
           { q: "Bangun Tidur Ku Terus?", a: ["melek"] },
         ];

       const options = { 
           max: 1,
           time: 10050,
           errors: ["time"],
     };

       const item = quiz[Math.floor(Math.random() * quiz.length)];
           await message.channel.send(item.q);

       try {

       const collected = await message.channel.awaitMessages(answer => item.a.includes(answer.content.toLowerCase()), options);
       const winnerMessage = collected.first();

       return message.channel.send({embed: new Discord.RichEmbed()
           .setAuthor(`Winner: ${winnerMessage.author.tag}`, winnerMessage.author.displayAvatarURL)
           .setFooter("Mantap, Wkwkwkwkw")
           .setColor(message.guild.me.displayHexColor)

     })

     } catch (_) {

           return message.channel.send({embed: new Discord.RichEmbed()
           .setAuthor('Jawaban kamu salah')
           .setTitle(`Jawabannya: \`${item.a}\``)
           .setFooter("L.O.L, Wkwkwkwkwkw")

         })
      }
      message.delete().catch();
    }

  if (cmd === `${prefix}serverinfo`) {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setTitle("Informasi Server")
    .setColor("RANDOM")
    .setThumbnail(sicon)
    .addField("Nama Server", message.guild.name)
    .addField("ID", message.guild.id)
    .addField("Member", message.guild.memberCount)
    .addField("Negara", message.guild.region)
    .addField("Dibuat", message.guild.createdAt)
    .addField("Owner", message.guild.owner)

    message.channel.send(serverembed);
  }

    if (cmd === `${prefix}say`) {
      if(!message.member.hasPermission("ADMINISTRATOR")) return;
    let say = args.join(" ");
        if(!say) return message.reply("masukan sebuah kata atau kalimat");
          message.delete().catch(O_o=>{}); 
          message.channel.send(say);
    }
   
    if (cmd === `${prefix}avatar`) {
      let user = message.mentions.users.first() || message.author;
        let embed = new Discord.RichEmbed()
        .setAuthor(`${user.username}'s Avatar`)
        .setImage(user.displayAvatarURL)
        .setColor('RANDOM')
        message.channel.send(embed)
        
    };

    if (cmd === `${prefix}userinfo`) {
      let user = message.mentions.users.first() || message.author;
        let embed = new Discord.RichEmbed()
        .setAuthor(`${user.tag}'s Info`, user.displayAvatarURL)
        .setThumbnail(user.displayAvatarURL)
        .setColor('RANDOM')
        .addField('ID', user.id, true)
        .addField('Username', user.username, true)
        .addField('Discrim', user.discriminator, true)
        .addField('Status', user.presence.status, true)
        .addField('Bot?', user.bot, true)
        .setThumbnail()
        message.channel.send(embed)
    };

    if (cmd === `${prefix}hapus`) {
      if(isNaN(args[0])) return message.channel.send('Harap berikan jumlah yang valid untuk membersihkan atau menghapus pesan!');
        if (args[0] > 100) return message.channel.send('Berikan jumlah kurang dari 100!');
        message.channel.bulkDelete(args[0])

    };

    if (cmd === `${prefix}judi`) {
       const slots = ['🍇', '🍊', '🍐'];
    const slotOne = slots[Math.floor(Math.random() * slots.length)];
    const slotTwo = slots[Math.floor(Math.random() * slots.length)];
    const slotThree = slots[Math.floor(Math.random() * slots.length)];
  if (slotOne === slotTwo && slotOne === slotThree) {
      return message.reply(`
        
        ${slotOne}     |     ${slotTwo}     |     ${slotThree}
        
 Kamu Menang, lu hoki cuk haha!
        `);
    }
    return message.reply(`
          
          ${slotOne}     |     ${slotTwo}     |     ${slotThree}
          
 Kamu kalah!... Wkwkwkwkw!
        `);
      }

    if (cmd === `${prefix}ping`) {
        let start = Date.now(); message.channel.send(':ping_pong:').then(message => { 
        message.delete();
        let diff = (Date.now() - start); 
        let API = (bot.ping).toFixed(2)
        let embed = new Discord.RichEmbed()
        .setTitle(':ping_pong: Pong!')
        .setColor('RANDOM')
        .addField("Latency", `${diff}ms`, true)
        .addField("API", `${API}ms`, true)
        message.channel.send(embed);
    });
 
    }
  
     if (cmd === `${prefix}unik`) {
        if (!args.join(' ')) return message.channel.send('harap berikan teks');
        figlet(args.join(' '), (err, data) => {
          message.channel.send(data, {
            code: 'ascii'
          });
        });
      };

      if (cmd === `${prefix}youtube`) {
      youtube.searchVideos(args, 1)
      .then(results => {

        const ytEmbed = new Discord.RichEmbed()
          .setAuthor(`Hasil Pencarian YouTube Untuk ${args}`.split(',').join(' '))
          .setThumbnail(results[0].thumbnails.high.url)
          .setColor('#ffc1cc') //I personally use bubblegum pink!
          .addField('Judul', results[0].title, true)
          .addField('Channel', results[0].channel.title, true)
          .addField('Deskripsi', results[0].description)
          .addField('Link', `https://youtu.be/${results[0].id}`);

          message.channel.send(ytEmbed);
      })
      .catch(console.log);

 }
});

bot.login(process.env.config.TOKEN);
