const { Client, IntentsBitField, Partials, GatewayIntentBits } = require('discord.js');
const WOK = require('wokcommands');
const path = require('path');
const config = require('./config.json');
require('dotenv/config');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.DirectMessages,
    IntentsBitField.Flags.MessageContent,
  ],

  partials: [Partials.Channel],
});

global.client = client;
global.emote = config.emotes;
global.color = config.colors;

client.on('ready', () => {
  new WOK({
    client,
    commandsDir: path.join(__dirname, 'commands'),
    // featuresDir: path.join(__dirname, 'features'),
    // events: {
    //   dir: path.join(__dirname, 'events'),
    // },
    mongoUri: process.env.MONGO_URI,
    testServers: ['817777505880375306'],
    botOwners: ['740004290063630357'],
    cooldownConfig: {
      errorMessage: `${emote.timer} Debes esperar todavía {TIME}`,
      botOwnerBypass: true,
      dbRequired: 30
    },
  })
  console.log(`El bot se ha iniciado como ${client.user.tag}`);
});

client.login(process.env.TOKEN);