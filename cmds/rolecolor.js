const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
   if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("you don't have permssion MANAGE_ROLES to use this !").then(msg => msg.delete(6000));
      let role = message.mentions.roles.first() || message.guild.roles.find('name', args[0]);
   if(!role) return message.channel.send("You forgot to type or mention a role!");
      let color = args.slice(1).join(" ");
   if(!color) return message.channel.send("You forgot to type a color hex!");
      await role.setColor(color).catch(error => message.channel.send(`Error: ${error}`)); return
      await message.channel.send(`\`${role.name}\`'s color was changed to ${role.color}`).catch(error => message.channel.send(`Error: ${error}`)); return
};

exports.help = {
    name: "rolecolor"
}
