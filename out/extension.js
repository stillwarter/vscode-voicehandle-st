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
exports.deactivate = exports.activate = void 0;
const vscode = __importStar(require("vscode"));
const base_1 = __importDefault(require("./voice/base"));
function activate(context) {
    let disposable = vscode.commands.registerCommand("openpush", async () => {
        // const editor: any = vscode.window.activeTextEditor;
        // editor.hide();
        // vscode.window.showInformationMessage("Hello World from voicepupter!");
        // 初始化puperteer
        (0, base_1.default)();
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
exports.activate = activate;
// This method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map