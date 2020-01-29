const Discord = require('discord.js'); //Ce que le bot à besoin /
const client = new Discord.Client(); //Que votre Bot est un nouvel utilisateur
var prefix = "prépare le prochain raid"; //Prefix de votre Bot ( *play www.youtube.com/ )
client.login("NjY2NzEwMTI3Njg4Mjg2MjE4.XjF0Mg.kmCfJqT6PC4JPseZzHyHFVML0Rk"); //Token (Série de chiffre) propre a chaque Bot
client.on("ready", () => { //Signifie que le bot à bien démarré 
    console.log("Ready to kill !"); //Lorsque que le bot est lancé observer la console Visual Studio 
    client.user.setGame("préparer le prochain raid"); //Voir le Jeu sur le Discord
});