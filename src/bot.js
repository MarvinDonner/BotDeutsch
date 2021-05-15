//Client declaration
    const { Client } = require('discord.js');
    const client = new Client();

//Login
    client.login(process.env.DISCORDJS_BOT_TOKEN)

//Log
    client.on('ready', () =>{
        console.log(`${client.user.username} has logged in...`);
    });

//Events
client.on('message', (message) => {
    if (message.author.bot) return;

    //Code request
    if (message.content === '!code') {
        message.author.send('Hier findest du meinen Quellcode: https://github.com/MarvinDonner/BotDeutsch');
        return;
    }

    //Text-To-Speach Message
    if (message.content === '!code') {
        message.author.send('/tts' + message.toString.substring(6, (message.toString.length + 1)));
        return;
    }
});