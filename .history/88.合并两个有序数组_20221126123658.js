/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

    if (!n) {
        return
    }
    if (!m) {
        nums1.concat(nums2)
    }

    for (let i = 0; i < n; i++) {
        nums1.push(nums2[i])
        m++
    }

    for (let k = 1; k < m; k++) {
        if (nums1[k] < nums1[k - 1]) {
            let v = nums1[k]
            nums1[k] = nums1[k - 1]
            nums1[k - 1] = v
        }
    }
    
};
// @lc code=end

