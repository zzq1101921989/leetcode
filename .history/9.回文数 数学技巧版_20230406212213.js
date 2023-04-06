/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * 思路：
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    if (x < 0) return false; 

    // 定义变量，用于取余做等分，默认是1
    let div = 1

    // 要想取值第一个位数，首先就要判断这是百分位的数，还是千分位，还是万分位 ...
    // 如：121，要想取第一位，必须div是要等于100, 121 / 100 = 1.21（取整）
    while ( x % div >= 10 ) div *= 10

    while () {

    }
};
// @lc code=end

