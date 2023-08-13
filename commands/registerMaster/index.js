const { SlashCommandBuilder } = require('discord.js');
const { set, get } = require('../../Data/master')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('master')
        .setDescription('Replies with Pong!'),
    async execute(interaction) {
        const previousQuizMaster = get()
        if (previousQuizMaster) {
            await previousQuizMaster.send(`You are no longer the quizMaster,Switched to ${interaction.user.globalName || interaction.user.username}`)

        } set(interaction.user)
        await interaction.reply({ content: 'You are now the Quiz Master', ephemeral: true });
        // await interaction.user.send('You are now the Quiz Master!');
    },
};