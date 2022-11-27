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

    buy = prices.sort((a, b) => a - b)[0]
    sell = prices.sort((a, b) => b - a)[0]

    return buy - sell
};
// @lc code=end

