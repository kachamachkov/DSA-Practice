class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  //   add element to the top of the stack
  push(element) {
    this.items[this.count] = element;
    console.log(`${element} added to ${this.count}`);
    this.count++;
    return this.count - 1;
  }
}

const stack = new Stack();

stack.push(100);
stack.push(200);
stack.push(300);
