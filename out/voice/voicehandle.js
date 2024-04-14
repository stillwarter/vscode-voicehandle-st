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
const select_1 = __importDefault(require("./voicehandlemodule/select"));
const editctx_1 = __importDefault(require("./voicehandlemodule/editctx"));
const vscode = __importStar(require("vscode"));
/**
 * 语音检测预备流程集合
 */
const voiceCheckBeforArr = [select_1.default, editctx_1.default];
/**
 * 语音输入检测中心
 */
const voiceCheckCenter = (word) => {
    // console.log(word);
    vscode.window.setStatusBarMessage(word);
    for (const item of voiceCheckBeforArr) {
        const sign = item(word);
        if (sign) {
            vscode.window.showInformationMessage(sign.keyvalue + "指令已运行完毕。");
            break;
        }
    }
    // voiceCheckBeforArr.map((item) => item(word));
};
exports.default = voiceCheckCenter;
//# sourceMappingURL=voicehandle.js.map