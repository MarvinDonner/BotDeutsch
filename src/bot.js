//Client declaration
    require('dotenv').config();
    const { Client, Message, GuildManager, GuildMember } = require('discord.js');
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

    console.log(`[${message.author.tag}]: ${message.content}`);

    //Command llist
    if (message.content.startsWith("!cmd") || message.content.startsWith("!help")) {
        message.channel.send("Folgende Befehle kannst du verwenden: \n" + 
                            "!code              - Zeigt ein GitHub Respository in dem der Code des Bots hinterlegt ist \n" + 
                            "!say               - Liest eine Nachicht laut vor (TTS) \n" + 
                            "!calc              - Berechnet eine kleine Matheaufgabe der Form: \n" + 
                            "                       x + y ; x - y ; x * y ; x / y \n" + 
                            "!cmd   !help       - Zeigt alle validen Befehle an");
    }

    //Code request
    if (message.content.startsWith('!code')) {
        message.channel.send('Hier findest du meinen Quellcode: https://github.com/MarvinDonner/BotDeutsch');
        return;
    }

    //Text-To-Speach Message
    if (message.content.startsWith('!say')) {
        message.channel.send(message.toString().substring(4), {
            tts: true
           });
        return;
    }

    //Role administation
    if (message.content.startsWith('!role')) {
        var vSplit = message.content.substring(6);

    //Calculating of Math
    if (message.content.startsWith('!calc')) {
        var parts = message.content.split(" ");
        if (parts[2] = "+") {
            console.log(parts[1])
            var result = parseInt(parts[1], 10);
            result += parseInt(parts[3], 10);
            message.channel.send("Das Ergebnis deiner Addition lautet: " + result.toString());
            return;
        }
        if (parts[2] = "*") {
            var result = parseInt(parts[1], 10);
            result *= parseInt(parts[3], 10);
            message.channel.send("Das Ergebnis deiner Multipkikation lautet: " + result.toString());
            return;
        }
        if (parts[2] = "-") {
            var result = parseInt(parts[1], 10);
            result -= parseInt(parts[3], 10);
            message.channel.send("Das Ergebnis deiner Subtraktion lautet: " + result.toString());
            return;
        }
        if (parts[2] = "/") {
            var result = parseInt(parts[1], 10);
            result /= parseInt(parts[3], 10);
            message.channel.send("Das Ergebnis deiner Division lautet: " + result.toString());
            return;
        }
        return;
    }
});