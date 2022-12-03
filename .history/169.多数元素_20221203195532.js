/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * 第一种实现方式 map记录出现次数
 * 思路：出现的次数必须大于整一个数组的一半，所以只要得出某一个数值在map中记录的数据超过了这个条件，那么就可以返回这个数据了
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

    const flag = nums.length / 2

    const numMap = {}

    for (let num of nums) {
        numMap[num] = (numMap[num] || 0) + 1
        if (numMap[num] > flag) return num
    }
};
// @lc code=end

