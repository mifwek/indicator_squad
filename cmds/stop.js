//stop
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
    var server = servers[message.guild.id];
    message.channel.createMessage('✅ | asiyappp 👌');
    if(message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
}

exports.help = {
    name: "stop"
}
