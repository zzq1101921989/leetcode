/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {

  nums.sort((a, b) => a - b);

  /* 去重 */
  let newArr = [...new Set(nums)];

  if(newArr.length<3){
    return newArr[newArr.length-1]
  }
  return newArr[newArr.length-3]

};

/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = function (nums) {

    /* 定义三个变量，分为存储最大值，次大值，次次大值 */
    let a, b, c = null;

    nums.forEach(num => {
        if (a == null || num > a) {
            a = num;
            b = a
            c = b
        }
    })


    /* 次次大值不存在，那就返回最大值就可以了 */
    return c === null ? a : c
}
// @lc code=end
