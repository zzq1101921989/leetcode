/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    if (nums.length >= 3) {
        nums.sort((a, b) => a - b)
        return nums[0]
    }

};
// @lc code=end

