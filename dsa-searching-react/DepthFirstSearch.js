export default class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  //in order
  dfsInOrder(values = []) {
    if (this.left)
      values = this.left.dfsInOrder(values);

    values.push(this.value);

    if (this.right)
      values = this.right.dfsInOrder(values);

    return values;
  }

  //pre order
  dfsPreOrder(values = []) {
    values.push(this.value);

    if (this.left)
      values = this.left.dfsPreOrder(values);

    if (this.right)
      values = this.right.dfsPreOrder(values);

    return values;
  }

  //post order
  dfsPostOrder(values = []) {
    if (this.left)
      values = this.left.dfsPreOrder(values);

    if (this.right)
      values = this.right.dfsPreOrder(values);

    values.push(this.value);

    return values;
  }

}