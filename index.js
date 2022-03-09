import fetch from 'node-fetch'

import compte from './mockdata/compte.mjs';
import server from './mockdata/server.mjs';
import message from './mockdata/message.mjs';
import * as fs from 'fs';

console.log('lancement du bot...')
console.log('Développeur : Ludovic LEVENEUR - https://ludovic-leveneur.re')
console.log('--------------------------------')
console.log('Username :', compte.username)
console.log('Email :', compte.email)
console.log('--------------------------------')
console.log('login : ', compte.username + ' / ' + compte.password)

let headersList = {
    "Accept": "*/*",
    "Content-Type": "application/json"
}

let bodyInfos = {  
    "email": compte.email,  
    "password": compte.password,  
    "undelete": false,
    "captcha_key": null,
    "login_source": null,
    "gift_code_sku_id": null
}  
   
fetch("https://discord.com/api/v9/auth/login", { 
    method: "POST",
    body: JSON.stringify(bodyInfos),
    headers: headersList
}).then(function(response) {
    return response.text();
}).then(function(data) {
    let newData = JSON.parse(data)
    console.log(newData);
    let token = newData.token

    console.log('--------------------------------')
    console.log(server.length)

    let arrChannel = []
    let rapport = []

    for (const [key, value] of Object.entries(server)) {

        arrChannel.push({
            nom: value.nom,
            server: value.server,
            channel: value.channel
        })

    }

    console.log(arrChannel);

    (function loop(arr) {

            setTimeout(() => {

                if (!arr.length) {
                    console.log('fini le travail !')
                    // console.log(rapport)
                    if(compte.preRapport){
                        fs.appendFile('./playwright/data/preRapport.json', JSON.stringify(rapport), err => {
                            if (err) {
                            console.error(err)
                            return
                            }
                            //done!
                        });
                    }
                    return
                };

                let headersList = {
                    "Accept": "*/*",
                    "Authorization": token,
                    "Content-Type": "application/x-www-form-urlencoded"
                }
                
                fetch("https://discord.com/api/v9/channels/" + arr[0].channel + "/messages", { 
                    method: "POST",
                    body: "content=" + message.message + "&tts=false",
                    headers: headersList
                }).then(function(response) {
                    return response.text();
                }).then(function(data) {
                    console.log(data);

                    if(compte.preRapport){
                        let nouvelleData = JSON.parse(data)

                        rapport.push({
                            "Nom du serveur": arr[0].nom,
                            "Channel": "https://canary.discord.com/channels/" + arr[0].server + "/" + arr[0].channel + "/" + nouvelleData.id   
                        })
                    }


                })

                loop(arr.slice(1));
            }, 1500);

    })(arrChannel)

});