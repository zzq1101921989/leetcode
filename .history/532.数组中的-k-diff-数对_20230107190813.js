/*
 * @lc app=leetcode.cn id=532 lang=javascript
 *
 * [532] 数组中的 k-diff 数对
 */

// @lc code=start
/**
 * 暴力解法：哈希结构
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    /* 已知道数组中会有重复的值，但是差值为k的等式只能存在一个，所以考虑用Set结构去重 */
    const numSet = new Set(), ans = new Set();
    for (const num of nums) {
        if (numSet.has(num - k)) {
            ans.add(num)
        }
        if (numSet.has(num + k)) {
            ans.add(num + k)
        }
        /* 塞进Set结构中，并去重 */
        numSet.add(num)
    }

    return ans.size
};
// @lc code=end

