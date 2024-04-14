import * as puperteer from "puppeteer-core";
import path from "path";
import { getLtPosition, posRigth, posDown, posUp } from "../control/base";
import voiceCheckCenter from "./voicehandle";

const initvoice = () => {
  initpu();
};
let browser;
async function initpu() {
  try {
    browser = await puperteer.launch({
      headless: true,
      args: [
        "--window-size=50,500",
        "--enable-speech-input",
        "--window-position=0,100",
        "--enable-speech-dispatcher", // Needed for Linux?
        "--use-fake-ui-for-media-stream", // dissable mic popup
        "--no-first-run",
        "--no-default-browser-check",
      ],
      executablePath:
        // "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
        "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    });
    // console.log(browser);

    //   const newp=  await browser.newPage()
    //   console.log(newp);
    // const context = await browser.createBrowserContext();
    // Create a new page in a pristine context.
    const page = await browser.newPage();
    // await page.goto(`file:${path.join(__dirname, "/html/index.html")}`);
    console.log(`file:${path.join(__dirname, "/base.html")}`);
    const aimfile = `file:${path.join(__dirname, "../../base.html")}`;
    // await page.setViewport({
    //     width: 100,
    //     height: 100,
    //   });

    // 定义事件处理程序函数
    function onLoad() {
      console.log("页面加载完成！");
    }

    // 使用 page.on 方法监听页面加载完成事件，并在加载完成时执行 onLoad 函数
    page.on("load", onLoad);

    // 监听script
    // page.on("script", (script) => {
    //   console.log("Script:", script);
    // });

    page.on("console", (message) => {
      // console.log("Console message:", message.text());
      const vtext = message.text();

      if (vtext) {
        voiceCheckCenter(vtext);
      }
    });

    await page.goto(aimfile);
    // await page.goto("http://127.0.0.1:5500/voicedemo/base.html");
  } catch (err) {
    console.log(err);
  }
}

export default initvoice;
