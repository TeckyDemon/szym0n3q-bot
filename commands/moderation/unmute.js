const {RichEmbed}=require("discord.js")

module.exports={
	run:async(client,message,args)=>{
		if(!message.member.hasPermission(['MUTE_MEMBERS','ADMINISTRATOR']))
			return message.channel.send('```Nie możesz użyć tej komendy.```')
		const member=message.mentions.members.first()
		if(!member)
			return message.channel.send('```Nie znaleziono użytkownika do odciszenia.\nUżycie: !unmute użytkownik powód```')
		const reason=args.slice(1).join(' ')||'Brak'
		member.setMute(true,reason).then(()=>{
			member.send(`Cześć, zostałeś odciszony na **${message.guild.name}**.`)
		}).then(()=>{
			message.channel.send(new RichEmbed()
				.setColor(0xFFFF00)
				.setTitle(`Użytkownik ${member.user.tag} został odciszony.`)
				.addField('Przez:',message.author.tag)
				.addField('Powód:',reason)
			);
		}).catch((err)=>{
			console.log(err)
			return message.channel.send('```Nie można odciszyć tego użytkownika.```')
		})
	}
}
