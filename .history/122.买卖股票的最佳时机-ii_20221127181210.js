/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let ans = 0
    for (let i = 1; i < prices.length; i++) {
        /* prices[i] - prices[i - 1]：看看今天买隔天卖有没有收益，如果没有那就跳过  */
        ans += Math.max(0, prices[i] - prices[i - 1]);
    }
    return ans
};
// @lc code=end

