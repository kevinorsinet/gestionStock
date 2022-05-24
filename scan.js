const puppeteer = require("puppeteer");

const codeBarre = "4820207590212";

async function start(code) {
	const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(`https://www.barcodelookup.com/${code}`)
	const url = `https://www.barcodelookup.com/${code}`;
	console.log("url", url);
	const title = await page.$eval("#largeProductImage", el => el.innerHTML)
	console.log('title', title);
	// const title = await page.evaluate(() => {
  // return Array.from(document.querySelectorAll("h4")).map(x => x.textContent)
  // })
  // console.log("title", title);
}
// #product > section:nth-child(3) > div:nth-child(1) > div > div > div.col-50.product-details > h4
start(codeBarre);
