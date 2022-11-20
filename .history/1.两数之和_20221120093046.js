/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 const twoSum = function(nums, target) {
    // 定义map结构，记录数值和数值对应的索引小标
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let v = nums[i]
        // 通过减法的形式逆向的在map中去寻找
        if (map.has(target - v)) {
            return [map.get(target - v), i]
            break;
        } else {
            // 保存当前的数值，和索引小标
            map.set(v, i)   
        }
    }
};
// @lc code=end

