const fs=require('fs')
const {Client}=require('discord.js')
const client=new Client()
const help=require('./commands/other/help')
const info=require('./commands/other/info')
const clear=require('./commands/other/clear')
const kick=require('./commands/moderation/kick')
const ban=require('./commands/moderation/ban')
const mute=require('./commands/moderation/mute')
const unmute=require('./commands/moderation/unmute')
const unban=require('./commands/moderation/unban')

client.on('guildMemberAdd',async member=>{
	const channel=member.guild.channels.find(ch=>ch.id===process.env.entryChannelID);
	if(!channel)return;
	channel.send(`Cześć **${member.user.tag}**, baw się dobrze:hugging: :tada:`);
});
client.on('guildMemberRemove',async member=>{
	const channel=member.guild.channels.find(ch=>ch.id===process.env.exitChannelID);
	if(!channel)return;
	channel.send(`**${member.user.tag}** zjadł zgniłego ziemniaka i sobie poszedł :frowning2:`);
});
client.on('message',async message=>{
	if(!message.guild)return;
	if(message.content[0]===process.env.commandPrefix){
		const content=message.content.slice(1).split(' ');
		const command=content[0];
		const args=content.slice(1);
		switch(command){
			case 'help':message.delete();
				help.run(message)
				break;
			case 'mute':message.delete();
				mute.run(message,args)
				break;
			case 'unmute':message.delete();
				unmute.run(message,args)
				break;
			case 'kick':message.delete();
				kick.run(message,args)
				break;
			case 'ban':message.delete();
				ban.run(message,args)
				break;
			case 'unban':message.delete();
				unban.run(client,message,args)
				break;
			case 'info':message.delete();
				info.run(message,args)
				break;
			case 'clear':message.delete();
				clear.run(message,args)
				break;
		}
	}
});

client.login(process.env.clientToken);
