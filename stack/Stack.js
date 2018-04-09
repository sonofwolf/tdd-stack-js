export default class Stack {
  constructor(initalStack) {
    this.stack = initalStack || [];
  }

  isEmpty() {
    return !this.length;
  }

  get length() {
    return this.stack.length;
  }

  peek() {
    return this.isEmpty() ? null : this.stack[this.length - 1];
  }

  push(item) {
    this.stack = [...this.stack, item];
    return this.length;
  }

  pop() {
    let retval = null;
    if (!this.isEmpty()) {
      retval = this.peek();
      this.stack = this.stack.slice(0, -1);
    }

    return retval;
  }
}
