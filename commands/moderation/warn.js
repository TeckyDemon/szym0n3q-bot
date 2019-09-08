const {RichEmbed}=require("discord.js")

module.exports={
	run:async(client,database,config,message,args)=>{
		if(!message.member.hasPermission(['KICK_MEMBERS','ADMINISTRATOR']))
			return message.channel.send('```Nie możesz użyć tej komendy.```')
		const member=message.mentions.members.first()
		if(!member)
			return message.channel.send('```Nie znaleziono użytkownika do ostrzeżenia.\nUżycie: !warn użytkownik powód```')
		const reason=args.slice(1).join(' ')||'Brak'
		if(database['users'][member.id]['warns']==config.maxWarnings){
			database['users'][member.id]['warns']=0
			member.send(`Cześć, zostałeś wyrzucony z **${message.guild.name}**.\nPowód: ${reason}.`)
			member.kick(reason).then(()=>{
				message.channel.send(new RichEmbed()
					.setColor(0xFFFF00)
					.setTitle(`Użytkownik ${member.user.tag} został wyrzucony.`)
					.addField('Przez:',message.author.tag)
					.addField('Powód:',reason)
				)
			})
		}else{
			database['users'][member.id]['warns']++
			member.send(`Cześć, zostałeś ostrzeżony na **${message.guild.name}** po raz ${database['users'][member.id]['warns']}.`).catch()
			message.channel.send(new RichEmbed()
				.setColor(0xFFFF00)
				.setTitle(`Użytkownik ${member.user.tag} został ostrzeżony po raz ${database['users'][member.id]['warns']}.`)
				.addField('Przez:',message.author.tag)
				.addField('Powód:',reason)
			)
		}
	}
}
