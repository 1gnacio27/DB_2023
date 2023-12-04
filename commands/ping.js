const { EmbedBuilder } = require("discord.js");
const { CommandType } = require("wokcommands");

module.exports = {

    callback: async ({client, instance, message, interaction, args, text, guild, member, user, channel, cancelCooldown, updateCooldown,}) => {
        await interaction.deferReply();

        const reply = await interaction.fetchReply();

        const ping = reply.createdTimestamp - interaction.createdTimestamp;

        const embed = new EmbedBuilder()
            .setColor("Random")
            .setTitle('🏓 Pong!')
            .setDescription(
                `${emote.bot} **Bot:** ${ping}ms \n${emote.wifi}**Api:** _Indefinido_`
            );
        await interaction.editReply({ content: '', embeds: [embed] });

    },

    type: CommandType.SLASH,
    description: 'Muestra el ping del bot',
    testOnly: true,
    ownerOnly: false,
    maxArgs: 0,
}