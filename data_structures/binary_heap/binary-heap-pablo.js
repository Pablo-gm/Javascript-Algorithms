class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }

    insert(val){
        this.values.push(val);
        var index = this.values.length - 1;
        var parentIndex = Math.floor((index - 1)/2);
        // index > 0
        while(parentIndex !== index && this.values[index] > this.values[parentIndex]){
            [this.values[parentIndex], this.values[index]] = [this.values[index], this.values[parentIndex]];
            index = parentIndex;
            parentIndex = Math.floor((index - 1)/2);
        }
        return this.values;
    }

    // remove root (larger value) and modify heap
    extract(){
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
            var gt = this.values[left] > this.values[right] ?  left : right;
            gt = this.values[gt] > this.values[index] ? gt : 0;

            while(gt > 0){
                [this.values[index], this.values[gt]] = [this.values[gt], this.values[index]];
                index = gt;
                left = 2*index + 1;
                left = left <= total ? left : 0;
                right = 2*index + 2;
                right = right <= total ? right : 0;
                gt = this.values[left] > this.values[right] ?  left : right;
                gt = this.values[gt] > this.values[index] ? gt : 0;
            }
        }
        return rootNode;
    }

    // missing from instructor
    extractMax(){
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }

        return max;
    }

    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2*idx + 1;
            let rightChildIdx = 2*idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild > element){
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)){
                    swap = rightChildIdx;
                }
            }

            if(swap === null){
                break;
            }
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;

        }
    }

}

var ar = [0,1,2];

var mbh = new MaxBinaryHeap();
mbh.insert(41);
mbh.insert(39);
mbh.insert(33);
mbh.insert(18);
mbh.insert(27);
mbh.insert(12);
mbh.insert(55);