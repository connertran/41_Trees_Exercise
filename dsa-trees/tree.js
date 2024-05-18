/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0; // Return 0 if the tree is empty
    let toVisitStack = [this.root];
    let numsSum = this.root.val;
    while (toVisitStack.length) {
      let current = toVisitStack.pop();
      for (let child of current.children) {
        toVisitStack.push(child);
        numsSum += child.val;
      }
    }
    return numsSum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;
    let toVisitStack = [this.root];
    let evenSum = 0;
    while (toVisitStack.length) {
      let current = toVisitStack.pop();
      if (current.val % 2 === 0) evenSum++;
      for (let child of current.children) {
        toVisitStack.push(child);
      }
    }
    return evenSum;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;
    let toVisitStack = [this.root];
    let greaterSum = 0;
    while (toVisitStack.length) {
      let current = toVisitStack.pop();
      if (current.val > lowerBound) greaterSum++;
      for (let child of current.children) {
        toVisitStack.push(child);
      }
    }
    return greaterSum;
  }
}

module.exports = { Tree, TreeNode };
