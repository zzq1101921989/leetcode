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
    } else if (!m) {
        nums1.concat(nums2)
    }

    const emptyLen = nums1.length - m

    /* 把nums2数组里面的数据添加到nums1中 */
    for (let i = 0; i < n; i++) {
        nums1.push(nums2[i])
    }

    for (let k = 1; k < nums1.length; k++) {
        if (nums1[k] < nums1[k - 1]) {
            let v = nums1[k]
            nums1[k] = nums1[k - 1]
            nums1[k - 1] = v
        }
    }
    
    for (let i = 0; i < emptyLen; i++) {
        const idx = nums1.findIndex(item => item === 0)
        if (idx !== -1) nums1.splice(idx, 1)
    }
};
// @lc code=end

