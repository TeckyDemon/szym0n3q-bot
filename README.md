# BMP_bot

![GitHub](https://img.shields.io/github/license/DeBos99/bmp_bot.svg?color=2020cc&labelColor=5050ff&style=for-the-badge)
![GitHub followers](https://img.shields.io/github/followers/DeBos99.svg?color=2020cc&labelColor=5050ff&style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/DeBos99/bmp_bot.svg?color=2020cc&labelColor=5050ff&style=for-the-badge)
![GitHub stars](https://img.shields.io/github/stars/DeBos99/bmp_bot.svg?color=2020cc&labelColor=5050ff&style=for-the-badge)
![GitHub watchers](https://img.shields.io/github/watchers/DeBos99/bmp_bot.svg?color=2020cc&labelColor=5050ff&style=for-the-badge)
![GitHub contributors](https://img.shields.io/github/contributors/DeBos99/bmp_bot.svg?color=2020cc&labelColor=5050ff&style=for-the-badge)

![GitHub commit activity](https://img.shields.io/github/commit-activity/w/DeBos99/bmp_bot.svg?color=ffaa00&labelColor=ffaa30&style=for-the-badge)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/DeBos99/bmp_bot.svg?color=ffaa00&labelColor=ffaa30&style=for-the-badge)
![GitHub commit activity](https://img.shields.io/github/commit-activity/y/DeBos99/bmp_bot.svg?color=ffaa00&labelColor=ffaa30&style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/DeBos99/bmp_bot.svg?color=ffaa00&labelColor=ffaa30&style=for-the-badge)

![GitHub issues](https://img.shields.io/github/issues-raw/DeBos99/bmp_bot.svg?color=cc2020&labelColor=ff3030&style=for-the-badge)
![GitHub closed issues](https://img.shields.io/github/issues-closed-raw/DeBos99/bmp_bot.svg?color=10aa10&labelColor=30ff30&style=for-the-badge)

[![Donate](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=NH8JV53DSVDMY)

**BMP_bot** is Discord bot made for [BMP_team](https://discord.gg/XsRgqzK) server.

## Content

- [Content](#content)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Documentation](#documentation)
- [Templates](#templates)
  - [config.json](#configjson)
  - [database.json](#databasejson)
- [Authors](#authors)
- [Contact](#contact)
- [License](#license)

## Features

- Database management.

## Requirements

- [glob](https://www.npmjs.com/package/glob)
- [node-cron](https://www.npmjs.com/package/node-cron)
- [discord.js](https://www.npmjs.com/package/discord.js)
- [number-to-words](https://www.npmjs.com/package/number-to-words)

## Installation

`npm install glob node-cron discord.js number-to-words`

## Documentation

| Command                   | Description                         |
| :------------------------ | :---------------------------------- |
| !ban **user** **reason**  | Bans **user** for **reason**.       |
| !kick **user** **reason** | Kicks **user** for **reason**.      |
| !mute **user** **reason** | Mutes **user** for **reason**.      |
| !unban **user**           | Unbans **user**.                    |
| !unmute **user**          | Unmutes **user**.                   |
| !unwarn **user** **N**    | Removes **N** warnings of **user**. |
| !warn **user** **reason** | Warns **user** for **reason**.      |
| !clear **N**              | Clears **N** messages.              |
| !help                     | Shows help message.                 |
| !info **text**            | Prints **text** using emojis.       |
| !buy **item**             | Buys **item** from shop.            |
| !money                    | Shows amount of money.              |
| !shop                     | Shows shop.                         |
| !work                     | Gives user money for work.          |
| !dbload                   | Loads database.                     |
| !dbsave                   | Saves database.                     |

## Templates

### config.json

```json
{
	"clientToken"        : "TOKEN",
	"ownerID"            : "ID",
	"commandPrefix"      : "!",
	"currencySymbol"     : "$",
	"entryChannelID"     : "ID",
	"exitChannelID"      : "ID",
	"maxWarnings"        : 2,
	"workChannelID"      : "ID",
	"workWaitTime"       : 3600,
	"workEarnings"       : 100,
	"autoRolesChannelID" : "ID",
	"autoRoles"          : [
		{
			"emoji" : "roleID",
			"emoji" : "roleID"
		},
		{"emoji" : "roleID"}
	],
	"shopChannelID"      : "ID",
	"shop"               : [
		{
			"ID" : {
				"cost"      : 1000,
				"workBonus" : 1.25
			},
			"ID" : {
				"cost"      : 2000,
				"workBonus" : 1.75
			}
		},
		{
			"ID" : {
				"cost"      : 1500,
				"workBonus" : 1.50
			}
		}
	]
}
```

| Key                | Description                                                                                                        |
| :----------------- | :----------------------------------------------------------------------------------------------------------------- |
| clientToken        | Token of your bot. You can find it here: [Application](https://discordapp.com/developers/applications/)->Bot->Copy |
| ownerID            | Discord ID of bot owner.                                                                                           |
| commandPrefix      | Command prefix for bot.                                                                                            |
| currencySymbol     | Symbol for server currency.                                                                                        |
| entryChannelID     | ID of channel where information about joining players will appear.                                                 |
| exitChannelID      | ID of channel where information about leaving players will appear.                                                 |
| workChannelID      | ID of channel where information about work will appear.                                                            |
| maxWarnings        | Number of warnings after which user warned user will be kicked out from server.                                    |
| workWaitTime       | Number of seconds before next time when user can use `!work` command.                                              |
| workEarnings       | Amount of server currency that user will get for using `!work` command.                                            |
| autoRolesChannelID | ID of channel with auto-roles.                                                                                     |
| autoRoles          | Groups of roles.                                                                                                   |
| shopChannelID      | ID of channel with shop.                                                                                           |
| shop               | List of shop items.                                                                                                |

### database.json

```json
{
    "users": {
        "ID": {
            "warns"     : 0,
            "money"     : 100,
			"nextWork"  : 0,
			"workBonus" : 1
        }
	}
}
```

| Key       | Description                                |
| :-------- | :----------------------------------------- |
| warns     | Number of warnings that user have.         |
| money     | Amount of money that user have.            |
| nextWork  | Time when user will be able to work again. |
| workBonus | Work earnings multiplier.                  |

## Authors

* **Michał Wróblewski** - Main Developer - [DeBos99](https://github.com/DeBos99)

## Contact

* Discord: DeBos#3292
* Reddit: [DeBos99](https://www.reddit.com/user/DeBos99)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
