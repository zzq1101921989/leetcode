/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 */

// @lc code=start
/**
 * 最简单也是比较巧妙的方式之一，利用循环的索引，因为范围数字默认也是从 0 开始，而一般的循环也是从 0 开始
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.sort((a, b) => a - b )
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i) {
            return i
        }
    }
    return n;
};

/**
 * 刚好数组是正序，并且也算等差数列，刚好可以利用等差数列前n项和来进行
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {

    const n = nums.length;
    
    /* 等差数列公式：（首项 + 尾项目）* 尾项目 / 2 */
    let total = Math.floor(n * (n + 1) / 2);

    const arrSum = nums.reduce((acc, next) => {
        return acc+=next
    }, 0)
    
    /* 差值就是缺少了那部分了 */
    return total - arrSum;
};

// @lc code=end

