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
			!clear ilość - usuwa wiadomości
			!info tekst - wyświetla informacje
			!buy przedmiot - kupuje przedmiot
			!money - wyświetla ilość pieniędzy
			!shop - wyświetla sklep
			!work - zarabia pieniądze
			\`\`\``.replace(/^\t+/mg,''))
	}
}
