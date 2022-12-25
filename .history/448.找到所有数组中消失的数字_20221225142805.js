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

    // nums 1,2,2,3,3,4,7,8
    //      1,2,3,4,7,8

    const arr = []

    for (let i = 1; i <= nums.length; ++) {
        if (!nums.find(item => item === i)) {
            arr.push(i)
        }
    }

    return arr

    
};
// @lc code=end

