const {RichEmbed}=require("discord.js")

module.exports={
	run:async(message,args)=>{
		if(!message.member.hasPermission(['ADMINISTRATOR'])){
			return message.channel.send(`**${message.author.tag}** nie możesz użyć tej komendy.`)
		}
		const member=message.mentions.members.first()
		if(!member){
			return message.channel.send(`**${message.author.tag}** nie znaleziono użytkownika do zbanowania.\nUżycie: !ban użytkownik powód`)
		}
		const reason=args.slice(1).join(' ')||'Brak'
		await member.send(`Cześć, zostałeś zbanowany na **${message.guild.name}**.\nPrzez: **${message.author.tag}**\nPowód: **${reason}**.`).catch(()=>{})
		member.ban(reason).then(()=>{
			message.channel.send(new RichEmbed()
				.setColor(0xFFFF00)
				.setTitle(`Użytkownik **${member.user.tag}** został zbanowany.`)
				.addField('Przez:',message.author.tag)
				.addField('Powód:',reason)
			)
		}).catch((err)=>{
			message.channel.send(`**${message.author.tag}** nie można zbanować użytkownika **${member.user.tag}**.`)
			console.log(err)
		})
	}
}
