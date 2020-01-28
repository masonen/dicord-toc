var CONFIG = require('../config/config.json');
var Discordie = require('discordie');
var client = new Discordie();

module.exports = {
    connect: connect,
};


function connect() {
    client.connect(CONFIG);
    client.Dispatcher.on('GATEWAY_READY', e => {
        console.log('Bot conected as: ' + client.User.username);
    });
    return client;
}