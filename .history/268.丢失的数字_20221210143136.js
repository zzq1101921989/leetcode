/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {

    let i = 0

    let curNumber = 0

    let len = nums.length

    /* 边界处理 */
    if (len === 1) {
        return nums.includes(0) ? 1 : 0
    }

    /* 数组的长度也算是边界，如果没有直接返回 */
    if (!nums.includes(len)) return len

    nums.sort((a, b) => a - b )

    while (i < nums.length) {
        const cur = nums[i]
        const next = nums[i + 1] - 1
        if (next !== cur) return next
        i++
    }

};
// @lc code=end

