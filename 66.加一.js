/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

    const len = digits.length

    /* 因为是逢十进一，所以循环的顺序是颠倒的 */
    for (let i = len - 1; i >= 0; i--) {
        /* 按照提示我们知道单项的数字最大为9，逢十进一，十进制的计算方式 */
        digits[i]++;
        /* 我们首先就去++，并且对10进行取余 */
        digits[i] %= 10
        /* 如果等于0，证明上一位需要进1，否则当前位直接++，return即可 */
        if (digits[i] !== 0) return digits
    }
    /* 能走到这里，就证明有最极端的情况 999，那么直接数组的长度 + 1.并且全部设置为0，[0,0,0,0] */ 
    digits = [...new Array(len + 1)].map(_ => 0)
    /* 因为要进一，所以第一位设置为1就可以了 [1, 0, 0, 0] */
    digits[0] = 1
    
    return digits
};
// @lc code=end

