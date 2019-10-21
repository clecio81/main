const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {    
    let user = message.mentions.members.first() || message.member;
    
    let embed = new Discord.RichEmbed()
    .setTitle(user.user.username)
    .setDescription(`ID: ${user.id}
Name: ${user.user.username}
Icon URL: ${user.user.avatarURL}
Account Created At: ${user.user.createdAt}
Game: ${user.user.presence.game || 'none'}
Status: ${user.user.presence.status.toUpperCase()}
Full Name: ${user.user.tag}`)
    .setThumbnail(user.user.avatarURL)
    .setColor('#eeeeee');
    
    message.channel.send(embed);
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['user', 'ui', 'i', 'whois'],
  guildOnly: true,
  permLevel: 'User'
};

exports.help = {
  name: 'info',
  category: 'Utility',
  description: 'Returns info about the user.',
  usage: 'info'
};
