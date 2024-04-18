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

/* 流程思考 */

/**
 * 简单指令:
 * 1.光标：控制光标移动
 * 2.插入：简单文本插入
 * 3.换行：光标处换行
 * 以下为未实现：
 * 4.文件查找（st-keywords）
 * 5.设置keywords
 * 6.注释
 */

/**
 * 复杂指令:
 * 1.项目初始化：选择你需要初始化的项目
 */

/**
 * 联动指令:
 * 1.疑问
 * 2.收获
 * 3.想法
 * 4.记录
 */

/**
 * 文本解析：
 */

/**
 * 1.目前有一些·预设好的指令处理函数，通过函数内置的关键词来
 */