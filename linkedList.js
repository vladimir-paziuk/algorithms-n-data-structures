// Singly linked list - only next link
// Doubly linked list - next / previous link

// Can be dynamic size, without previously set static size, came from languages with non-dynamic memory

class LinkedListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }

    toString() {
        return `${this.value}`;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // O(1)
    append(value) {
        const node = new LinkedListNode(value);

        if (!this.head || !this.tail) {
            this.head = node;
            this.tail = node;
        }

        this.tail.next = node;
        this.tail = node;

        return this;
    }

    // O(1)
    prepend(value) {
        const node = new LinkedListNode(value, this.head);

        this.head = node;

        if (!this.tail) {
            this.tail = node;
        }
        return this;
    }

    // O(n)
    find(value) {
        if (!this.head) {
            return null;
        }
        let node = this.head;

        while (node) {
            if (node.value === value) {
                return node;
            }
            node = node.next;
        }
        return null;
    }

    // O(n + n) = O(n)
    delete(value) {
        if (!this.head) {
            return null;
        }

        let deletedNode = null;

        while (this.head && this.head.value === value) {
            deletedNode = this.head;
            this.head = this.head.next;
        }

        let currentNode = this.head;

        if (currentNode !== null) {
            while (currentNode.next) {
                if (currentNode.next.value === value) {
                    deletedNode = currentNode.next;
                    currentNode.next = currentNode.next.next;
                } else {
                    currentNode = currentNode.next;
                }
            }
        }

        if (this.tail?.value === value) {
            this.tail = currentNode;
        }

        return deletedNode;
    }

    // O(n)
    insertAfter(value, prevNode) {
        if (prevNode === null) {
            return this;
        }

        const node = new LinkedListNode(value);

        node.next = prevNode.next;
        prevNode.next = node;

        if (node.next === null) {
            this.tail = node;
        }

        return this;
    }

    // O(n)
    toArray() {
        const nodes = [];
        let node = this.head;

        while (node) {
            nodes.push(node.toString());
            node = node.next;
        }
        return nodes;
    }
}

const linkedList = new LinkedList();

linkedList
    .append('123')
    .append('456')
    .append('789')
    .prepend('0')
    .prepend('-1');

console.log(linkedList.find('0'));
console.log(linkedList.delete('456'));
console.log(linkedList.insertAfter('0.1', linkedList.find('0')));
console.log(linkedList.toArray());
