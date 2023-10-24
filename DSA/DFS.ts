// Depth first search
// O(n) - Uses less mem than BFS and great for finding if a path exists, however it can get slow w/ time

// PROS:
// - Uses less mem than BFS.
// - Finding if a path exists.
// - If a tree is very wide.
// - If solutions are frequent but located deep in the tree.
// - Determining whether a path exists between two nodes.

// CONS:
// - Can get slow with time.

// There are 3 ways to traverse a tree with DFS in order, post order, and pre order

//      9
//   4    20
// 1  6 15  170

function DFSInOrder(node, list) {
    if (node.left) DFSInOrder(node.left, list)
    list.push(node.value)
    if(node.right) DFSInOrder(node.right, list)

    return list;
}

function DFSPreOrder(node, list) {
    list.push(node.value);
    if (node.left) DFSPreOrder(node.left, list);
    if (node.right) DFSPreOrder(node.right, list);
    return list;
}

function DFSPostOrder(node, list) {
    if (node.left) DFSPreOrder(node.left, list);
    if (node.right) DFSPreOrder(node.right, list);
    list.push(node.value);
    return list;
}