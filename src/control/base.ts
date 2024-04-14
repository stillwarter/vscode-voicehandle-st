import * as vscode from "vscode";

/* 直接使用全局对象的话，可以这个时候获取的信息不是最新的 */
// const editor: any = vscode.window.activeTextEditor;

const getLtPosition = () => {
  const editor: any = vscode.window.activeTextEditor;
  const position = editor.selection.active;
  console.log(`Line: ${position.line}, Character: ${position.character}`);
};

const posLeft = (num: number) => {
  const editor: any = vscode.window.activeTextEditor;
  const selection = editor.selection;
  const oldCursorPosition = selection.start;
  const newCursorPosition = new vscode.Position(
    oldCursorPosition.line,
    Math.max(0, oldCursorPosition.character - num)
  );
  const newSelection = new vscode.Selection(
    newCursorPosition,
    newCursorPosition
  );
  editor.selection = newSelection;
};

const posRigth = (num: number) => {
  const editor: any = vscode.window.activeTextEditor;
  const selection = editor.selection;
  const oldCursorPosition = selection.start;
  console.log(oldCursorPosition.character);

  const newCursorPosition = new vscode.Position(
    oldCursorPosition.line,
    Math.max(0, oldCursorPosition.character + num)
  );
  const newSelection = new vscode.Selection(
    newCursorPosition,
    newCursorPosition
  );
  editor.selection = newSelection;
};

const posDown = (num: number) => {
  const editor: any = vscode.window.activeTextEditor;
  const selection = editor.selection;
  const oldCursorPosition = selection.start;

  const newCursorPosition = new vscode.Position(
    Math.max(0, oldCursorPosition.line + num),
    oldCursorPosition.character
  );
  const newSelection = new vscode.Selection(
    newCursorPosition,
    newCursorPosition
  );
  editor.selection = newSelection;
};

const posUp = (num: number) => {
  const editor: any = vscode.window.activeTextEditor;
  const selection = editor.selection;
  const oldCursorPosition = selection.start;

  const newCursorPosition = new vscode.Position(
    Math.max(0, oldCursorPosition.line - num),
    oldCursorPosition.character
  );
  const newSelection = new vscode.Selection(
    newCursorPosition,
    newCursorPosition
  );
  editor.selection = newSelection;
};

const leftOnePosDemo = () => {
  const editor: any = vscode.window.activeTextEditor;
  const selection = editor.selection;
  const oldCursorPosition = selection.start;
  const newCursorPosition = new vscode.Position(
    oldCursorPosition.line,
    Math.max(0, oldCursorPosition.character - 1)
  );
  const newSelection = new vscode.Selection(
    newCursorPosition,
    newCursorPosition
  );
  editor.selection = newCursorPosition;
};

export { getLtPosition, posLeft, posRigth, posDown, posUp };
