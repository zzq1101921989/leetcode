/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    let left = 0, right = 1

    for (; right < nums.length; right++) {
        if (nums[left] === nums[right]) {
            continue
        } else {
            left++
            nums[left] = nums[right]
        }
    }

    return left + 1
};
// @lc code=end

