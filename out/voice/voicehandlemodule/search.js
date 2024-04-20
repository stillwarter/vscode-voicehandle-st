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
const vscode = __importStar(require("vscode"));
/* 语音文本内容关键词检测 */
const ctxKeyWords = ["标记"];
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
const searchCtxCheck = (word) => {
    let back = { finish: true, keyvalue: "搜索" };
    if (word.includes("搜索")) {
        if (chectCtxKeyWords(word) === "标记") {
            vscode.commands.executeCommand("workbench.action.findInFiles", {
                query: "test",
                isRegex: true,
                triggerSearch: true,
            });
            back = {
                finish: true,
                keyvalue: "搜索标记",
            };
            return back;
        }
        return back;
    }
};
exports.default = searchCtxCheck;
//# sourceMappingURL=search.js.map