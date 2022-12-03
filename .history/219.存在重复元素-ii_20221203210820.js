/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * 注意点：相比第一道题目，这里不能先排序
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {

    const map = new Map();

    const isExist = false

    for (let i = 0; i < nums.length; i++) {
        map.has(nums[i]) ? map.get(nums[i]).push(i) : map.set(nums[i], [].concat([i]))
    }

    for (let item of map) {
        console.log(item);
        if (item[1].length < 2) {
            continue;
        }


        
    }

    return isExist
};
// @lc code=end

