const {RichEmbed}=require("discord.js")

module.exports={
	run:async(client,database,config,message,args)=>{
		if(!message.member.hasPermission(['MUTE_MEMBERS','ADMINISTRATOR']))
			return message.channel.send('```Nie możesz użyć tej komendy.```')
		const member=message.mentions.members.first()
		if(!member)
			return message.channel.send('```Nie znaleziono użytkownika do wyciszenia.\nUżycie: !mute użytkownik powód```')
		const reason=args.slice(1).join(' ')||'Brak'
		member.send(`Cześć, zostałeś wyciszony na **${message.guild.name}**.`)
		member.setMute(true,reason).then(()=>{
			message.channel.send(new RichEmbed()
				.setColor(0xFFFF00)
				.setTitle(`Użytkownik ${member.user.tag} został wyciszony.`)
				.addField('Przez:',message.author.tag)
				.addField('Powód:',reason)
			)
		}).catch((err)=>{
			message.channel.send('```Nie można wyciszyć tego użytkownika.```')
			console.log(err)
		})
	}
}
