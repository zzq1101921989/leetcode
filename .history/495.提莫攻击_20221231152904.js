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
 */ [1, 3, 6]
var findPoisonedDuration = function(timeSeries, duration) {


    const poisoningTime = 0

    let i = timeSeries.length - 1

    while (i > 0) {
        let nextV = timeSeries.length[i]
        let preV = timeSeries.length[--i]
        if (nextV - 1 !== preV) {
            poisoningTime+=2
        } else {
            poisoningTime+=3
        }
    }

    return poisoningTime;
};
// @lc code=end

