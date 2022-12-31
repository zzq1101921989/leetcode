/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续 1 的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {

    let continuous = 0, maxConsecutive = 0

    for (let i = 0; i < nums.length; i++) {
        const v = nums[i];
        if (v === 1) {
            continuous++;
        } else {
            continuous = 0
        }
        maxConsecutive = Math.max(maxConsecutive, continuous);
    }
    return maxConsecutive
};
// @lc code=end

