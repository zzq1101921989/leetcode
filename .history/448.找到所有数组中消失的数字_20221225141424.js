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

    /* 去除重复的数据 */
    const newNums = [...new Set(...nums)]

    newNums.sort((a, b) => a - b );

    for (let i = 1; i <= nums.length; i++) {

    }

    
};
// @lc code=end

