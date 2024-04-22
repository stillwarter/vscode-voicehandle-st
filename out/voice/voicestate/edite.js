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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 状态
 *
 * 进入编辑状态后，此时会持续写入你的声音
 */
const vscode = __importStar(require("vscode"));
/* 语音文本内容关键词检测 */
const enterKeyWords = "编辑";
const enterEditeState = (words) => {
    if (words.includes(enterKeyWords)) {
        vscode.window.showInformationMessage(`进入${enterKeyWords}状态`);
        return {
            key: enterKeyWords,
            checkArr: [editorCtxCheck, longInsert],
        };
    }
};
exports.default = enterEditeState;
/* 根据关键词不同 执行对应操作 */
const text_1 = require("../../control/text");
/* 语音文本内容关键词检测 */
const ctxKeyWords = ["换行", "注释", "标记"];
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
const editorCtxCheck = (word) => {
    //   if (chectCtxKeyWords(word) === "插入") {
    //     inserText(word.replace("插入", "").replace("。", ""));
    //     return {
    //       finish: true,
    //       keyvalue: "插入",
    //     };
    //   }
    if (chectCtxKeyWords(word) === "换行") {
        (0, text_1.inserText_newLine)();
        return {
            finish: true,
            keyvalue: "换行",
        };
    }
    if (chectCtxKeyWords(word) === "注释") {
        (0, text_1.insertNote)(word.replace("注释", "").replace("。", ""));
        return {
            finish: true,
            keyvalue: "注释",
        };
    }
    if (chectCtxKeyWords(word) === "标记") {
        (0, text_1.insertKeySt)(word.replace("标记", "").replace("。", ""));
        return {
            finish: true,
            keyvalue: "标记",
        };
    }
};
const chineseExp = /[`:_.~!@#$%^&*() \+ =<>?"{}|, \/ ;' \\ [ \] ·~！@#￥%……&*（）—— \+ ={}|《》？：“”【】、；‘’，。、]/g;
function longInsert(word) {
    console.log("longinsert", word);
    const filteredStr = word.replace(chineseExp, "").split("");
    (0, text_1.inserText_recursion)(filteredStr);
    //   for (const item of filteredStr) {
    //     console.log(item);
    //     inserText(item);
    //   }
    return {
        finish: true,
        keyvalue: "编辑",
    };
}
//# sourceMappingURL=edite.js.map