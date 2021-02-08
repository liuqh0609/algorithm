/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 *  利用迭代完成
 * 描述：
 *  给你二叉树的根节点 root ，返回它节点值的 前序 遍历。
 * 题解：
 *    1. 首先明确前序遍历为DLR。
 *    2. 将根节点入栈，不断通过DLR的方式去遍历
 *
 *
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  // 如果传入的是空 直接返回
  if (!root) return [];
  // 创建缓存栈
  const stack = [];
  // 创建需要返回的新数组
  const res = [];
  // 将根节点入栈，作为迭代的开始
  stack.push(root);
  // 当栈中长度不为空的时候进行遍历
  while (stack.length) {
    // 将最后压入栈的元素取出
    const top = stack.pop();
    // 将栈顶值放入需要返回的数组
    res.push(top.val);
    // 获取左右节点
    if (top.right) stack.push(pop.right);
    if (top.left) stack.push(top.left);
  }
  return res;
};
