/**
 * 状态退出
 * 设定为唯一关键字 退出
 */
const keyWord = "退出";

const quitCheck = (word: string) => {
  if (word.includes(keyWord)) {
    return {
      key: keyWord,
      checkArr: [],
    };
  }
};

export default quitCheck;
