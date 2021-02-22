const { MessageAttachment } = require('discord.js');

module.exports = {
	name: 'add',
	description: 'add commands',
	execute(message, args) {
        const fs = require('fs');
		try
		{
			fs.readFileSync(`./commands/data/${args[0]}.txt`);
			return message.channel.send('already has commands.');
		}
		catch
		{
			var howmany = fs.readFileSync('./howmany.txt');
			var howMany = parseInt(howmany) + 1;
			fs.writeFileSync('./howmany.txt',howMany.toString());
        	fs.appendFileSync(`./commands/data/${args[0]}.txt`,args[1]);
        	message.channel.send("done!");
		}
	},
};