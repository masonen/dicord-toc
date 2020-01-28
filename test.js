var con = require('./modules/connect');
var client = con.connect();


client.Dispatcher.on("MESSAGE_CREATE", e => {
    if (e.message.content === "toc!hello") {
        e.message.channel.sendMessage("World!");
    }
    if(e.message.content === 'World!' && e.message.author.id == client.User.id) {
        console.log('Congrats your bot is ready to be used');
        client.disconnect();
    }
});

