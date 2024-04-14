import * as vscode from "vscode";
import { chineseToNumber, checkDrictionWord } from "./common";
import { posLeft, posDown, posRigth, posUp } from "../../control/base";
/**
 * 光标处理
 */

/**
 * 光标检测和移动
 * @param word
 */
const editorSelectionCheck = (word: string) => {
  if (word.includes("光标")) {
    const selectdirction: any = checkDrictionWord(word);
    if (checkDrictionWord(word)) {
      console.log("可以进行光标操作");
      const selectnum = chineseToNumber(word);
      control_select(selectdirction, selectnum);
    } else {
      vscode.window.showInformationMessage("光标指令未检测到方向");
    }
    return {
      finish: true,
      keyvalue: "光标",
    };
  }
};

function control_select(d: any, n: any) {
  console.log(d, n);

  if (d === "上") {
    posUp(n);
  } else if (d === "下") {
    posDown(n);
  } else if (d === "左") {
    posLeft(n);
  } else if (d === "右") {
    posRigth(n);
  }
}

export default editorSelectionCheck;
