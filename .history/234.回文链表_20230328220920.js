/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let prev = 0;
    let next = 1;

    for (; next < head.length; next++) {
        const prevValue = head[prev];
        const nextValue = head[next];
        if (prevValue !== nextValue) {
            prev++
        } else {
            return
        }
    }
    console.log(prev, 'prev-----------');
};
isPalindrome([1,2,2,1])
// @lc code=end

