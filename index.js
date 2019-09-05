const {basename}=require('path')
const {glob}=require('glob')
const {Client}=require('discord.js')
const client=new Client()
const config=require('./config.json')
let commands=[]
glob('**/*/*.js',(err,files)=>{
	if(err)console.log(err)
	else files.map(x=>commands[basename(x,'.js')]=require(`./${x}`))
});

client.on('guildMemberAdd',async member=>{
	const channel=member.guild.channels.find(ch=>ch.id===config.entryChannelID)
	if(!channel)return
	channel.send(`Cześć **${member.user.tag}**, baw się dobrze:hugging: :tada:`)
});
client.on('guildMemberRemove',async member=>{
	const channel=member.guild.channels.find(ch=>ch.id===config.exitChannelID)
	if(!channel)return
	channel.send(`**${member.user.tag}** zjadł zgniłego ziemniaka i sobie poszedł :frowning2:`)
});
client.on('message',async message=>{
	if(!message.guild)return
	if(message.content[0]===config.commandPrefix){
		const content=message.content.slice(1).split(' ');
		const command=content[0]
		const args=content.slice(1)
		message.delete()
		if(command in commands)
			commands[command].run(client,message,args)
	}
});

client.login(config.clientToken);
