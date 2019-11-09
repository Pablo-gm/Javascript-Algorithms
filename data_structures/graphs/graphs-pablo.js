// undirected graph ( both directions )
class Graph {
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(name){
        if(!this.adjacencyList[name]){
            this.adjacencyList[name] = [];
        }
    }

    removeVertex(name){
        var remove = this.adjacencyList[name].slice();
        remove.forEach(el => {
            this.removeEdge(name, el);
        });
        delete this.adjacencyList[name];
    }

    // simple not error proof ( if this.adjacentList[vertex1] && ..vertext2)
    addEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].splice(this.adjacencyList[vertex1].indexOf(vertex2),1);
        this.adjacencyList[vertex2].splice(this.adjacencyList[vertex2].indexOf(vertex1),1);
    }
    // depth first traversal  g.recursiveDFS("A") --> [ "A", "B", "D", "E", "C", "F" ]
    recursiveDFS(v){
        var result = [];
        var visited = {};
        var graphList = this.adjacencyList;
        function rDFS(vertex){
            if(!vertex){
                return;
            }
            result.push(vertex);
            visited[vertex] = true;
            graphList[vertex].forEach( el => {
                if(!visited[el]){
                    rDFS(el);
                }
            });
        }
        rDFS(v);
        return result;
    }

    // [ "A", "C", "E", "F", "D", "B" ] I used pseudocode, instructor instructions are unaccurate. Same final result.
    iterativeDFS(v){
        var result = [];
        var visited = {};
        var stack = [];
        stack.push(v);

        while(stack.length){
            var vertex = stack.pop();
            if(!visited[vertex]){
                result.push(vertex);
                visited[vertex] = true;
                this.adjacencyList[vertex].forEach( el => {
                    stack.push(el);
                });
            }
        }
        return result;
    }

    // Breadth first iterative
    iterativeBF(v){
        var result = [];
        var visited = {};
        var queue = [];
        queue.push(v);

        while(queue.length){
            var vertex = queue.shift();
            if(!visited[vertex]){
                result.push(vertex);
                visited[vertex] = true;
                this.adjacencyList[vertex].forEach( el => {
                    queue.push(el);
                });
            }
        }
        return result;
    }
}

// var graph = new Graph();
// graph.addVertex("Germany");
// graph.addVertex("France");
// graph.addVertex("UK");
// graph.addEdge("Germany", "France");
// graph.addEdge("France", "UK");

let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

// QUEUE: []
// RESULT: [A, B, C, D, E, F]