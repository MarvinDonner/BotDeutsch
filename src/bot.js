//Client declaration
    const { Client, User } = require('discord.js');
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

    //Command llist
    if (message.content.startsWith("!cmd") || message.content.startsWith("!help")) {
        message.author.send("Folgende Befehle kannst du verwenden: \n" + 
                            "!code              - Zeigt ein GitHub Respository in dem der Code des Bots hinterlegt ist \n" + 
                            "!say               - Liest eine Nachicht laut vor (TTS) \n" + 
                            "!role *rollenname* - Vergibt die Rolle die dahinter beschrieben wird \n" + 
                            "                       Rollen: Role1, Role2, RickRole \n" + 
                            "!game              - Spiele ein kleines 'Konsolenspiel'" + 
                            "!cmd   !help       - Zeigt alle validen Befehle an");
    }

    //Code request
    if (message.content.startsWith('!code')) {
        message.author.send('Hier findest du meinen Quellcode: https://github.com/MarvinDonner/BotDeutsch');
        return;
    }

    //Text-To-Speach Message
    if (message.content.startsWith('!say')) {
        message.author.send('/tts' + message.toString.substring(6, (message.toString.length + 1)));
        return;
    }

    //Role administation
    if (message.content.startsWith('!role')) {
        var vSplit = message.content.substring(6);

        //Set Role1
        if (vSplit === "Role1") {
            var vRole = message.member.guild.roles.find(r => r.name == "Role1");
            message.member.setNickname(`${pres[role.id]} ${message.member.displayName}`)
        }
        //Set Role2
        if (vSplit === "Role2") {
            var vRole = message.member.guild.roles.find(r => r.name == "Role2");
            message.member.setNickname(`${pres[role.id]} ${message.member.displayName}`)
        }
        //Make RickRole
        if (vSplit === "RickRole") {
            var vRole = message.member.guild.roles.find(r => r.name == "RickRole");
            message.member.setNickname(`${pres[role.id]} ${message.member.displayName}`)
            message.author.send("/giphy query: rickrole")
        }
        // message.guild.roles.
        return;
    }

    //Mini Game
    if (message.content.startsWith('!game')) {
        
        return;
    }
});