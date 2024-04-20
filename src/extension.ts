import * as vscode from "vscode";
import initvoice from "./voice/base";



export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand("openpush", async () => {
    // const editor: any = vscode.window.activeTextEditor;
    // editor.hide();
    // vscode.window.showInformationMessage("Hello World from voicepupter!");
    // 初始化puperteer
    initvoice();

    // const input = await vscode.window.showInputBox();
    // console.log(input);

    // vscode.commands.executeCommand("workbench.action.findInFiles", {
    //   query: 'test',
    //   isRegex: true,
    //   triggerSearch: true,
    // } as IFindInFilesArgs);

    // const tt: any = vscode.workspace;
    // const vwork = vscode.workspace.findFiles("12").then((res) => {
    //   console.log(res);
    // });
    // const vwork = tt.findFiles("?12").then((res: any) => {
    //   console.log(res);
    // });

    // console.log(tt.findTextInFiles);
  });
}

// This method is called when your extension is deactivated
export function deactivate() {}
