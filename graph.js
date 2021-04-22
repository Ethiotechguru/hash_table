class Graph{//undirected graph implementation only
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if (!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        }
    }
    addEdges(ver1, ver2){
        if (!this.adjacencyList[ver1]){
            this.addVertex(ver1);
        }
        if (!this.adjacencyList[ver2]) {
            this.addVertex(ver2);
        }
        if (!this.adjacencyList[ver1].includes(ver2)) this.adjacencyList[ver1].push(ver2);
        if (!this.adjacencyList[ver2].includes(ver1)) this.adjacencyList[ver2].push(ver1)
        
    }
    removeEdge(ver1, ver2){
        let idxVer2 = this.adjacencyList[ver1].indexOf(ver2);
        let idxVer1 = this.adjacencyList[ver2].indexOf(ver1);
        this.adjacencyList[ver2].splice(idxVer1, 1)
        this.adjacencyList[ver1].splice(idxVer2, 1)
    }
    removeVertex(ver){
        for(let i = 0; i<this.adjacencyList[ver].length; i++){
            let value = this.adjacencyList[ver].splice(i, 1);
            this.removeEdge(ver, value)
        }
    }
}

let list = new Graph();
list.addVertex('Tokyo');
list.addEdges('Tokyo', 'New York')
list.addEdges('Tokyo', 'California')
// list.addVertex('New York')
// list.addEdges('New York', 'Tokyo');
list.addEdges('New York', 'Addis Ababa')
list.addEdges('Addis Ababa', 'DC');
list.addEdges('DC', 'Addis Ababa');
list.addEdges('Paris', 'Addis Ababa');
list.addEdges('Addis Ababa', 'Paris')
list.addEdges('Cap Town', 'Addis Ababa');
list.removeEdge('New York', 'Addis Ababa');
list.removeVertex('Tokyo')
console.log(list.adjacencyList);