const Discord = require("discord.js");
const YTDL = require("ytdl-core");
function play(connection, message) {
    var server = servers[message.guild.id];
    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
    server.queue.shift();
    server.dispatcher.on("end", function() {
        if(server.queue[0]) play(connection, messsage);
        else connection.disconnect();
    })
}
var servers = {};
exports.run = async (bot, message, args) => {
    //play
    if (!args[0]) {
         message.channel.send("Silakan tentukan link");
         return
    }
    
    if(!message.member.voiceChannel) {
        message.channel.sned("Saya pikir ini dapat bekerja lebih baik jika Anda berada di channel voice!");
    }

    if(!servers[message.guild.id]) servers[message.guild.id] = {
        queue: []
    }
    var server = servers[message.guild.id];

    server.queue.push(args[0]);
    message.channel.send("✔️ | Selamat Mendengarkan.")
    if(!message.member.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
        play(connection, message);
    })
}

exports.help = {
    name: "play"
}
