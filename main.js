const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');

let { Token } = require('./common/config')
let bootstrap = require('./bootstrap')

// const pong = require('./commands/pong');

const client = bootstrap();
client.login(Token);

const commands = require('./commands/commands')
//client set up 


client.commands = commands


//Command Handler 
client.on(Events.InteractionCreate, async interaction => {
    console.log("Hit event")
    if (!interaction.isChatInputCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) {
        console.error(`No command matching ${interaction.commandName} was found.`);
        return;
    }

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        if (interaction.replied || interaction.deferred) {
            await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
        } else {
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
    }
});

client.once("ready", () => {
    console.log("Discord bot is ready! 🤖");
});