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

    // no duplicates
    insert(val){
        var node = new Node(val);
        if(!this.root){
            this.root = node;
            return this;
        }

        var current = this.root;
        var done = 0;
        while(!done){
            if(current.value === val){
                return undefined;
            }
            if(val > current.value){
                if(current.right !== null){
                    current = current.right;
                }else{
                    current.right = node;
                    done = 1; 
                }
            }else{
                if(current.left !== null){
                    current = current.left;
                }else{
                    current.left = node;
                    done = 1; 
                }
            }
        }
        return this;
    }

    contains(val){
        if(!this.root){
            return false;
        }

        var current = this.root;
        while(current && current.value != val){
            if(val > current.value){
                current = current.right;
            }else{
                current = current.left;
            }
        }

        return current ? true : false;
    }

    find(val){
        if(!this.root){
            return undefined;
        }

        var current = this.root;
        while(current && current.value != val){
            if(val > current.value){
                current = current.right;
            }else{
                current = current.left;
            }
        }

        return current ? current : undefined;
    }
}

var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);

var pine = new BinarySearchTree();