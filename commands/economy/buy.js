module.exports={
	run:async(message,args)=>{
		const channel=message.guild.channels.find(ch=>ch.id===config.shopChannelID)
		if(!channel)return
		for(let group of config.shop){
			for(let id of Object.keys(group)){
				if(message.guild.roles.find(r=>r.id==id).name.toLowerCase()==args.join(' ').toLowerCase()){
					if(database['users'][message.member.id]['money']>=group[id].cost){
						database['users'][message.member.id]['money']-=group[id].cost
						database['users'][message.member.id]['workBonus']=group[id].workBonus
						await message.member.removeRoles(Object.keys(group))
						await message.member.addRole(id)
						message.channel.send(`**${message.author.tag}** zakupiłeś rangę **${message.guild.roles.find(r=>r.id==id).name}**.`)
					}else{
						message.channel.send(`**${message.author.tag}** nie masz tyle ${config.currencySymbol}.`)
					}
					break
				}
			}
		}
	}
}
