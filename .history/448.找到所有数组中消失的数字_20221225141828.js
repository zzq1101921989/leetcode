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

    /* 去除重复的数据 */
    const newNums = [...new Set(...nums)] 

    newNums.sort((a, b) => a - b );


    for (let i = 0;     for (let i = 0; nums < array.length; nums++) {
        < array.length; nums++) {
        
    }

    
};
// @lc code=end

