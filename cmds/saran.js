const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
let saran = args.join(" "); 
let embed = new Discord.RichEmbed()
.setTitle(`Saran`) //Judul 
.setDescription(saran) //Isi
  .setColor("#FF0A0A")
          .setTimestamp()
      .setFooter("Pendapat dari " + message.author.username); 
  message.channel.send(embed).then(msg => { // Mengirim Embed
message.react("435160985259737099") //Ini Emoji Yes dan No
   message.react("435160984521408512");
 });
}                                
  
exports.help = {
	name: "saran"
}
