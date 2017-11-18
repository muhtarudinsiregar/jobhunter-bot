const puppeteer = require("puppeteer");

const init = require("./init.js");

async function getPic() {
  const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
  const page = await browser.newPage();
  await page.goto(init.url, {
    waitUntil: "load"
  });

  await page.setViewport({
    width: init.size, // 320, 768, 1024, 1280
    height: 600
  });
  await page.screenshot({ path: init.path, fullPage: true });

  await browser.close();
}

getPic();
