// Implemenation of a BST inserting nodes as well as searching for a node within the tree.
class BSTNode {
    value: number;
    left: null | BSTNode;
    right: null | BSTNode;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
     }
}

class BST {

    root: BSTNode;

    constructor(value: number) {
        this.root = new BSTNode(value);
    }

    insert(value: number) {
        let currNode = this.root;

        // IF THE TREE IS EMPTY MAKE THE CURRENT VALUE TO ROOT NODE.
        if (currNode === null) this.root = new BSTNode(value);

        //NOW WE NEED TO BUBBLE DOWN TO THE CORRECT POSITION TO INSERT THE NEW NODE AT THE CORRECT POSITION
        while (currNode) {

            // CHECK IF THE VALUE IS NOW GREATER THAN OR LESS THAN THE CURR NODE VALUE AND THEN CHECK IF THE LEFT OR RIGHT IS EMPTY.
            if (value < currNode.value) {
                if (currNode.left === null) {
                    currNode.left = new BSTNode(value);
                    return;
                }
                else {
                    currNode = currNode.left;
                }
                
            } else {
                if (currNode.right === null) {
                    currNode.right = new BSTNode(value);
                    return;
                }
                else currNode = currNode.right;
            }
        }
    }

    lookup(value: number) {

        let currNode: BSTNode | null = this.root;

        if (!currNode) return false;
        
        while (currNode) {
            if (currNode.value === value) return true;
            else if (value < currNode.value) currNode = currNode.left;
            else if (value > currNode.value) currNode = currNode.right;
        }
        return false;
    }
}

const tree = new BST(9);
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
// console.log(JSON.stringify(traverseTree(tree.root)))

console.log(tree.lookup(140))

function traverseTree (node: BSTNode) {
    const tree = node;
    tree.left = node.left === null ? null : traverseTree(node.left);
    tree.right = node.right === null ? null : traverseTree(node.right);
    return tree;
}