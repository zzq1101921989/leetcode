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

    let i = 0

    while (i < nums.length) {
        if (nums[i + 1] - 1 !== nums[i]) {
            return nums[i + 1] - 1
        }
        i++
    }

};
// @lc code=end

