class Graph {
    
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    };

    adjacentList: {};
    numberOfNodes: number;
    
    addVertex(node: number) {
        this.adjacentList[node] = [];
        this.numberOfNodes++;
    };

    addEdge(node1: number, node2: number) {
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    };
};