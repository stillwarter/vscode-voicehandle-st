"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puperteer = __importStar(require("puppeteer-core"));
const path_1 = __importDefault(require("path"));
const voicehandle_1 = __importDefault(require("./voicehandle"));
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
        console.log(`file:${path_1.default.join(__dirname, "/base.html")}`);
        const aimfile = `file:${path_1.default.join(__dirname, "../../base.html")}`;
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
                (0, voicehandle_1.default)(vtext);
            }
        });
        await page.goto(aimfile);
        // await page.goto("http://127.0.0.1:5500/voicedemo/base.html");
    }
    catch (err) {
        console.log(err);
    }
}
exports.default = initvoice;
//# sourceMappingURL=base.js.map