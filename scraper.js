const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function scrapeMobiMatter() {
    console.log("Browser open ho raha hai...");
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    
    // MobiMatter ke main regions/packages wale section ko target karna
    console.log("MobiMatter open ho raha hai...");
    await page.goto('https://mobimatter.com/esim-united-states', { waitUntil: 'networkidle' });

    console.log("Data load hone ka wait ho raha hai...");
    await page.waitForSelector('.package-card', { timeout: 15000 }).catch(() => console.log("Cards load hone mein thoda time lag raha hai..."));

    const esimPlans = await page.evaluate(() => {
        const cards = document.querySelectorAll('.package-card');
        let plansData = {};

        cards.forEach(card => {
            const countryName = card.querySelector('.package-regions')?.innerText || 'Global';
            const dataAmount = card.querySelector('.package-data')?.innerText || 'N/A';
            const validity = card.querySelector('.package-validity')?.innerText || 'N/A';
            const rawPrice = card.querySelector('.package-price')?.innerText || '0';
            
            // Price clean karna aur number nikalna
            const cleanPrice = parseFloat(rawPrice.replace('$', '').trim());
            
            // 💰 15% PROFIT MARGIN: Aapke business ke liye auto-calculate hoga
            const profitMargin = 1.15; 
            const finalPrice = (cleanPrice * profitMargin).toFixed(2);

            const countryKey = countryName.trim();

            if (!plansData[countryKey]) {
                plansData[countryKey] = [];
            }

            // Aapki 'src/lib/data.ts' ke exact format ke mutabik mapping
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

    // Aapke src/lib/ folder ke andar rates.json file automatically create hogi
    const outputPath = path.join(__dirname, 'src', 'lib', 'rates.json');
    
    // Ensure karna ke directory exist karti hai
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(outputPath, JSON.stringify(esimPlans, null, 2));
    console.log("Mubarak ho! Data successfully save ho gaya hai yahan: src/lib/rates.json");

    await browser.close();
}

scrapeMobiMatter();