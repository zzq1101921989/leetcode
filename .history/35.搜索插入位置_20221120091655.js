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

var searchInsert = function (nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return left
}
// @lc code=end

