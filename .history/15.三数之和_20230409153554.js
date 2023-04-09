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

  let ans = [];

  if (nums.length < 3) return [];

  // 排序，从小到大进行
  nums.sort((a, b) => a - b);

  const len = nums.length

  for (let i = 0; i < len; i++) {

    // 如果排序的结果中，某一位都已经都是大于0了，那么就没必要进行下去了（因为已经是按照排序进行了）
    if (nums[i] > 0) break;

    // 定义双指针
    let L = i + 1;
    let R = len - 1;

  }

  return ans;
};
// @lc code=end
