"use strict";
/**
 * 语音文字处理的一些通用方法
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkDrictionWord = exports.chineseToNumber = void 0;
/* 语音文字数字转阿拉伯数字 */
// Edge的语音转换很奇怪，说整十的数字显示的是文字，非整十就是数字？
const chinesWordNumber = [
    { ch: "零", value: 0 },
    { ch: "二十", value: 20 },
    { ch: "三十", value: 30 },
    { ch: "四十", value: 40 },
    { ch: "五十", value: 50 },
    { ch: "六十", value: 60 },
    { ch: "七十", value: 70 },
    { ch: "八十", value: 80 },
    { ch: "九十", value: 90 },
    { ch: "一百", value: 100 },
    { ch: "十", value: 10 },
    { ch: "九", value: 9 },
    { ch: "八", value: 8 },
    { ch: "把", value: 8 },
    { ch: "七", value: 7 },
    { ch: "六", value: 6 },
    { ch: "五", value: 5 },
    { ch: "四", value: 4 },
    { ch: "三", value: 3 },
    { ch: "二", value: 2 },
    { ch: "一", value: 1 },
];
function chineseToNumber(word) {
    let re = null;
    for (const item of chinesWordNumber) {
        if (word.includes(item.ch)) {
            re = item.value;
            break;
        }
    }
    if (!re) {
        const num = word.match(/\d+/g);
        if (Array.isArray(num)) {
            return num[0];
        }
        // return num[0];
    }
    return re;
}
exports.chineseToNumber = chineseToNumber;
/* 语音方位词检测 */
const dirction = ["上", "下", "左", "右"];
const checkDrictionWord = (word) => {
    let re;
    for (const item of dirction) {
        if (word.includes(item)) {
            re = item;
            break;
        }
    }
    return re;
};
exports.checkDrictionWord = checkDrictionWord;
//# sourceMappingURL=common.js.map