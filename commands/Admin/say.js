const Discord = require('discord.js');

module.exports = {
     name:"say",
     category: "Admin",
     aliases: ["قل"],
     cooldown: 1,
     
     run: async (client, message, args) =>  {
          if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription(`You can\'t use that!`))

          const say = args.join(" ");

          message.delete()
          let embed = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription(`${say}`)
          message.channel.send(embed)
     }
}