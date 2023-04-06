/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const nums = x.split('');
    for (let i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
        if (i === j) return true;
        if (nums[i] !== nums[j]) return false;
    }
};
// @lc code=end

