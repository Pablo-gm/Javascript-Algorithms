// with arrays.
// if you only use push and pop methods
// unnefficient on many data

// with classes, add and remove from the "end" or "top" of the stack
class Stack{
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // adding to the beginning (top), best performance
    push(value) {
        var node = new Node(value);
        if(this.size === 0) {
            this.first = node;
            this.last = this.first;
        } else {
            var oldFirst = this.first;
            this.first = node;
            this.first.next = oldFirst;
        }
        this.size++;
        return this.size;
    }

    // pop from beginning (top) for performance
    pop() {
        var oldFirst = null;

        if(this.size === 0) {
            return oldFirst;
        }
        
        oldFirst = this.first;
        if(this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
            this.first.next = oldFirst;
        }

        this.size--;
        return oldFirst;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

var stack = new Stack();
stack.push("primero");
stack.push("segundo");
