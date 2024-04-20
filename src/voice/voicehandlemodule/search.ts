import * as vscode from "vscode";

interface IFindInFilesArgs {
  query?: string;
  replace?: string;
  triggerSearch?: boolean;
  filesToInclude?: string;
  filesToExclude?: string;
  isRegex?: boolean;
  isCaseSensitive?: boolean;
  matchWholeWord?: boolean;
}

/* 语音文本内容关键词检测 */
const ctxKeyWords = ["标记"];

function chectCtxKeyWords(word: string) {
  let re;
  for (const item of ctxKeyWords) {
    if (word.includes(item)) {
      re = item;
      break;
    }
  }
  // console.log('re:',re);
  return re;
}

const searchCtxCheck = (word: string) => {
  let back = { finish: true, keyvalue: "搜索" };
  if (word.includes("搜索")) {
    if (chectCtxKeyWords(word) === "标记") {
      vscode.commands.executeCommand("workbench.action.findInFiles", {
        query: "test",
        isRegex: true,
        triggerSearch: true,
      } as IFindInFilesArgs);

      back = {
        finish: true,
        keyvalue: "搜索标记",
      };
      return back;
    }

    return back;
  }
};

export default searchCtxCheck;
