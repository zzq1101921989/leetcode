/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    // 直接找第一个时间段进行买入，利润暂且定义为0
    let buy = prices[0], profit = 0

    for (let i = 0; i < prices.length; i++) {
        buy = Math.min(buy, prices[i])
        max = Math.max(profit, prices[i] - buy)
    }

    return profit

};
// @lc code=end

