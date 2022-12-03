/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * 题目：给你一个整数数组 nums 和一个整数 k ，判断数组中是否存在两个 不同的索引 i 和 j ，满足 nums[i] == nums[j] 且 abs(i - j) <= k 。
 * 如果存在，返回 true ；否则，返回 false
 * 
 * 题意：最核心的就是【是否有重复的数据，并且重复数据的之间的 "间隔距离" 是否 <= k 】
 * 
 * 逻辑思路：哈希表记录数据与下标，循环判断是否有重复，并且判断 当前的下标 - 保存的下标 <= k，如果是大于则证明 旧坐标与当前坐标之前的跨度太大，需要重新更新坐标 
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var containsNearbyDuplicate = function (nums, k) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
            return true;
        } else {
            map.set(nums[i], i)
        }
    }
    return false;
};
// @lc code=end
