module.exports = {
	name: 'howmany',
	description: 'how much',
	execute(message, args) {
        const fs = require('fs');
        fs.readFile('./howmany.txt', 'utf8', function(err, data)
		{
			message.channel.send(data);
		});
	},
};