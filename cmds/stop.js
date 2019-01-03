exports.run = async (bot, message, args) => {
if (!msg.member.voiceChannel) return msg.channel.send('you are not in a voice channel!');
		msg.member.voiceChannel.leave();
		return undefined;
}

exports.help = {
    name: "stop"
}
