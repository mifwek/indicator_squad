const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
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

exports.help = {
	name: "kuis"
}