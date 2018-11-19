const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
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

exports.help = {
	name: "judi"
}