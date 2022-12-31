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

    for (let i = 0; i < timeSeries.length; i++) {

        if (i === timeSeries.length - 1) {
            timeSeries[i] - 1 === timeSeries[i - 1] ? poisoningTime+=1 : poisoningTime+=2
        }
        else if (timeSeries[i] + duration - 1 !== timeSeries[i + 1]) {
            poisoningTime+=2
        } else {
            poisoningTime+=3
        }
    }

    return poisoningTime;
};
// @lc code=end

