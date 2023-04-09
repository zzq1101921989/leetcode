/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

    if (nums.length < 3) return []

    // 第一步：需要找到所以等于 0 的组合
    // [0, 0, 0]

    // 定义三个指针
    let i = 0, j = 1, k = 2;

    if (nums.length == 3 && nums[i] + nums[j] + nums[k] !== 0) {
        return []
    }
    
    while (k < nums.length) {

    }


};
// @lc code=end

