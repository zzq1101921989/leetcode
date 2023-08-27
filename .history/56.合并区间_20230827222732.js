/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    
    if (intervals.length === 1 || !intervals.length) return intervals

    const list = []

    // 先进行左端排序确保 pre[0] < next[0]的
    intervals.sort((a, b) => a[0] - b[0]);

    // 双指针，取出第一个
    let prev = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        const cur = intervals[i];
        // [[1,3],[2,6],[8,10],[15,18]]
        if (prev[1] >= cur[0]) {
            // 改变最大范围
            prev[1] = Math.max(cur[1], prev[1]); 
        } else {
            list.push(prev)
            prev = cur
        }
    }

    // 最后的也要保存进来
    list.push(prev)

    return list
};
// @lc code=end

