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
    return this.count - 1; //return position of addition
  }

  // return and remove top element in stack
  // return undefined if stack is empty
  pop() {
    if (this.count == 0) return undefined;
    let deleteItem = this.items[this.count - 1];
    this.count--;
    console.log(`${deleteItem} removed`);
    return deleteItem;
  }
}

const stack = new Stack();

stack.push(100);
stack.push(200);
stack.push(300);

stack.pop();
stack.pop();