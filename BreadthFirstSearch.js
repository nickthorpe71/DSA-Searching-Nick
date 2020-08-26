import SLL_Queue from './SLL_Queue.js';

export default class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  bfs(tree, values = []) {
    const queue = new SLL_Queue();
    const node = tree.root; //need to find out who to pass in tree
    queue.enqueue(node);
    while (queue.length) {
      const node = queue.dequeue();
      values.push(node.value);

      if (node.left)
        queue.enqueue(node.left);

      if (node.right)
        queue.enqueue(node.right);
    }
    return values;
  }
}