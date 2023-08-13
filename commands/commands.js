const { Collection } = require("discord.js")
let commands = new Collection();
const path = require('path')
const commandsPath = path.join(__dirname, '..');
const { globSync } = require('glob')
const files = globSync('commands/*/index.js')

for (const fileName of files) {
    console.log(fileName)
    const filePath = path.join(commandsPath, fileName);
    const command = require(filePath);
    // Set a new item in the Collection with the key as the command name and the value as the exported module
    if ('data' in command && 'execute' in command) {
        commands.set(command.data.name, command);
    } else {
        console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
    }
}

module.exports = commands