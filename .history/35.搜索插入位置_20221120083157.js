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
    if (index === -1) {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] < target) {
                index = i
                break
            } else {
                return nums.length
            }
        }
    }

    return index

};
// @lc code=end

