import puppeteer from "puppeteer"
export const htmlToImage = async(html)=>{
const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({
    width: 1000,
    height: 500,
    deviceScaleFactor: 1,
})
          
await page.setContent(html,{
    waitUntil: 'networkidle0',
});
await page.screenshot({path: 'quote.png'});
await browser.close();
}