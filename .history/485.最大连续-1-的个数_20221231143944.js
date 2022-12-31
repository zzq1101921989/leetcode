/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续 1 的个数
 */

// @lc code=start
/**
 * 遍历数组，记录1出现次数的最大值。
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let continuous = 0,
    maxConsecutive = 0;

  for (let i = 0; i < nums.length; i++) {
    const v = nums[i];
    if (v === 1) {
      continuous++;
    } else {
      continuous = 0;
    }
    maxConsecutive = Math.max(maxConsecutive, continuous);
  }
  return maxConsecutive;
};

/**
 * 利用split方法 sort方法
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  // 将数组以0分割 ['11', '111']
  const array = nums.split("0");
  // 获取数组中最长的字符串
  var max = temp.sort((a, b) => b.length - a.length)[0];
  return max.length
};
// @lc code=end
