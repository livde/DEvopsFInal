const puppeteer = require('puppeteer');

test('La página contiene el título Hola Mundo', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`file://${__dirname}/../index.html`);
    const content = await page.content();
    expect(content).toContain('<h1>Hola Mundo</h1>');
    await browser.close();
});
