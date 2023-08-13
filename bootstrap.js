const { Client, Events, GatewayIntentBits } = require('discord.js');



// Log in to Discord with your client's token

module.exports = () => {

    const client = new Client({ intents: [GatewayIntentBits.Guilds] });
    client.once(Events.ClientReady, c => {
        console.log(`Ready! Logged in as ${c.user.tag}`);
    });
    return client
};