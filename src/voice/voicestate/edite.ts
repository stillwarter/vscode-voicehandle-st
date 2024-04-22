/**
 * 状态
 *
 * 进入编辑状态后，此时会持续写入你的声音
 */
import * as vscode from "vscode";

/* 语音文本内容关键词检测 */
const enterKeyWords = "编辑";

const enterEditeState = (words: string) => {
  if (words.includes(enterKeyWords)) {
    vscode.window.showInformationMessage(`进入${enterKeyWords}状态`);
    return {
      key: enterKeyWords,
      checkArr: [editorCtxCheck, longInsert],
    };
  }
};

export default enterEditeState;

/* 根据关键词不同 执行对应操作 */
import {
  inserText,
  inserText_recursion,
  inserText_newLine,
  insertNote,
  insertKeySt,
} from "../../control/text";
/* 语音文本内容关键词检测 */
const ctxKeyWords = ["换行", "注释", "标记"];
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

const editorCtxCheck = (word: string) => {
  //   if (chectCtxKeyWords(word) === "插入") {
  //     inserText(word.replace("插入", "").replace("。", ""));
  //     return {
  //       finish: true,
  //       keyvalue: "插入",
  //     };
  //   }

  if (chectCtxKeyWords(word) === "换行") {
    inserText_newLine();
    return {
      finish: true,
      keyvalue: "换行",
    };
  }

  if (chectCtxKeyWords(word) === "注释") {
    insertNote(word.replace("注释", "").replace("。", ""));
    return {
      finish: true,
      keyvalue: "注释",
    };
  }

  if (chectCtxKeyWords(word) === "标记") {
    insertKeySt(word.replace("标记", "").replace("。", ""));
    return {
      finish: true,
      keyvalue: "标记",
    };
  }
};

const chineseExp =
  /[`:_.~!@#$%^&*() \+ =<>?"{}|, \/ ;' \\ [ \] ·~！@#￥%……&*（）—— \+ ={}|《》？：“”【】、；‘’，。、]/g;

function longInsert(word: any) {
  console.log("longinsert", word);

  const filteredStr = word.replace(chineseExp, "").split("");
  inserText_recursion(filteredStr);
  //   for (const item of filteredStr) {
  //     console.log(item);

  //     inserText(item);
  //   }

  return {
    finish: true,
    keyvalue: "编辑",
  };
}
