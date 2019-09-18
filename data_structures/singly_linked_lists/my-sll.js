// To work as videos goes
// piece of data - val
//reference to next node - next
// -reverse is the last one of instructor

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    pushM(val){
        let node = new Node(val);
        if(this.length === 0){
            this.head = node;
        } else {
            this.tail.next = node;
        }
        this.tail = node;
        this.length++;
        return this;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    /* mine */
    popM() {
        if(!this.head){
            return undefined;
        }

        var n = this.head;

        if(this.length == 1){
            this.head = null;
            this.tail = this.head;
            this.length--;
            return n;
        }

        while(n.next.next != null){
            n = n.next;
        }

        n.next = null;
        this.tail = n;
        this.length--;
        return n;
    }
    
   pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;

    }

    shiftM(){
        if(!this.head) return undefined;
        var n = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = n.next;
        }
        this.length--;
        return n;

    }

    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }

    unshiftM(val) {
        var newNode = new Node(val);

        if(this.length === 0){
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    unshift(val){
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    getM(index) {
        if(index >= this.length || index < 0) {
            return null;
        }
        let n = this.head;
        let pass = 0;
        while(pass !== index) {
            n = n.next;
            pass++;
        }
        /* If you pass array or object, the value would change...
        while(index > 0) {
            n = n.next;
            index--;
        }
        */
        return n;
    }

    get(index){
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }

    setM(index, value) {
        let n = this.get(index);
        if(!n){
            return false;
        }
        n.val = value;
        return true;
    }

    set(index, val){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insertM(index, value) {
        if(index > this.length || index < 0) {
            return false;
        } else if(index === this.length) {
            this.push(value);
        } else if( index === 0) {
            this.unshift(value);
        } else {
            var newNode = new Node(value);
            var prevNode = this.get(index - 1);
            newNode.next = prevNode.next;
            prevNode.next = newNode;
            this.length++;
        }

        return true;
    }

    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);
        
        var newNode = new Node(val);
        var prev = this.get(index - 1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    removetM(index, value) {
        if(index >= this.length || index < 0) {
            return false;
        } else if(index + 1  === this.length) {
            return this.pop();
        } else if( index === 0) {
            return this.shift();
        } else {
            var prevNode = this.get(index - 1);
            var removeNode = prevNode.next
            prevNode.next =  prevNode.next.next;
            this.length--;
            return removeNode;
        }
    }

    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        var previousNode = this.get(index - 1);
        var removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }

    reverseM() {
        if(this.length < 2){
            return;
        }

        var node;
        node = this.head;
        this.head = this.tail;
        this.tail = node;
        var nextNode = node.next;
        var prevNode = null;

        while(nextNode != null) {
            node.next = prevNode;
            prevNode = node;
            node = nextNode;
            nextNode = node.next;
        }
        node.next = prevNode;
    }

    reverse(){
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        for(var i = 0; i < this.length; i++){
          next = node.next;
          node.next = prev;
          prev = node;
          node = next;
        }
        return this;
      }
      print(){
          var arr = [];
          var current = this.head
          while(current){
              arr.push(current.val)
              current = current.next
          }
          console.log(arr);
      }
}

var list = new SinglyLinkedList();

list.push("cero");
list.push("uno");
list.push("dos");
list.push("tres");
