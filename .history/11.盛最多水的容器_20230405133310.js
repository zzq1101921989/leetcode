/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * 求长方形 or 正方形的面积
 * 公式：宽 * 高
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0, j = height.length - 1, maxNum = 0

    while (i < j) {
        if (height[i] < height[j]) {
            maxNum = Math.max(maxNum, height[i] * (j - i) )
            i++
        } else {
            maxNum = Math.max(maxNum, height[j] * (j - i) )
            j++
        }
    }

    return maxNum

};
// @lc code=end

