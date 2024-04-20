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
const search_1 = __importDefault(require("./voicehandlemodule/search"));
const vscode = __importStar(require("vscode"));
/**
 * 语音检测预备流程集合
 */
const voiceCheckBeforArr = [search_1.default, select_1.default, editctx_1.default];
/**
 * 语音输入检测中心
 */
const voiceCheckCenter = (word) => {
    // console.log(word);
    vscode.window.setStatusBarMessage(word);
    for (const item of voiceCheckBeforArr) {
        const sign = item(word);
        if (sign) {
            vscode.window.showInformationMessage(sign.keyvalue + "指令已运行完毕!");
            break;
        }
    }
    // voiceCheckBeforArr.map((item) => item(word));
};
exports.default = voiceCheckCenter;
/* 流程思考 */
/**
 * 简单指令:
 * 1.光标：控制光标移动
 * 2.插入：简单文本插入
 * 3.换行：光标处换行
 * 以下为未实现：
 * 4.文件查找（st-keywords）
 * 5.设置keywords
 * 6.注释
 */
/**
 * 复杂指令:
 * 1.项目初始化：选择你需要初始化的项目
 */
/**
 * 联动指令:
 * 1.疑问
 * 2.收获
 * 3.想法
 * 4.记录
 */
/**
 * 文本解析：
 */
/**
 * 1.目前有一些·预设好的指令处理函数，通过函数内置的关键词来
 */ 
//# sourceMappingURL=voicehandle.js.map