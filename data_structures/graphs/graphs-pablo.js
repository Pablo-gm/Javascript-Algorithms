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

}

var graph = new Graph();
graph.addVertex("Germany");
graph.addVertex("France");
graph.addVertex("UK");
graph.addEdge("Germany", "France");
graph.addEdge("France", "UK");