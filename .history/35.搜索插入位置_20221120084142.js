/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {

    if (!nums.length) return 0 

    let index = nums.indexOf(target)

    let num = 0

    while (index !== -1 && num < nums.length) {
        if (nums[i] > target) {
            index = i
        }
        num++
    }

    if (index === -1) index = nums.length
    
    return index
};
// @lc code=end

