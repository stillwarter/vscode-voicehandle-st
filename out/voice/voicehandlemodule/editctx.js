"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const text_1 = require("../../control/text");
/**
 * 语音编辑文件内容
 */
/* 语音文本内容关键词检测 */
const ctxKeyWords = ["插入", "换行"];
function chectCtxKeyWords(word) {
    let re;
    for (const item of ctxKeyWords) {
        if (word.includes(item)) {
            re = item;
            break;
        }
    }
    // console.log('re:',re);
    return re;
}
/* 根据关键词不同 执行对应操作 */
const editorCtxCheck = (word) => {
    if (chectCtxKeyWords(word) === "插入") {
        (0, text_1.inserText)(word.replace("插入", "").replace("。", ""));
        return {
            finish: true,
            keyvalue: "插入",
        };
    }
    if (chectCtxKeyWords(word) === "换行") {
        (0, text_1.inserText_newLine)();
        return {
            finish: true,
            keyvalue: "换行",
        };
    }
};
exports.default = editorCtxCheck;
//# sourceMappingURL=editctx.js.map