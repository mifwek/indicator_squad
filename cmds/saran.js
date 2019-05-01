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
message.react(":white_check_mark:") //Ini Emoji Yes dan No
   message.react(":negative_squared_cross_mark:");
 });
}                                
  
exports.help = {
	name: "saran"
}
