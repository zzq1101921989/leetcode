/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 * 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
 * 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// var removeElement = function (nums, val) {

//   if (!nums.length) {
// 	return 0
//   } else if (nums.length === 1) {
// 	return nums[0] === val ? 0 : 1
//   };

// //   let i = 0, j = 0

// //   for (; j < nums.length; j++) {
// // 	if (nums[j] !== val) {
// // 		nums[i] = nums[j]
// // 		i++
// // 	}
// //   }

//   let i = 0; j = nums.length

//   while ( i < j ) {
// 	if (nums[i] === val) {
// 		/* 因为本身题目要求不需要排序，所以可以大胆的把后面的元素放在前面 */
// 		nums[i] = nums[j - 1]
// 		j-- 
// 	} else {
// 		i++
// 	}
//   }

//   return i
// };

const removeElement = (nums, val) => {
  if (!nums.length) {
	return 0
  } else if (nums.length === 1) {
	return nums[0] === val ? 0 : 1
  };
}

// @lc code=end
