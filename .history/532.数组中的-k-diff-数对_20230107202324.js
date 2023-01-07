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

// @lc code=start
/**
 * 排序 + 双指针 + Set结构去重
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
cosnt findPairs2 = (nums, k) => {

    /* 定义去重Set */
    const res = new Set();

    /* 定义常用变量 */
    let i = 0, j = 1, n = nums.length

    /* 顺序排序 */
    /* [1, 1, 3, 4, 5] */
    nums.sort((a, b) => a - b)

    for (; j < n;) {    
        if (nums[j] - nums[i] === k) {
            res.add(nums[i])
            i++
            j++
        } else if (nums[j] - nums[i] < k) {
            j++
        } else {
            i++
        }
    }
    return res.size;
}
// @lc code=end

