module.exports={
	run:async(message,args)=>{
		message.channel.send(`\`\`\`
			!ban użytkownik powód - banuje użytkownika
			!kick użytkownik powód - wyrzuca użytkownika
			!mute użytkownik powód - wycisza użytkownika
			!unban użytkownik - odbanowuje użytkownika
			!unmute użytkownik - odcisza użytkownika
			!unwarn użytkownik ilość - usuwa ostreżenia użytkownika
			!warn użytkownik - ostrzega użytkownika
			!info tekst - wyświetla informacje
			!clear ilość - usuwa wiadomości
			!money - wyświetla ilość pieniędzy
			\`\`\``.replace(/^\t+/mg,''))
	}
}
