exports.run = async (bot, message, args) => {

let patEmb = new Discord.RichEmbed()
   .setTitle("**List ID Member Indicator Squad**")
   .addField("Tersedia", "`mip`, `hadi`, `potato`, `bima`, `dinan`, `pororo`, `Snap`, `dina`");
   .setColor(0x00FFEE)
   .setFooter("Contoh : m=idinc_<nama member>")

message.channel.send(patEmb);

}

exports.help = {
    name: "idinc"
}
