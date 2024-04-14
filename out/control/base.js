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
exports.posUp = exports.posDown = exports.posRigth = exports.posLeft = exports.getLtPosition = void 0;
const vscode = __importStar(require("vscode"));
/* 直接使用全局对象的话，可以这个时候获取的信息不是最新的 */
// const editor: any = vscode.window.activeTextEditor;
const getLtPosition = () => {
    const editor = vscode.window.activeTextEditor;
    const position = editor.selection.active;
    console.log(`Line: ${position.line}, Character: ${position.character}`);
};
exports.getLtPosition = getLtPosition;
const posLeft = (num) => {
    const editor = vscode.window.activeTextEditor;
    const selection = editor.selection;
    const oldCursorPosition = selection.start;
    const newCursorPosition = new vscode.Position(oldCursorPosition.line, Math.max(0, oldCursorPosition.character - num));
    const newSelection = new vscode.Selection(newCursorPosition, newCursorPosition);
    editor.selection = newSelection;
};
exports.posLeft = posLeft;
const posRigth = (num) => {
    const editor = vscode.window.activeTextEditor;
    const selection = editor.selection;
    const oldCursorPosition = selection.start;
    console.log(oldCursorPosition.character);
    const newCursorPosition = new vscode.Position(oldCursorPosition.line, Math.max(0, oldCursorPosition.character + num));
    const newSelection = new vscode.Selection(newCursorPosition, newCursorPosition);
    editor.selection = newSelection;
};
exports.posRigth = posRigth;
const posDown = (num) => {
    const editor = vscode.window.activeTextEditor;
    const selection = editor.selection;
    const oldCursorPosition = selection.start;
    const newCursorPosition = new vscode.Position(Math.max(0, oldCursorPosition.line + num), oldCursorPosition.character);
    const newSelection = new vscode.Selection(newCursorPosition, newCursorPosition);
    editor.selection = newSelection;
};
exports.posDown = posDown;
const posUp = (num) => {
    const editor = vscode.window.activeTextEditor;
    const selection = editor.selection;
    const oldCursorPosition = selection.start;
    const newCursorPosition = new vscode.Position(Math.max(0, oldCursorPosition.line - num), oldCursorPosition.character);
    const newSelection = new vscode.Selection(newCursorPosition, newCursorPosition);
    editor.selection = newSelection;
};
exports.posUp = posUp;
const leftOnePosDemo = () => {
    const editor = vscode.window.activeTextEditor;
    const selection = editor.selection;
    const oldCursorPosition = selection.start;
    const newCursorPosition = new vscode.Position(oldCursorPosition.line, Math.max(0, oldCursorPosition.character - 1));
    const newSelection = new vscode.Selection(newCursorPosition, newCursorPosition);
    editor.selection = newCursorPosition;
};
//# sourceMappingURL=base.js.map