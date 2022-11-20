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

  if (!nums.length) {
	return 0
  } else if (nums.length === 1) {
	return nums[0] === val ? 0 : 1
  };

//   let i = 0, j = 0

//   for (; j < nums.length; j++) {
// 	if (nums[j] !== val) {
// 		nums[i] = nums[j]
// 		i++
// 	}
//   }

  let i = 0; j = nums.length

  while ( i < j ) {
	if (nums[i] === val) {
		nums[i] = nums[j - 1]
		j-- 
	} else {
		i++
	}
  }

  return i
};
// @lc code=end
