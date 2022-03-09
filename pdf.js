import PDFDocument from 'pdfkit';
import path from "path";
import * as fs from 'fs';
import compte from './mockdata/compte.mjs';
import server from './mockdata/server.mjs';

console.log('Generation d\'un pdf...')

const __dirname = path.resolve();
console.log(__dirname)
const directoryPath = path.join(__dirname, '/playwright/rapport/one');
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach

    console.log(files.length)

    if(files.length != 0){

        let pdfDoc = new PDFDocument;
        pdfDoc.pipe(fs.createWriteStream(__dirname + '/playwright/rapport/pdf/rapport.pdf'));
        pdfDoc.text("ExodePUB")
        pdfDoc.text("---------------------------------------------------------------------------------------------------------------------")
        pdfDoc.text("Votre gestionnaire de publicité : " + compte.username)
        pdfDoc.text("Votre publicité a été diffuser sur : " + Object.keys(server).length + " serveurs")
        pdfDoc.text("---------------------------------------------------------------------------------------------------------------------")
        files.forEach(function (file) {
            // Do whatever you want to do with the file
            // Add an image, constrain it to a given size, and center it vertically and horizontally
            pdfDoc.image(__dirname + '/playwright/rapport/one/' + file, {
                width: "450"
            })
            .text(file);
            pdfDoc.addPage();
            console.log(__dirname + '/playwright/rapport/one/' + file); 
        });
        pdfDoc.text("Rejoignez-nous sur notre discord : ")
        pdfDoc.text('https://discord.gg/gMgHYjBamg ', {
            link: 'https://discord.gg/gMgHYjBamg ',
            underline: false
        })
        // pdfDoc.text("My Sample PDF Document");
        pdfDoc.end();


    } else {
        console.log('Dossier vide.')
        return
    }


});



