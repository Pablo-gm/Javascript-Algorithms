class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
    find(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
    contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }

    //            10
    //       6           15
    //    3     8            20

    // look for sibling before child nodes --> [10, 6, 15 ,3, 8, 20]
    breadthFrist(){
        // shift it's costly, array for didactic purposes 
        var queue = [];
        var values = [];
        var current;

        if(this.root){
            queue.push(this.root);
            while(queue.length){
                current = queue.shift();
                if(current.left) queue.push(current.left);
                if(current.right) queue.push(current.right);
                values.push(current.value);              
            }
        }

        return values;
    }
    // depth first methods

    // Pre order --> [10,6,3,8,15,20]
    DFPreOrder(){
        var values = [];
        var rootNode = this.root;
        
        function recursivePO(node){
            values.push(node.value);
            if(node.left) recursivePO(node.left);
            if(node.right) recursivePO(node.right);
            return
        }

        if(rootNode){
            recursivePO(rootNode);
        }
        return values;
    }

    // Pos order --> [3,8,6,20,15,10]
    DFPostOrder(){
        var values = [];
        var rootNode = this.root;
        
        function recursivePost(node){
            if(node.left) recursivePost(node.left);
            if(node.right) recursivePost(node.right);
            values.push(node.value);
            return
        }

        if(rootNode){
            recursivePost(rootNode);
        }
        return values; 
    }

    // In order --> [3,6,8,10,15,20] , left "me" right
    DFInOrder(){
        var values = [];
        var rootNode = this.root;
        
        function recursiveIO(node){
            if(node.left) recursiveIO(node.left);
            values.push(node.value);
            if(node.right) recursiveIO(node.right);
            return
        }

        if(rootNode){
            recursiveIO(rootNode);
        }
        return values; 
    }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);