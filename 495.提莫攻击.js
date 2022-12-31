/*
 * @lc app=leetcode.cn id=495 lang=javascript
 *
 * [495] 提莫攻击
 */

// @lc code=start
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */ [1, 3, 4]
var findPoisonedDuration = function(timeSeries, duration) {

    let poisoningTime = 0

    for (let i = 1; i < timeSeries.length; i++) {
        poisoningTime+=Math.min(duration, timeSeries[i] - timeSeries[i - 1])
    }

    /* 最后一次攻击肯定加两秒 */
    poisoningTime += duration

    return poisoningTime;
};
// @lc code=end

