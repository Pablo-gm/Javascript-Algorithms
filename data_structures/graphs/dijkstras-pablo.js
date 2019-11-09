// no removing methods
// adjacencyList --> A = [ {node: "B", weight: 10},{ node: "C", weight: 25 }]
class WeightedGraph {
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2, weight){
        this.adjacencyList[vertex1].push({node: vertex2, weight});
        this.adjacencyList[vertex2].push({node: vertex1, weight});
    }
    dijkstra(start, end){
        var distances = {};
        var priorityQ = new PriorityQueue();
        var previous = {};
        var result = [];
        
        for (var [key, value] of Object.entries(this.adjacencyList)) {
            if(key === start){
                distances[key] = 0;
                priorityQ.enqueue(key, 0);
            }else{
                distances[key] = Infinity;
                priorityQ.enqueue(key, Infinity);
            }
            previous[key] = null;
        }
        while(priorityQ.values.length){
            var vertex = priorityQ.dequeue();
            vertex = vertex.val;
            if(vertex === end){
                console.log("distances");
                console.log(distances);
                console.log("previous");
                console.log(previous);
                while(previous[vertex]){
                    result.push(vertex);
                    vertex = previous[vertex];
                }
                result.push(start);
                break;
            }else{
                // Instructor solution is unclear, but if start took us nowhere...
                //if(distances[vertex] === Infinity) break;
                for (var adjacent of this.adjacencyList[vertex]) {
                    var newDistance = distances[vertex] + adjacent.weight;
                    if(distances[adjacent.node] > newDistance){
                        distances[adjacent.node] = newDistance;
                        previous[adjacent.node] = vertex;
                        priorityQ.enqueue(adjacent.node, newDistance);
                    }
                }

            }
        }
        return result.reverse();
    }
}

// Use binary heap for better performance
class PriorityQueue {
    constructor(){
      this.values = [];
    }
    enqueue(val, priority) {
      this.values.push({val, priority});
      this.sort();
    };
    dequeue() {
      return this.values.shift();
    };
    sort() {
      this.values.sort((a, b) => a.priority - b.priority);
    };
}

var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);


console.log(graph.dijkstra("A", "E"));

// ["A", "C", "D", "F", "E"]
