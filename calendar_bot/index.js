const Discord = require('discord.js'); //Ce que le bot à besoin /
const client = new Discord.Client(); //Que votre Bot est un nouvel utilisateur
var prefix = "*"; //Prefix de votre Bot ( *play www.youtube.com/ )
client.login("NjY2NzEwMTI3Njg4Mjg2MjE4.XjGlZg.H2A1gkMreuFxJyldweekLvaYt0U"); //Token (Série de chiffre) propre a chaque Bot
client.on("ready", () => { //Signifie que le bot à bien démarré 
    console.log("Je suis prêt !"); //Lorsque que le bot est lancé observer la console Visual Studio 
    client.user.setGame("Préparer le raid !"); //Voir le Jeu sur le Discord
});