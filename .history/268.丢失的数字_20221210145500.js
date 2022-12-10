/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {

    nums.sort((a, b) => a - b )

    const n = nums.length;
    
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i) {) {
            return i
        }
    }
    return n;

};
// @lc code=end

