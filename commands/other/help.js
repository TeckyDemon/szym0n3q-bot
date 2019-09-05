module.exports={
	run:async(client,message,args)=>{
		message.channel.send(`\`\`\`
			!mute użytkownik powód - wycisza użytkownika
			!unmute użytkownik - odcisza użytkownika
			!kick użytkownik powód - wyrzuca użytkownika
			!ban użytkownik powód - banuje użytkownika
			!unban użytkownik - odbanowuje użytkownika
			!info tekst - wyświetla informacje
			!clear liczba - usuwa wiadomości
			\`\`\``.replace(/^\t+/mg,''))
	}
}
