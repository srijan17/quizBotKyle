const { SlashCommandBuilder } = require('discord.js');
const master = require('../../Data/master')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('buzz')
        .setDescription('Answer by Buzzer')
        .addStringOption(option =>
            option.setName('answer')
                .setDescription('Your answer')
                .setRequired(true)),
    async execute(interaction) {
        const quizMaster = master.get()
        const answer = interaction.options.getString('answer')
        if (!answer) {
            await interaction.reply({ content: 'No answer provided', ephemeral: true });
        }
        if (!quizMaster) {
            await interaction.reply({ content: "No QuizMaster Set", ephemeral: true })
        }
        else {
            console.log(interaction.user)
            await quizMaster.send(`${interaction.user.globalName || interaction.user.username} Answered ${answer}`)
            await interaction.reply({ content: answer, ephemeral: true });
        }
    },
};