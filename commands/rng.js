const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rng')
		.setDescription('Guess the random number')
        .addIntegerOption(option =>
            option.setName('number')
                .setDescription('Random number 1-input')
                .setRequired(true)),
	async execute(interaction) {
        const num = interaction.options.getInteger('number');
        const answer = (Math.floor(Math.random() * num) + 1);
        console.log(answer, num)

        const filter = response => {
            return parseInt(response.content) === answer
        }
        if (!interaction.member.roles.cache.has('1077806635457708142')) {
            return await interaction.reply({
              content: 'You must have the admin role to use this command!',
              ephemeral: true
            });
          }
        await interaction.reply({ content: `Guess the Number between 1 - ${num}`, fetchReply: true })
        .then(() => {
            interaction.channel.awaitMessages({ filter, max: 1, time: 30000, errors: ['time'] })
			.then(collected => {
                interaction.followUp(`${collected.first().author} got the correct answer! The number was: **${answer}**`);
			})
			.catch(collected => {
                interaction.followUp('Looks like nobody got the answer this time.');
			});
        }) 
    }};