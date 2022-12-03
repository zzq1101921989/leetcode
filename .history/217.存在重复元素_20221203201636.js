/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
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
// @lc code=end

