const {glob}=require('glob')
const cron=require('node-cron')
const {writeFile}=require('fs')
const {basename}=require('path')
const {Client}=require('discord.js')
const client=new Client()
const config=require('./config.json')
let database=require('./database.json')
let commands=[]
glob('commands/**/*.js',(err,files)=>{
	if(err)console.log(err)
	else files.map(x=>commands[basename(x,'.js')]=require(`./${x}`))
})

cron.schedule('0 */1 * * *',()=>{
	writeFile('database.json',JSON.stringify(database,null,4),function(){})
})
client.on('guildMemberAdd',async member=>{
	const channel=member.guild.channels.find(ch=>ch.id===config.entryChannelID)
	if(!channel)return
	channel.send(`Cześć **${member.user.tag}**, baw się dobrze:hugging: :tada:`)
	if(!member.user.bot&&!database['users'][member.id]){
		database['users'][member.id]={
			warns : 0,
		}
	}
})
client.on('guildMemberRemove',async member=>{
	const channel=member.guild.channels.find(ch=>ch.id===config.exitChannelID)
	if(!channel)return
	channel.send(`**${member.user.tag}** zjadł zgniłego ziemniaka i sobie poszedł :frowning2:`)
})
client.on('message',async message=>{
	if(!message.guild)return
	if(message.content[0]===config.commandPrefix){
		const content=message.content.slice(1).split(' ')
		const command=content[0]
		const args=content.slice(1)
		message.delete()
		if(command in commands){
			commands[command].run(client,database,config,message,args)
		}else{
			if(!message.member.id==config.ownerID)
				message.channel.send('```Nie możesz użyć tej komendy.```')
			switch(command){
				case 'dbsave':
					writeFile('database.json',JSON.stringify(database,null,4),function(){})
					break;
				case 'dbload':
					database=require('./database.json')
					break;
			}
		}
	}
})

client.login(config.clientToken)
