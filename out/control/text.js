"use strict";
/**
 * 编辑页文件内容操作，拥有编辑页的部分权柄
 */
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
exports.insertKeySt = exports.insertNote = exports.hidePage = exports.inserText_newLine = exports.inserText_recursion = exports.inserText = void 0;
const vscode = __importStar(require("vscode"));
/* 光标后插入 */
const inserText = (words) => {
    const editor = vscode.window.activeTextEditor;
    const oldCursorPosition = editor.selection.start;
    editor.edit((editBuilder) => {
        editBuilder.insert(oldCursorPosition, words);
    });
};
exports.inserText = inserText;
/* 光标后插入(递归) */
const inserText_recursion = (wordsArr) => {
    const editor = vscode.window.activeTextEditor;
    const oldCursorPosition = editor.selection.start;
    if (wordsArr.length > 0) {
        const w = wordsArr.shift();
        console.log("inserText_recursion", w);
        editor.edit((editBuilder) => {
            editBuilder.insert(oldCursorPosition, w);
            setTimeout(() => {
                inserText_recursion(wordsArr);
            }, 100);
        });
    }
};
exports.inserText_recursion = inserText_recursion;
/* 换行 */
const inserText_newLine = () => {
    const editor = vscode.window.activeTextEditor;
    const oldCursorPosition = editor.selection.start;
    editor.edit((editBuilder) => {
        editBuilder.insert(oldCursorPosition, "\n");
    });
};
exports.inserText_newLine = inserText_newLine;
/* 隐藏当前编辑器 */
const hidePage = () => {
    const editor = vscode.window.activeTextEditor;
    editor.hide();
};
exports.hidePage = hidePage;
/* 添加注释（目前只支持js） */
const insertNote = (words) => {
    const editor = vscode.window.activeTextEditor;
    const oldCursorPosition = editor.selection.start;
    editor.edit((editBuilder) => {
        editBuilder.insert(oldCursorPosition, "// " + words);
    });
};
exports.insertNote = insertNote;
/* 添加st-keywords */
const insertKeySt = (words) => {
    const editor = vscode.window.activeTextEditor;
    const oldCursorPosition = editor.selection.start;
    editor.edit((editBuilder) => {
        editBuilder.insert(oldCursorPosition, "/* " + "st-" + words + " */");
    });
};
exports.insertKeySt = insertKeySt;
// activeEditor.edit((editBuilder) => {
//   // 插入
//   editBuilder.insert(new vscode.Position(0, 0), "Hello, world!");
//   // 替换
//   editBuilder.replace(
//     new vscode.Range(
//       0,
//       0,
//       activeEditor.document.lineCount,
//       activeEditor.document.getText().length
//     ),
//     "你好, 世界!"
//   );
//   // 删除
//   editBuilder.delete(
//     new vscode.Range(
//       0,
//       0,
//       activeEditor.document.lineCount,
//       activeEditor.document.getText().length
//     )
//   );
// });
//# sourceMappingURL=text.js.map