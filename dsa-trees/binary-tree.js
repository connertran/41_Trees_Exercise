/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;
    let toVisitQueue = [this.root];
    let minDepth = 0;
    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();
      minDepth++;
      if (!current.left && !current.right) return minDepth;
      if (current.left) toVisitQueue.push(current.left);
      if (current.right) toVisitQueue.push(current.right);
    }
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;
    let toVisitQueue = [this.root];
    let maxDepth = 0;
    while (toVisitQueue.length) {
      maxDepth++;
      let levelSize = toVisitQueue.length;
      for (let i = 0; i < levelSize; i++) {
        let current = toVisitQueue.shift();
        if (current.left) toVisitQueue.push(current.left);
        if (current.right) toVisitQueue.push(current.right);
      }
    }
    return maxDepth;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    if (!this.root) return 0;
    let toVisitStack = [this.root];
    let allNodes = [];
    let maxSumResult = Number.NEGATIVE_INFINITY;
    let nodeToMaxPathSum = new Map();
    while (toVisitStack.length) {
      let currentNode = toVisitStack.pop();
      allNodes.push(currentNode);
      if (currentNode.right) toVisitStack.push(currentNode.right);
      if (currentNode.left) toVisitStack.push(currentNode.left);
    }
    while (allNodes.length) {
      let node = allNodes.pop();

      let leftMax = nodeToMaxPathSum.get(node.left) || 0;
      let rightMax = nodeToMaxPathSum.get(node.right) || 0;

      let localMaxSum = node.val + leftMax + rightMax;

      maxSumResult = Math.max(maxSumResult, localMaxSum);
      nodeToMaxPathSum.set(node, node.val + Math.max(leftMax, rightMax));
    }
    return maxSumResult;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;
    let toVisitStack = [this.root];
    let nodeVals = [];
    while (toVisitStack.length) {
      let currentNode = toVisitStack.pop();
      nodeVals.push(currentNode.val);
      if (currentNode.right) toVisitStack.push(currentNode.right);
      if (currentNode.left) toVisitStack.push(currentNode.left);
    }
    nodeVals.sort((a, b) => a - b);
    for (let val of nodeVals) {
      if (lowerBound < val) {
        return val;
      }
    }
    return null;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {}

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {}

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {}

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {}
}

module.exports = { BinaryTree, BinaryTreeNode };
