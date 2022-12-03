/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * 哈希表
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const map = {}
    for(let num of nums) {
        map[num] = (map[num] || 0) + 1
        if (map[num] === 2) return true 
    }
    return false
};

/**
 * 排序
 * @param {*} nums 
 * @returns 
 */
var containsDuplicate = function(nums) {
    nums.sort((a, b) => a - b); 
    for (let i = 0; i < nums.length; i++) {
        // 先小到大排序，如果有重复的，那么他们之间肯定是相邻的关系
        if (nums[i] === nums[i + 1]) {
            return true;
        }
    }
    return false
};
// @lc code=end

