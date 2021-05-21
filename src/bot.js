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
                            "!role *rollenname* - Vergibt die Rolle die dahinter beschrieben wird \n" + 
                            "                       Rollen: Role1, Role2, RickRole \n" + 
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

        //Set Role1
        if (vSplit === "Role1") {
            //var vRole = message.member.guild.roles.find(r => r.name == "Role1");
            //message.member.setNickname(`${pres[role.id]} ${message.member.displayName}`)
            //var role= member.guild.roles.cache.find(role => role.name === "Role1");
            // var role = message.guild.roles.find(role => role.name === "Role1");
            var role = message.member.roles.cache.find(role => role.name === "Role1");
            message.member.guild.roles.add(role);
        }
        //Set Role2
        if (vSplit === "Role2") {
            var vRole = message.member.guild.roles.find(r => r.name == "Role2");
            message.member.setNickname(`${pres[role.id]} ${message.member.displayName}`)
        }
        //Make RickRole
        if (vSplit === "RickRole") {
            // var vRole = message.member.guild.roles.find(r => r.name == "RickRole");
            // message.member.setNickname(`${pres[role.id]} ${message.member.displayName}`)
            message.channel.send("/giphy query: rickrole")
        }
        // message.guild.roles
        return;
    }

    //Mini Game
    if (message.content.startsWith('!calc')) {
        var parts = message.content.split(" ");
        if(parts[2] = "+") {
            console.log(parts[1])
            var result = parseInt(parts[1], 10);
            result += parseInt(parts[3], 10);
            message.channel.send("Das Ergebnis deiner Addition lautet: " + result.toString());
            return;
        }
        if(parts[2] = "*") {
            var result = parseInt(parts[1], 10);
            result *= parseInt(parts[3], 10);
            message.channel.send("Das Ergebnis deiner Multipkikation lautet: " + result.toString());
            return;
        }
        if(parts[2] = "-") {
            var result = parseInt(parts[1], 10);
            result -= parseInt(parts[3], 10);
            message.channel.send("Das Ergebnis deiner Subtraktion lautet: " + result.toString());
            return;
        }
        if(parts[2] = "/") {
            var result = parseInt(parts[1], 10);
            result /= parseInt(parts[3], 10);
            message.channel.send("Das Ergebnis deiner Division lautet: " + result.toString());
            return;
        }
        return;
    }
});