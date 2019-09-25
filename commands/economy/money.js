module.exports={
	run:async(message,args)=>{
		const channel=message.guild.channels.find(ch=>ch.id===config.workChannelID)
		if(!channel)return
		channel.send(`**${message.author.tag}** masz ${database['users'][message.member.id]['money']}${config.currencySymbol}`)
	}
}
