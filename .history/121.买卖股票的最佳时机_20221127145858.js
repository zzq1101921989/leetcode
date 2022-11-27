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
    let buy, sell
    const min = prices.sort((a, b) => a - b)[0]
    const max = prices.sort((a, b) => b - a)[0]
};
// @lc code=end

