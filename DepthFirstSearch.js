export default class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  dfs(values = []) {
    if (this.left)
      values = this.left.dfs(values);

    values.push(this.value);

    if (this.right)
      values = this.right.dfs(values);

    return values;
  }

}