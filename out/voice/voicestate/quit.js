"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 状态退出
 * 设定为唯一关键字 退出
 */
const keyWord = "退出";
const quitCheck = (word) => {
    if (word.includes(keyWord)) {
        return {
            key: keyWord,
            checkArr: [],
        };
    }
};
exports.default = quitCheck;
//# sourceMappingURL=quit.js.map