const {RichEmbed}=require("discord.js")

module.exports={
	run:async(message,args)=>{
		if(!message.member.hasPermission(['BAN_MEMBERS','ADMINISTRATOR']))
			return message.channel.send('```Nie możesz użyć tej komendy.```')
		const member=message.mentions.members.first()
		if(!member)
			return message.channel.send('```Nie znaleziono użytkownika do zbanowania.\nUżycie: !ban użytkownik powód```')
		const reason=args.slice(1).join(' ')||'Brak'
		member.send(`Cześć, zostałeś zbanowany na **${message.guild.name}**.\nPowód: ${reason}.`).then(()=>{
			member.ban(reason)
		}).then(()=>{
			message.channel.send(new RichEmbed()
				.setColor(0xFF0000)
				.setTitle(`Użytkownik ${member.user.tag} został zbanowany.`)
				.addField('Przez:',message.author.tag)
				.addField('Powód:',reason)
			);
		}).catch(err=>console.log(err))
	}
}
