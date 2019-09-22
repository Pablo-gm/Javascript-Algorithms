class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    pushM(val) {
        var node = new Node(val);
        if(this.length === 0 ){
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    popM() {
        if(this.length === 0) {
            return undefined;
        } else if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            var lastNode = this.tail;
            this.tail = this.tail.prev;
            this.tail.next = null;
            lastNode.prev = null;
        }

        this.length--;
        return lastNode;
    }

    shiftM() {
        if(this.length === 0) {
            return undefined;
        }else if (this.length === 1) {
            this.head = null;
            this.tail = null;  
        } else {
            var firstNode = this.head;
            this.head = this.head.next;
            this.head.prev = null;
            firstNode.next = null;
        }
        this.length--;
        return firstNode;
    }

    unshiftM(val) {
        var node = new Node(val);
        if(this.length == 0) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.length++;

        return this;
    }

    getM(index) {
        if(index < 0 || index >= this.length){
            return null;
        }

        var node;
        if(index > this.length / 2) {
            node = this.tail;
            for(var i = this.length - 1; i > index;i--){
                node = node.prev;
            }
        } else {
            node = this.head;
            for(var i = 0; i < index ;i++){
                node = node.next;
            }
        }
        return node;
    }

    setM(index, val) {
        var node = this.getM(index);
        if(node) {
            node.val = val;
            return true;
        }

        return false;
    }

    insertM(index, val) {
        if(index < 0 || index > this.length){
            return false;
        } else if(index === 0) {
            return !!this.unshiftM(val);
        } else if(index === this.length) {
            return !!this.pushM(val);
        }
        var node = new Node(val);
        var prevNode = this.getM(index - 1);

        node.next = prevNode.next;
        node.prev = prevNode;
        prevNode.next.prev = node;
        prevNode.next = node;

        this.length++;
        return true;
    }

    removeM(index) {
        if(index < 0 || index >= this.length){
            return false;
        } else if(index === 0) {
            return !!this.shiftM();
        } else if(index + 1 === this.length) {
            return !!this.popM();
        }

        var node = this.getM(index);
        node.prev.next = node.next;
        node.next.prev = node.prev;
        node.next = null;
        node.prev = null;

        this.length--;
        return node;
    }

    reverseM(){
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        for(var i = 0; i < this.length; i++){
          next = node.next;
          node.next = prev;
          node.prev = next;
          prev = node;
          node = next;
        }
        return this;
    }

    push(val){
        var newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    } 
    pop(){
        if(!this.head) return undefined;
        var poppedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }
    shift(){
        if(this.length === 0) return undefined;
        var oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    unshift(val){
        var newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        var count, current;
        if(index <= this.length/2){
            count = 0;
            current = this.head;
            while(count !== index){
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while(count !== index){
                current = current.prev;
                count--;
            }
        }
        return current;
    }
    set(index, val){
        var foundNode = this.get(index);
        if(foundNode != null){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);

        var newNode = new Node(val);
        var beforeNode = this.get(index-1);
        var afterNode = beforeNode.next;
        
        beforeNode.next = newNode, newNode.prev = beforeNode;
        newNode.next = afterNode, afterNode.prev = newNode;
        this.length++;
        return true;
    }
    remove(index){
        if(index < 0 || index >= this.length) return false;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();

        var removedNode = this.get(index);
        var beforeNode = removedNode.prev;
        var afterNode = removedNode.next;
        
        beforeNode.next = afterNode
        afterNode.prev = beforeNode;
        removedNode.next = null;
        removedNode.prev = null;
        
        this.length--
        return removedNode;
    }
}

var list = new DoublyLinkedList();
list.pushM("cero");
list.pushM("uno");
list.pushM("dos");
list.pushM("tres");
//list.push("Harry")
//list.push("Ron")
//list.push("Hermione")
