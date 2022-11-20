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

    let i = 0, j = nums.length - 1

    while (i < j) {
        // 中位数小标索引
        let midIndex = Math.floor(i + (j - i) / 2 )
        if (nums[midIndex] > target) {
            j = midIndex - 1
        } else {
            i = midIndex + 1
        }
    }

    return i

}
// @lc code=end

