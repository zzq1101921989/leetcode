/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {

  if (nums.length < 3) return [];

  // 排序，从小到大进行   
  nums.sort((a, b) => a - b);
  
};
// @lc code=end
