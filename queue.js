// A queue is a data structure that works based on the FIFO principle.
// First In, First Out

class Queue {
    constructor() {
        this.elements = {};
        this.head = 0;
        this.tail = 0;
    }

    enqueue(element) {
        this.elements[this.tail] = element;
        return this.tail++;
    }

    dequeue() {
        const item = this.elements[this.head];
        delete this.elements[this.head];
        this.head++;
        return item;
    }

    peek() {
        return this.elements[this.head];
    }

    get size() {
        return this.tail - this.head;
    }

    get isEmpty() {
        return this.size === 0;
    }
}

const queue = new Queue();

console.log(queue.enqueue('123'));
console.log(queue.enqueue('456'));
console.log(queue.dequeue());
console.log(queue.size);
