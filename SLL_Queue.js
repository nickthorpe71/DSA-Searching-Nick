export default class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(data) {
    const node = new _Node(data, null);

    if (!this.head)
      this.head = node;

    if (this.tail)
      this.tail.next = node;

    this.tail = node;
  }

  dequeue() {
    if (!this.head)
      return;

    const node = this.head;
    this.head = this.head.next;

    if (node === this.tail)
      this.tail = null;
  }

  peek() {
    if (!this.head)
      return null;
    return this.head.data;
  }

  isEmpty() {
    return (!this.head);
  }

  display() {
    let currentNode = this.head;

    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
}

class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}