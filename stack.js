// A stack is a data structure that works based on the FILO principle.
// First In, Last Out

class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    push(item) {
        this.items[this.count] = item;
        return this.count++; // Notice: returns not incremented value
    }

    pop() {
        if (this.count === 0) {
            return undefined;
        }
        this.count--;
        return this.items[this.count];
    }

    clear() {
        this.items = [];
        this.count = 0;
        return this.items;
    }

    peek() {
        return this.items[this.count - 1];
    }

    get size() {
        return this.count;
    }

    get isEmpty() {
        return this.count === 0;
    }
}

const stack = new Stack();

console.log(stack.push('123'));
console.log(stack.push('456'));
console.log(stack.pop());
console.log(stack.size);
console.log(stack.isEmpty);