const { REST, Routes, Collection } = require('discord.js');
const { ApplicationId, ServerId, Token } = require('./common/config');

// Construct and prepare an instance of the REST module

const rest = new REST().setToken(Token);


const commands = require('./commands/commands')
const commandData = Array.from(commands.values()).map((c) => { return c.data })


// and deploy your commands!
const register = async () => {
    try {
        console.log(`Started refreshing ${commandData.length} application (/) commands.`);

        // The put method is used to fully refresh all commands in the guild with the current set
        const data = await rest.put(
            Routes.applicationGuildCommands(ApplicationId, ServerId),
            { body: commandData },
        );

        console.log(`Successfully reloaded ${data.length} application (/) commands.`);
    } catch (error) {
        // And of course, make sure you catch and log any errors!
        console.error(error);
    }
};

register()