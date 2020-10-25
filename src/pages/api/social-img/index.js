import { absoluteUrl } from "src/utils/absolute-url";
import chrome from "chrome-aws-lambda";
import pptr from "puppeteer";
import qs from "querystring";

const isDev = process.env.NODE_ENV === "development";

const handler = async (req, res) => {
  let browser = null;

  try {
    const title = req.query.title;
    const desc = req.query.desc;
    const path = req.query.path;

    const { origin } = absoluteUrl(req);
    const query = qs.stringify({ title, desc, path });
    const url = `${origin}/social-img?${query}`;

    browser = await chrome.puppeteer.launch({
      args: isDev ? [] : chrome.args,
      defaultViewport: chrome.defaultViewport,
      executablePath: isDev ? pptr.executablePath() : await chrome.executablePath, // prettier-ignore
      headless: isDev ? true : chrome.headless,
      ignoreHTTPSErrors: true,
    });
    const page = await browser.newPage();

    await page.setViewport({
      width: 1200,
      height: 630,
    });

    await page.goto(url, {
      waitUntil: "load",
    });

    const screenshot = await page.screenshot({
      encoding: "binary",
    });

    res.setHeader("content-type", "image/png");
    res.setHeader("cache-control", "public, max-age=604800");
    res.send(screenshot);
  } catch (error) {
    res.status(500).json({ error });
  } finally {
    if (browser) {
      await browser.close();
    }
  }
};

export default handler;
