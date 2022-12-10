/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 */

// @lc code=start
/**
 * 最简单也是比较巧妙的方式之一，利用循环的索引，因为范围数字默认也是从 0 开始，而一般的循环也是从 0 开始
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.sort((a, b) => a - b )
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i) {
            return i
        }
    }
    return n;
};
// @lc code=end

