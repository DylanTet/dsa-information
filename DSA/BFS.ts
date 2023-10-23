// Breadth First Search
// O(n)

// PROS:
// - Great for finding the shortest path. 
// - If node is likely high up in the tree or close to the root node.
// - If the tree is deep and solutions are rare.

// CONS:
// - Takes up more memory due to needing to maintain pointers.

function BFS(root) {
    
    // List that we push to and will be returning after we iterate through the tree.
    let returnList = [];

    // Utilize a queue to keep track of the children for each node.
    // Can get large for keeping track of all the children within a large tree.
    let queue = [];
    let currNode = root; 
    queue.push(root as never);

    // Now we need to cycle through the tree and push into the queue going from left to right
    while (queue.length > 0) {

        // Remove the top element, push it onto the list and check if it has children going from left to right.
        currNode = queue.shift();
        returnList.push(currNode as never);

        // If it does have children, add it to the queue to then be checked and added to the return list 
        if (currNode.left) queue.push(currNode.left as never);
        if (currNode.right) queue.push(currNode.right as never);
    }

    return returnList;
}

function BFSRecursive(list, queue) {

    if (!queue.length) return list;

    let currNode = queue.shift();
    list.push(currNode);

    if (currNode.left) queue.push(currNode.left);
    if (currNode.right) queue.push(currNode.right);

    return BFSRecursive(list, queue);
}

BFSRecursive([], [this.root]);