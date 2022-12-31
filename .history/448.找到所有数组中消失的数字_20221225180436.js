/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {

    const arr = []
    
    for (let i = 1; i <= nums.length; i++) {
        if (!nums.find(item => item === i)) {
            arr.push(i)
        }
    }
    return arr
    
};
// @lc code=end

