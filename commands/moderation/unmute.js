const {RichEmbed}=require("discord.js")

module.exports={
	run:async(message,args)=>{
		if(!message.member.hasPermission(['MUTE_MEMBERS','ADMINISTRATOR']))
			return message.channel.send('```Nie możesz użyć tej komendy.```')
		const member=message.mentions.members.first()
		if(!member)
			return message.channel.send('```Nie znaleziono użytkownika do odciszenia.\nUżycie: !unmute użytkownik```')
		const reason=args.slice(1).join(' ')||'Brak'
		await member.send(`Cześć, zostałeś odciszony na **${message.guild.name}**.\nPrzez: **${message.author.tag}**`).catch(()=>{})
		member.setMute(false,reason).then(()=>{
			message.channel.send(new RichEmbed()
				.setColor(0xFFFF00)
				.setTitle(`Użytkownik **${member.user.tag}** został odciszony.`)
				.addField('Przez:',message.author.tag)
				.addField('Powód:',reason)
			)
		}).catch((err)=>{
			message.channel.send('```Nie można odciszyć tego użytkownika.```')
			console.log(err)
		})
	}
}
