/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {

  nums.sort((a, b) => a - b);

  /* 去重 */
  let newArr = [...new Set(nums)];


};
// @lc code=end
