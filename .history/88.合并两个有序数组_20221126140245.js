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
/* 比较直观的解法 */
var merge = function(nums1, m, nums2, n) {
    if (!n) {
        return
    } else if (!m) {
        nums1.concat(nums2)
    }
    nums1.splice(m, nums1.length - m, ...nums2)
    nums1.sort((a, b) => a - b)    
};

/* 双指针解法 */
var merge = (nums1, m, nums2, n) => {

    let p1 = 0, p2 = 0

    let sorted = new Array(m + n).fill(0);

    let curIndex = 0;
    
    let cur;

    /* p1代表nums1数组中真正存在的数值，p2代表的是nums2中真实存在的数值 */
    while(p1 < m || p2 < n) {
        if (p1 === m) {
            cur = nums2[p2++]
        } else if (p1 === n) {
            cur = nums1[p1++]
        }
        else if (nums1[p1] < nums1[p2]) {
            cur = nums1[p1]
        } 
        else {
            cur = nums1[p2]
        }
        sorted[curIndex] = cur
        curIndex++
    }

    for (let i = 0; i < sorted.length; i++) {
        nums1[i] = sorted[i]
    }
}
// @lc code=end

