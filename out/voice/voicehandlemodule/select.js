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
const common_1 = require("./common");
const base_1 = require("../../control/base");
/**
 * 光标处理
 */
/**
 * 光标检测和移动
 * @param word
 */
const editorSelectionCheck = (word) => {
    if (word.includes("光标")) {
        const selectdirction = (0, common_1.checkDrictionWord)(word);
        if ((0, common_1.checkDrictionWord)(word)) {
            console.log("可以进行光标操作");
            const selectnum = (0, common_1.chineseToNumber)(word);
            control_select(selectdirction, selectnum);
        }
        else {
            vscode.window.showInformationMessage("光标指令未检测到方向");
        }
        return {
            finish: true,
            keyvalue: "光标",
        };
    }
};
function control_select(d, n) {
    console.log(d, n);
    if (d === "上") {
        (0, base_1.posUp)(n);
    }
    else if (d === "下") {
        (0, base_1.posDown)(n);
    }
    else if (d === "左") {
        (0, base_1.posLeft)(n);
    }
    else if (d === "右") {
        (0, base_1.posRigth)(n);
    }
}
exports.default = editorSelectionCheck;
//# sourceMappingURL=select.js.map