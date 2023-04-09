/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * 最难点应该就是在如何去除重复的三元组上面：如：[-1, -2, 3] [-1, 3, -1]
 * 通过从小到大的排序，刚好可以解决重复三元组的问题，顺序的结构能够有效的计算出 等于 0 的情况
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {

  let ans = [];

  if (nums.length < 3) return [];

  // 排序，从小到大进行
  nums.sort((a, b) => a - b);

  const len = nums.length

  for (let i = 0; i < len; i++) {

    // 如果排序的结果中，某一位都已经都是大于0了，那么就没必要进行下去了（因为已经是按照排序进行了）
    if (nums[i] > 0) break;

    // 定义双指针
    let L = i + 1;
    let R = len - 1;

    // 循环双指针
    while (L < R) {

        const sum = nums[i] + nums[L] + nums[R]
        
        // 内部这里while循环的目的就是为了去除相同的结果
        // 比如说 [-4, -1, -1, 0, 0, 1, 1]
        // 当我们的i = 0 的时候 L指针 = i + 1 R指针 = len 
        // -4 + -1 + 1 = 5 是 > 0 的，那么我们就需要L指针在推进一位，但是这个时候我们发现推进一位的结果和推进前的数值是一样，的这就会照成重复的问题，重复生成 = 0 的三元组
        if (sum > 0) {
            R--;
            while (L < R && nums[R] === nums[R+1]) {
                R--
            }
        } else if (sum < 0) {
            L++;
            while (L < R && nums[L] === nums[L-1]) {
                L++
            }
        } else {
            ans.push([nums[i], nums[L], nums[R]])
            R--;
            L++
            while (L < R && nums[L] === nums[L-1]) {
                L++
            }
            while (L < R && nums[R] === nums[R+1]) {
                R--
            }
            
        }
    }
  }

  return ans;
};
// @lc code=end
