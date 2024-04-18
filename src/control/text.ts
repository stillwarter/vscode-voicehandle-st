/**
 * 编辑页文件内容操作，拥有编辑页的部分权柄
 */

import * as vscode from "vscode";

/* 光标后插入 */
const inserText = (words: any) => {
  const editor: any = vscode.window.activeTextEditor;
  const oldCursorPosition = editor.selection.start;
  editor.edit((editBuilder: any) => {
    editBuilder.insert(oldCursorPosition, words);
  });
};

/* 换行 */
const inserText_newLine = () => {
  const editor: any = vscode.window.activeTextEditor;
  const oldCursorPosition = editor.selection.start;
  editor.edit((editBuilder: any) => {
    editBuilder.insert(oldCursorPosition, "\n");
  });
};

/* 隐藏当前编辑器 */
const hidePage = () => {
  const editor: any = vscode.window.activeTextEditor;
  editor.hide();
};

/* 添加注释（目前只支持js） */
const insertNote = (words: any) => {
  const editor: any = vscode.window.activeTextEditor;
  const oldCursorPosition = editor.selection.start;
  editor.edit((editBuilder: any) => {
    editBuilder.insert(oldCursorPosition, "// " + words);
  });
};

/* 添加st-keywords */
const insertKeySt = (words: any) => {
  const editor: any = vscode.window.activeTextEditor;
  const oldCursorPosition = editor.selection.start;
  editor.edit((editBuilder: any) => {
    editBuilder.insert(oldCursorPosition, "/* " + "st-" + words + " */");
  });
};

/* 搜索文件 */


export { inserText, inserText_newLine, hidePage, insertNote, insertKeySt };
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
