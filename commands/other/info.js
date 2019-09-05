const numberToWords=require('number-to-words')

module.exports={
	run:async(client,message,args)=>{
		const content=args.join(' ')
			.toLowerCase()
			.replace('ą','a')
			.replace('ć','c')
			.replace('ę','e')
			.replace('ł','l')
			.replace('ń','n')
			.replace('ó','o')
			.replace('ś','s')
			.replace(/[źż]/g,'z');
		switch(content){
			case 'ok':
				message.channel.send(':ok:');
				break;
			case 'abc':
				message.channel.send(':abc:');
				break;
			case 'abcd':
				message.channel.send(':abcd:');
				break;
			default:
				message.channel
					.send(content.split('')
					.map(x=>x==' '?'\t':/^\d+$/.test(x)?`:${numberToWords.toWords(x)}:`:`:regional_indicator_${x}:`).join(''));
		}
	}
}
