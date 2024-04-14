import * as vscode from "vscode";
import initvoice from "./voice/base";
export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand("openpush", () => {
    // const editor: any = vscode.window.activeTextEditor;
    // editor.hide();
    // vscode.window.showInformationMessage("Hello World from voicepupter!");
    // 初始化puperteer
    initvoice();
  });
}

// This method is called when your extension is deactivated
export function deactivate() {}
