# DISCORD SELF BOT 👋

Ce logiciel est un programme d'automatisation sur la diffusion de vos messages. Vous pouvez rejoindre, associé et diffuser sur 100 serveurs maximum par compte sauf si votre compte est premium, vous pouvez associer jusqu'à 200 serveurs.  
  
Vous pouvez utiliser ce logiciel sur des serveurs publicitaires dans le channel "spam-pub" avec une diffusion de 3 fois par jour maximum. Idéal pour obtenir des membres en réduisant vos efforts.  

https://user-images.githubusercontent.com/28318921/157450353-23c722f1-f3ae-4f14-97c9-29a7c5780516.mp4

## Pré-requis

- Nodejs
- NPM

## Installation & configuration

- git clone https://github.com/ludovicl974/discord-self-bot.git
- npm install
- Vous devez configurer le fichier "mockdata/compte.mjs" (vous devez mettre les informations du compte qui va diffuser le message.) : 

    export default { 
    username: 'Username#0000',
    password: 'Votre mot de passe',
    email: 'Adresse email du compte',
    preRapport: true // True = Active la generation du rapport / False = désactive la génération du rapport.
    }

- Vous devez configurer le fichier "mockdata/message.mjs" et y insérer votre message.
- Vous devez configurer le fichier "mockdata/server.mjs" et y insérer tous les serveurs où vous souhaitez diffuser votre message.

## Génération des images de vérification de diffusion

Si vous souhaitez avoir les preuves de diffusion des messages, vous pouvez générer des screenshots dans le dossier 
"playwright/rapport/one". Pour cela : 
- Vous devez avoir "chromium" d'installer.
- Rendez-vous dans le dossier playwright : cd discordbot/playwright/
- Vous pouvez ensuite lancer playwright grâce à la commande : node index.js

## Génération d'un PDF.

Vous pouvez assembler toutes les preuves de diffusion dans un PDF.
Pour cela, revenez à la racine du dossier "discordbot" et lancez :
- node pdf.js




