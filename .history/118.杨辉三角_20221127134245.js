/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {

    const arrays = []

    for(let i = 0; i < numRows; i++) {

        const array = new Array(i + 1).fill(0)

        array[0] = array[array.length - 1] = 1

        // if (i = 2) {
        //     for (let j = 0; j < array.length; j++) {

        //     }
        // }
        

        arrays.push(array)
    }

    return arrays
};
// @lc code=end

