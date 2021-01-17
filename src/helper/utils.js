const axios = require("axios");
const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");
const util = require("util");
//channelId=${id}
exports.fetchDataGoogle = async (id, res) => {
  try {
    const r = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?key=${process.env.YT_KEY}&part=snippet&order=date&maxResults=5&channelId=${id}`
    );

    return r.data.items;
  } catch (error) {
    return error;
  }
};
//&part=snippet&maxResults=5&relevanceLanguage=de&videoDefinition=standard&region=de&videoCaption=any
const selectors = [
  {p: "raptastisch", s: ".rpwe-title>a"},
  {p: "hiphopdx", s: ".text-wrap>a"},
];
exports.fetchData = async (url, page) => {
  let obj = selectors.find((el) => url.includes(el.p));
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    // const MODALBUTTONSELECTOR = `button[title='ZUSTIMMEN']`;
    await page.goto(url);
    // await page.waitForSelector(MODALBUTTONSELECTOR);
    // await page.click(MODALBUTTONSELECTOR);
    const options = await page.$$eval(obj.s, (options) =>
      options.map((option) => ({link: option.href, text: option.innerHTML}))
    );
    // await page.screenshot({path: "example.png", fullPage: true});
    await browser.close();
    return await options;
  } catch (error) {
    console.log(error.response.body);
    //=> 'Internal server error ...'
  }
};
exports.catchAsync = (fn) => {
  return (req, res, next) => fn(req, res, next).catch(next);
};

const handleError = async (msg) => {
  if (!fs.existsSync(path.join(__dirname, "..", "..", "log.txt"))) {
    const newValue = new Uint8Array(
      Buffer.from(JSON.stringify({msg, t: new Date(Date.now())}) + ",")
    );
    await util.promisify(fs.writeFile)(
      path.join(__dirname, "..", "..", "log.txt"),
      newValue
    );
  } else {
    console.log("test");
    const newValue1 = new Uint8Array(
      Buffer.from(JSON.stringify({msg, t: new Date(Date.now())}) + ",")
    );
    const stream = fs.createWriteStream(
      path.join(__dirname, "..", "..", "log.txt"),
      {
        flags: "a",
      }
    );
    stream.write(newValue1);
    stream.end();
  }
};

exports.globalErrorHandler = async (err, req, res, next) => {
  if (err) {
    console.log(err.message);
    await handleError(err.message);
  }
  res.status(500).json({msg: "something went wrong"});
};
