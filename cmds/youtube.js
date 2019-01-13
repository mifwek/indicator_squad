const Discord = require("discord.js");
const YouTube = require("simple-youtube-api");
const ytdl = require('ytdl-core');
const youtube = new YouTube("AIzaSyDbEcpxDcLwU4M6krBHQloNeVc7M98zbC8");
const embed = require("embed-video")

exports.run = async (bot, message, args) => {
    youtube.searchVideos(args, 1)
      .then(results => {

       const ytEmbed = new Discord.RichEmbed()
        .setTitle(`Hasil Pencarian YouTube Untuk ${args}`.split(',').join(' '))
        .setThumbnail(results[0].thumbnails.high.url)
        .addField('Judul', results[0].title, true)
        .addField('Channel', results[0].channel.title, true)
        .addField('Deskripsi', results[0].description)
        .addField(`Link`, `https://www.youtube.com/watch?v=${results[0].id}`)

        message.channel.send(ytEmbed);
      })
    .catch(console.log);
}

exports.help = {
	name: "youtube"
}
