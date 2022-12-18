/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * 注意点：不能改变数组的顺序！！！
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

    if (nums.length === 1) return

    let j = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            const v = nums[i]
            nums[i] = nums[j];
            nums[j++] = v
        }
    }
};
// @lc code=end

