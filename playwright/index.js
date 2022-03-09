import * as fs from 'fs';
import { chromium } from 'playwright';
// const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  // Open new page
  const page = await context.newPage();
  // Go to https://canary.discord.com/login
  await page.goto('https://canary.discord.com/login');
  // Click [aria-label="E-mail ou numéro de téléphone"]
  await page.click('[aria-label="E-mail ou numéro de téléphone"]');
  // Fill [aria-label="E-mail ou numéro de téléphone"]
  await page.fill('[aria-label="E-mail ou numéro de téléphone"]', 'ludovic.lvnr.freelance@gmail.com');
  // Press Tab
  await page.press('[aria-label="E-mail ou numéro de téléphone"]', 'Tab');
  // Fill [aria-label="Mot de passe"]
  await page.fill('[aria-label="Mot de passe"]', 'cyberghost$$974');
  // Click button:has-text("Se connecter")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://canary.discord.com/app' }*/),
    page.click('button:has-text("Se connecter")')
  ]);

  let rawdata = fs.readFileSync('data/preRapport.json');
  let students = await JSON.parse(rawdata);
  console.log(students);
  
  let comptage = 0;
  
  for (let i = 0; i < students.length; i++) {
        
        comptage = comptage + 1
        console.log(students[i]['Channel'])

        await page.goto(students[i]['Channel']);

        await page.evaluate(() => {
            // if this doesn't work, you can try to increase 0 to a higher number (i.e. 100)
            return new Promise((resolve) => setTimeout(resolve, 8000));
        });

        await page.screenshot({ path: 'rapport/one/'+ students[i]['Nom du serveur'] +'.png' });

  }

  // ---------------------
  await context.close();
  await browser.close();

})();