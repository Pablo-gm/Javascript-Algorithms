// the lower priority value is served first

class MinPriorityQueue {
    constructor(){
        this.values = [];
    }

    enqueue(val, priority){
        var newNode = new Node(val, priority);
        this.values.push(newNode);
        var index = this.values.length - 1;
        var parentIndex = Math.floor((index - 1)/2);

        while(index > 0 && this.values[index].priority < this.values[parentIndex].priority){
            [this.values[parentIndex], this.values[index]] = [this.values[index], this.values[parentIndex]];
            index = parentIndex;
            parentIndex = Math.floor((index - 1)/2);
        }
        return this.values;
    }

    // remove root (larger value) and modify heap
    dequeue(){
        var total = this.values.length - 1;

        if(total === -1){
            return null;
        }

        [this.values[0], this.values[total]] = [this.values[total], this.values[0]];
        var rootNode = this.values.pop();
        total--;
        if(total > 0){
            var index = 0;
            var left = 1 <= total ? 1 : 0;
            var right = 2 <= total ? 2 : 0;
            var gt = this.values[left].priority < this.values[right].priority ?  left : right;
            gt = this.values[gt].priority < this.values[index].priority ? gt : 0;
    
            while(gt > 0){
                [this.values[index], this.values[gt]] = [this.values[gt], this.values[index]];
                index = gt;
                left = 2*index + 1;
                left = left <= total ? left : 0;
                right = 2*index + 2;
                right = right <= total ? right : 0;
                gt = this.values[left].priority < this.values[right].priority ?  left : right;
                gt = this.values[gt].priority < this.values[index].priority ? gt : 0;
            }
        }

        return rootNode;
    }

}

class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}
var ar = [0,1,2];

var mpq= new MinPriorityQueue();
mpq.enqueue("common cold",5)
mpq.enqueue("gunshot wound", 1)
mpq.enqueue("high fever",4)
mpq.enqueue("broken arm",2)
mpq.enqueue("glass in foot",3)