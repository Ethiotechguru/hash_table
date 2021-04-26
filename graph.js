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
        this.addVertex(ver1);
        this.addVertex(ver2)
        this.adjacencyList[ver1].push(ver2);
        this.adjacencyList[ver2].push(ver1)
        // if (!this.adjacencyList[ver1]){
        //     this.addVertex(ver1);
        // }
        // if (!this.adjacencyList[ver2]) {
        //     this.addVertex(ver2);
        // }
        // if (!this.adjacencyList[ver1].includes(ver2)) this.adjacencyList[ver1].push(ver2);
        // if (!this.adjacencyList[ver2].includes(ver1)) this.adjacencyList[ver2].push(ver1);
        
    }
    removeEdge(ver1, ver2){//removing Edges
        // let idxVer2 = this.adjacencyList[ver1].indexOf(ver2);
        // let idxVer1 = this.adjacencyList[ver2].indexOf(ver1);
        // this.adjacencyList[ver2].splice(idxVer1, 1)
        // this.adjacencyList[ver1].splice(idxVer2, 1)
        if(!(this.adjacencyList[ver1] && this.adjacencyList[ver2])){
            console.log(ver1, 'and', ver2, 'are not edges to each other');
            return;
        }
        this.adjacencyList[ver1]=this.adjacencyList[ver1].filter(v => v !== ver2);
        this.adjacencyList[ver2]=this.adjacencyList[ver2].filter(v => v !== ver1);

    }
    removeVertex(ver){
        if(!this.adjacencyList[ver]){
            console.log(ver, 'is not found!');
            return;
        }
        while(this.adjacencyList[ver].length>0){
            let value = this.adjacencyList[ver][0];
            this.removeEdge(ver, value);
        }
        delete this.adjacencyList[ver];
    }
}

let list = new Graph();
list.addEdges('Tokyo', 'Dallas');
list.addEdges('Tokyo', 'Addis Ababa');
list.addEdges('New York', 'Tokyo');
list.addEdges('California', 'Addis Ababa');
list.addEdges('Tokyo', 'California');
list.addEdges('California', 'New York');
list.removeEdge('Tokyo', 'Dallas');
list.removeVertex('Tokyo')
list.removeEdge('Addis Abab', 'Cairo');
list.removeVertex('Cairo');
console.log(list.adjacencyList);
