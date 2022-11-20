/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {

  if (!nums.length) return 0;

  let i = 0, j = 0

  for (; j < nums.length; j++) {
	if (nums[j] !== val) {
		nums[i] = nums[j]
		i++
	}
  }
  i++
};
// @lc code=end
