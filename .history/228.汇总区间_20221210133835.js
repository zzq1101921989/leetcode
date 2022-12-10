/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {

    // 默认放入第一个数据
    let array = [ [nums[0]] ]

    let current = 0

    for (let i = 1; i < nums.length; i++) {

        let range = array[current];
        let val = nums[i];
        let mantissa = range[range.length - 1]

        if (!range.length || val - 1 === mantissa) {
            range.push(val)   
        } else {
            array[++current] = []
        }
    }

    return array
};
// @lc code=end

