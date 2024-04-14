import { inserText, inserText_newLine } from "../../control/text";
/**
 * 语音编辑文件内容
 */

/* 语音文本内容关键词检测 */
const ctxKeyWords = ["插入", "换行"];

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

/* 根据关键词不同 执行对应操作 */
const editorCtxCheck = (word: string) => {
  if (chectCtxKeyWords(word) === "插入") {
    inserText(word.replace("插入", "").replace("。", ""));
    return {
      finish: true,
      keyvalue: "插入",
    };
  }

  if (chectCtxKeyWords(word) === "换行") {
    inserText_newLine();
    return {
      finish: true,
      keyvalue: "换行",
    };
  }
};

export default editorCtxCheck;
