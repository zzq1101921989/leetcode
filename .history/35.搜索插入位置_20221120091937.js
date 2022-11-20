/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var searchInsert = function(nums, target) {

//     if (!nums.length) return 0 

//     let index = nums.indexOf(target)

//     let num = 0

//     while (index === -1 && num < nums.length) {
//         if (nums[num] > target) {
//             index = num
//         }
//         num++
//     }

//     if (index === -1) index = nums.length
    
//     return index
// };

var searchInsert = function(nums, target) {

    if (!nums.length) return 0 

    let left = 0, right = nums.length - 1

    while (i <= right) {
        // 中位数小标索引
        let midIndex = Math.floor(left + (right - left) / 2 )
        if (nums[midIndex] < target) {
            left = midIndex + 1
        } else {
            right = midIndex - 1
        }
    }
    return left
}
// @lc code=end

