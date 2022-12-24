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

    if (nums.length > 3) {
        nums.sort((a, b) => b - a)
        return nums[0]
    }

    /* 存放最的三位数的数组 */
    const maxs = [];

    for (var i = 0; i < nums.length; i++) {
        
    }

    return maxs.length === 2 ? maxs[1] : maxs[maxs.length - 1]

};
// @lc code=end

