/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * 注意点：不能改变数组的顺序！！！
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

    let idx = null;

    if (nums.length === 1) return

    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            idx = i
            break
        }
    }

    if (idx) {
        const array = nums.splice(0, idx)
        array.forEach(item => {
            nums.push(item)
        })
    }
};
// @lc code=end

