module.exports={
	run:async(message,args)=>{
		const channel=message.guild.channels.find(ch=>ch.id===config.workChannelID)
		if(!channel)return
		let difference=Math.abs(database['users'][message.member.id]['nextWork']-Date.now())/1000
		console.log(difference,config.workWaitTime)
		if(difference>config.workWaitTime){
			if(database['users'][message.member.id]['money']!='∞'){
				database['users'][message.member.id]['money']+=config.workEarnings
			}
			database['users'][message.member.id]['nextWork']=Date.now()+config.workWaitTime
			channel.send(`**${message.author.tag}** zarobiłeś ${config.workEarnings}${config.currencySymbol}`)
		}else{
			channel.send(`**${message.author.tag}** możesz pracować raz na godzinę.`)
		}
	}
}
