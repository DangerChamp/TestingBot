const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('transfer')
        .setDescription('Transfers money.')
        .addIntegerOption(option => option.setName('amount').setDescription('Amount to transfer.').setRequired(true))
        .addUserOption(option => option.setName('user').setDescription('User to transfer to.').setRequired(true)),
    async execute(interaction) {
        const currentAmount = currency.getBalance(interaction.user.id);
        const transferAmount = interaction.options.getInteger('amount');
        const transferTarget = interaction.options.getUser('user');
        if (transferAmount > currentAmount)
        return interaction.reply(
            `Sorry ${interaction.user}, you only have ${currentAmount}.`
        );
        if (transferAmount <= 0)
        return interaction.reply(
            `Please enter an amount greater than zero, ${interaction.user}.`
        );
        currency.add(interaction.user.id, -transferAmount);
        currency.add(transferTarget.id, transferAmount);
        return interaction.reply(
        `Successfully transferred ${transferAmount}💰 to ${transferTarget.tag}. Your current balance is ${currency.getBalance(interaction.user.id)}💰`
        );
    },
};
