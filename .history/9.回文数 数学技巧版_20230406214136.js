/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数 数学技巧版本
 */

// @lc code=start
/**
 * 思路：除以分位可以得到首位数值，取余可以得到末尾数据，两者进行比较。以此类推 --------（原值需要不断的进行内缩变化）
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

    while ( x > 0 ) {

        // 取值第一位数（取整）
        const left = Math.floor(x / div)

        // 取最后一位数
        const right = x % 10;

        // 如果不等，那就直接抛错
        if (left != right) return false;

        // 1221 % 1000 = 221
        // 221 / 10 = 22.1（取整）
        // 刚好进阶对比接下来的两位
        x = Math.floor((x % div) / 10);

        // 因为已经取了第一位，和最后一位了，这里就需要除以百分位
        div /= 100;
    }
    return true;
};
// @lc code=end

