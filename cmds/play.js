const Discord = require("discord.js");
const ytdl = require('ytdl-core');

exports.run = async (bot, message, args) => {
const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send('I\'m sorry but you need to be in a voice channel to play music');
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			return msg.channel.send('i cannot connect to your voice channel ,make sure i have the proper permissions!');
		}
		if (!permissions.has('SPEAK')) {
			return msg.channel.send('i cannot speak to this voice channel, make sure i have the proper permissions!');
		}

		try {
			var connection = await voiceChannel.join();
		}catch (error) {
			console.error(`i could not join the voice channel: ${error}`);
			return msg.channel.send(`i could not join the voice channel: ${error}`);
		}

		const dispatcher = connection.playStream(ytdl(args[1]))
		    .on('end', () => {
		  	    console.log('song ended!');
		  	    voiceChannel.leave();
		    })
		    .on('error', error => {
		  	    console.error(error);
		    })
};

exports.help = {
    name: "play"
}
