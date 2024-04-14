import editorSelectionCheck from "./voicehandlemodule/select";
import editorCtxCheck from "./voicehandlemodule/editctx";
import * as vscode from "vscode";
/**
 * 语音检测预备流程集合
 */
const voiceCheckBeforArr = [editorSelectionCheck, editorCtxCheck];

/**
 * 语音输入检测中心
 */
const voiceCheckCenter = (word: string) => {
  // console.log(word);
  vscode.window.setStatusBarMessage(word);
  for (const item of voiceCheckBeforArr) {
    const sign: any = item(word);
    if (sign) {
      vscode.window.showInformationMessage(sign.keyvalue + "指令已运行完毕。");
      break;
    }
  }

  // voiceCheckBeforArr.map((item) => item(word));
};

export default voiceCheckCenter;
