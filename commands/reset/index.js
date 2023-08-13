const { SlashCommandBuilder } = require('discord.js');
const master = require('../../Data/master')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('rest')
        .setDescription('reset Master!'),
    async execute(interaction) {
        master.set(undefined)
        await interaction.reply('Quiz Master ended');
    },
};