const {RichEmbed}=require("discord.js")

module.exports={
	run:async(message,args)=>{
		if(!message.member.hasPermission(['KICK_MEMBERS','ADMINISTRATOR']))
			return message.channel.send('```Nie możesz użyć tej komendy.```')
		const member=message.mentions.members.first()
		if(!member)
			return message.channel.send('```Nie znaleziono użytkownika do wyrzucenia.\nUżycie: !kick użytkownik powód```')
		const reason=args.slice(1).join(' ')||'Brak'
		await member.send(`Cześć, zostałeś wyrzucony z **${message.guild.name}**.\nPrzez: **${message.author.tag}**\nPowód: **${reason}**.`).catch(()=>{})
		member.kick(reason).then(()=>{
			message.channel.send(new RichEmbed()
				.setColor(0xFF0000)
				.setTitle(`Użytkownik **${member.user.tag}** został wyrzucony.`)
				.addField('Przez:',message.author.tag)
				.addField('Powód:',reason)
			)
		}).catch((err)=>{
			message.channel.send('```Nie można wyrzucić tego użytkownika.```')
			console.log(err)
		})
	}
}
