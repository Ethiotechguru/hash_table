class GraphT{
    constructor(){
        this.adjacencyList = {}
        this.visited = [];
    }
    addVertex(v){
        if(!this.adjacencyList[v]){
            this.adjacencyList[v] = [];
        }
    }
    addEdges(v1,v2){
        this.addVertex(v1);
        this.addVertex(v2);
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(v1,v2){
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v=>v!==v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v=>v!==v1);
    }
    removeVertex(v){
        if(!this.adjacencyList[v]){
            return;
        }
        while(this.adjacencyList[v].length){
            let val = this.adjacencyList[v][0];
            this.removeEdge(v, val)
        }
        delete this.adjacencyList[v];
    }
    DFS_recursive(v){
        let result = [];
        let visited = {}

        if(!this.adjacencyList[v]) return null;

        const adjacencyList = this.adjacencyList;

        (function dfsHelper(x){
            if(!x) return null;
            result.push(x);
            visited[x] = true;
            adjacencyList[x].forEach(neighbor=>{
                if(!visited[neighbor]){
                    return dfsHelper(neighbor)
                }
            })
        }(v))
        console.log(result);
        return result;
    }
    DFS_iterative(start) {
        let result = [];
        let visited = {};
        let stack = [start];
        visited[start] = true;
        let vertex;
        while (stack.length) {
            vertex = stack.pop();
            result.push(vertex);
            this.adjacencyList[vertex].forEach(vert => {
                if (!visited[vert]) {
                    visited[vert] = true;
                    stack.push(vert);
                }
            })
        }
        console.log(result);
        return result;
    }
    BFS_iterative(start) {
        let result = [];
        let visited = {};
        let queue = [start];

        visited[start] = true;
        while (queue.length) {
            let vertex = queue.shift();
            result.push(vertex)
            this.adjacencyList[vertex].forEach(ver => {
                if (!visited[ver]) {
                    queue.push(ver);
                    visited[ver] = true;
                }
            })
        }
        console.log(result)
        return result;
    }
    BFS_recursive(start) {
        let result = [];
        let visited = {};
        let queue = [];
        let adjacencyList = this.adjacencyList;
        (function helperFunc(x) {
            if (!x) return null;
            result.push(x);
            visited[x] = true;

            adjacencyList[x].forEach(ver => {
                if (!visited[ver]) {
                    queue.push(ver)
                }
            })
            while (queue.length) {
                let current = queue.shift();
                if (!visited[current]) {
                    return helperFunc(current);
                }
            }
        }(start))
        console.log(result)
        return result;
    }
}
let g = new GraphT();
g.addEdges('A', 'B');
g.addEdges('A', 'C');
g.addEdges('B', 'D');
g.addEdges('C', 'E');
g.addEdges('D', 'E');
g.addEdges('D', 'F');
g.addEdges('E', 'F');
//g.DFS_recursive('A')['A', 'B', 'D', 'E', 'C', 'F']
// g.DFS_iterative('A')['A', 'C', 'E', 'F', 'D', 'B']
// g.BFS_iterative('A')['A', 'B', 'C', 'D', 'E', 'F']
// g.BFS_recursive('A')['A', 'B', 'C', 'D', 'E', 'F']
// g.removeEdge('D', 'E')
// g.removeVertex('D')
// console.log(g.adjacencyList);
