const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function scrapeMobiMatter() {
    // Headless browser open karein ge
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    
    console.log("MobiMatter open ho raha hai...");
    // Aap direct unke top dynamic packages wale page ko hit kar sakte hain
    await page.goto('https://mobimatter.com/esim-united-states', { waitUntil: 'networkidle' });

    // Elements load hone ka wait karein
    await page.waitForSelector('.package-card', { timeout: 15000 }).catch(() => console.log("Cards load ho rahe hain..."));

    const esimPlans = await page.evaluate(() => {
        const cards = document.querySelectorAll('.package-card');
        let plansData = {};

        cards.forEach(card => {
            // Region/Country name nikalna (e.g., "Turkey", "Global", "France")
            const countryName = card.querySelector('.package-regions')?.innerText || 'Global';
            const title = card.querySelector('.package-title')?.innerText || 'eSIM Plan';
            const dataAmount = card.querySelector('.package-data')?.innerText || 'N/A';
            const validity = card.querySelector('.package-validity')?.innerText || 'N/A';
            const rawPrice = card.querySelector('.package-price')?.innerText || '0';
            
            // Dollar sign hata kar number nikalna aur apna % profit margin add karna
            const cleanPrice = parseFloat(rawPrice.replace('$', '').trim());
            const profitMargin = 1.15; // 15% apna profit margin automatic add karne ke liye
            const finalPrice = (cleanPrice * profitMargin).toFixed(2);

            // Country code nikalne ka logic ya standard lowercase grouping
            const countryKey = countryName.trim();

            if (!plansData[countryKey]) {
                plansData[countryKey] = [];
            }

            // Aapki data.ts file ke structure ke mutabik object format
            plansData[countryKey].push({
                id: `${countryKey.toLowerCase()}-${dataAmount.toLowerCase().replace(' ', '')}`,
                name: `${countryName} eSIM ${dataAmount}`,
                data: dataAmount,
                duration: `Valid upto ${validity}`,
                price: `$${finalPrice}`
            });
        });

        return plansData;
    });

    // Direct aapke project ke src/lib/ folder ke andar rates.json save hogi
    const outputPath = path.join(__dirname, 'src', 'lib', 'rates.json');
    fs.writeFileSync(outputPath, JSON.stringify(esimPlans, null, 2));
    console.log("Data successfully save ho gaya hai: src/lib/rates.json");

    await browser.close();
}

scrapeMobiMatter();