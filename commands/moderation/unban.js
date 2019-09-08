const {RichEmbed}=require("discord.js")

module.exports={
	run:async(client,database,config,message,args)=>{
		if(!message.member.hasPermission(['BAN_MEMBERS','ADMINISTRATOR']))
			return message.channel.send('```Nie możesz użyć tej komendy.```')
		if(!args[0])
			return message.channel.send('```Nie znaleziono użytkownika do odbanowania.\nUżycie: !unban użytkownik```')
		const user=await client.fetchUser(args[0].match(/<@(\d+)>/)[1])
		message.guild.unban(user).then(()=>{
			message.channel.send(new RichEmbed()
				.setColor(0x00FF00)
				.setTitle(`Użytkownik ${user.tag} został odbanowany.`)
				.addField('Przez:',message.author.tag)
			)
		}).catch((err)=>{
			message.channel.send('```Nie można odbanować tego użytkownika.```')
			console.log(err)
		})
	}
}
