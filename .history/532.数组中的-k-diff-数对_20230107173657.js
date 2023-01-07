/*
 * @lc app=leetcode.cn id=532 lang=javascript
 *
 * [532] 数组中的 k-diff 数对
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {

    /* 排序 */
    nums.sort((a, b) => a - b)

    /* 定义双指针 */
    let i = 0, j = 1, res = 0

    /* 1/3/3/5/7/8/9/10 */
    /* k=2 */
    for (; j < nums.length; j++) {
        if (nums[i] + k === nums[j]) {
            i++
            res++
        }
    }

    return res
};
// @lc code=end

