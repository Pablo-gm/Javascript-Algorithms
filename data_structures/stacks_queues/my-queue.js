// with arrays using unshift and pop (or push and shift), but very unefficient


// dequeue here  *--> *--> *--> queue here
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val){
        var node = new Node(val);
        if(this.size === 0){
            this.first = node;
            this.last = this.first;
        }else{
            this.last.next = node;
            this.last = node;
        }
        this.size++;
        return this.size;
    }

    dequeue(){
        var node;
        if(this.size === 0) {
            return null;
        }

        node = this.first;
        if(this.size === 1){
            this.first = null;
            this.last = this.first;
        }else{
            this.first = this.first.next;
        }

        this.size--;
        return node.value;

    }
}

var queue = new Queue();