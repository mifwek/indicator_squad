const Discord = require("discord.js");
function play(connection, message) {
    var server = servers[message.guild.id];
    server.dispatcher = connection.playStream("https://www.rmfon.pl/play,156"(server.queue[0], {filter: "audioonly"}));
    server.queue.shift();
    server.dispatcher.on("end", function() {
        if(server.queue[0]) play(connection, messsage);
        else connection.disconnect();
    })
}
var servers = {};
exports.run = async (bot, message, args) => {
    //play
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Gua males muterin lagu buat lu 😅");
    
    }
    
    message.channel.send("✔️ | Selamat Mendengarkan.")
    if(!message.member.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
        play(connection, message);
    })
}

exports.help = {
    name: "radio_game"
}
