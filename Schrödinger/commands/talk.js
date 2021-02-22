module.exports = {
	name: 'talk',
	description: 'talk!',
	execute(message, args) {
		const amount = parseInt(args[0]) + 1;
        const fs = require('fs');
		try
		{
        	var text = fs.readFileSync(`./commands/data/${args}.txt`, 'utf8');
        	message.channel.send(text);
		}
		catch
		{
			message.channel.send("no data");
		}
	},
};