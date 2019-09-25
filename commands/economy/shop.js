module.exports={
	run:async(message,args)=>{
		const channel=message.guild.channels.find(ch=>ch.id===config.shopChannelID)
		if(!channel)return
		let lines=[]
		for(let group of config.shop){
			for(let id of Object.keys(group)){
				lines.push(`**${message.guild.roles.find(r=>r.id==id).name}** (${group[id].workBonus*100}% bonus do pracy) : ${group[id].cost}${config.currencySymbol}`)
			}
			lines.push('')
		}
		channel.send(lines.join('\n'))
	}
}
