const input = require("./input1.js");

let elves = input.split('\n\n');

elves = elves.map((elf) => elf.split('\n').reduce(function(a, b){
    return +a + +b;
}, 0));

class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }

    addNode(value) {
        const newNode = new BinaryTreeNode(value);
        if(this.value > value) {
            if(!this.left) this.left = newNode;
            else this.left.addNode(value);
        } else if (this.value < value) {
            if(!this.right) this.right = newNode;
            else this.right.addNode(value);
        }
    }

    getHighest() {
        let last;
        if (this.right) {
            last = this.right.getHighest();
        } else {
            last = this;
        }
        return last;
    }

    getTopThree() {
        let total;
        if (this.right) {
            total = this.right.getTopThree();
        } else {
            total = this.value + this.left.value + this.left.right.value;
        }
        return total;
    }
}

function treeOfElves(arrayOfElves) {
let topOfTree = new BinaryTreeNode(arrayOfElves[0]);
for(i=1; i <= arrayOfElves.length - 1; i++) {
    topOfTree.addNode(arrayOfElves[i]);
}
return topOfTree;
}

const elfTree = treeOfElves(elves);

// console.log('elfTree', elfTree)

console.log('highest value node in the elfTree:', elfTree.getHighest())

console.log('highest three total elf calories:', elfTree.getTopThree())
