const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('balance')
        .setDescription('Shows your balance.'),
    async execute(interaction) {
        const target = interaction.options.getUser('user') ?? interaction.user;
        return interaction.reply(`${target.tag} has ${currency.getBalance(target.id)}💰`);
    },
};