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

    nums.sort((a, b) => {a - b})

    let i = 1

    return nums.reduce((acc, cur) => {
        if (i !== cur) {
            acc.push(cur)
        }
        return acc
    }, [])
};
// @lc code=end

