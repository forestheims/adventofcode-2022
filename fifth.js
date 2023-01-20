const stacks = {};
const input = require('./input5.js');

// const stackstxt = `
//         [M]     [B]             [N]
// [T]     [H]     [V] [Q]         [H]
// [Q]     [N]     [H] [W] [T]     [Q]
// [V]     [P] [F] [Q] [P] [C]     [R]
// [C]     [D] [T] [N] [N] [L] [S] [J]
// [D] [V] [W] [R] [M] [G] [R] [N] [D]
// [S] [F] [Q] [Q] [F] [F] [F] [Z] [S]
// [N] [M] [F] [D] [R] [C] [W] [T] [M]
//  1   2   3   4   5   6   7   8   9 `

let moves = input.split('\n');

moves = moves.map((each) => {
    const newArr = each.split(' ')
    const move = +newArr[1]
    const from = +newArr[3]
    const to = +newArr[5];
    return { from, to, move }
})

// console.log('moves', moves)

class StackNode {
    constructor(letter) {
        this.value = letter;
        this.next = null;
    }

    add(letter) {
        const newNode = new StackNode(letter)
        this.next ? void this.next.add(letter) : this.next = newNode;
    }

    remove() {
        const nextNode = this.next.next;
        let last;
        if (!nextNode) {
            last = this.next
            this.next = null;
            return last
        } else {
            return this.next.remove();
        }
    }

    add9000(array) {
        for (let i = 0; i < array.length; i++) {
            const newNode = new StackNode(array[i])
            this.next ? void this.next.add(array[i]) : this.next = newNode;
        }
    }

    remove9000(moves) {
        let tempArr = []
        for (let i = 1; i <= moves; i++) {
            const removed = this.remove();
            tempArr.unshift(removed.value);
        }
        return tempArr;
    }

    top() {
        return this.next ? this.next.top() : this.value;
    }
}


stacks._1 = new StackNode('1')
stacks._1.add('N')
stacks._1.add('S')
stacks._1.add('D')
stacks._1.add('C')
stacks._1.add('V')
stacks._1.add('Q')
stacks._1.add('T')
stacks._2 = new StackNode('2')
stacks._2.add('M')
stacks._2.add('F')
stacks._2.add('V')
stacks._3 = new StackNode('3')
stacks._3.add('F')
stacks._3.add('Q')
stacks._3.add('W')
stacks._3.add('D')
stacks._3.add('P')
stacks._3.add('N')
stacks._3.add('H')
stacks._3.add('M')
stacks._4 = new StackNode('4')
stacks._4.add('D')
stacks._4.add('Q')
stacks._4.add('R')
stacks._4.add('T')
stacks._4.add('F')
stacks._5 = new StackNode('5')
stacks._5.add('R')
stacks._5.add('F')
stacks._5.add('M')
stacks._5.add('N')
stacks._5.add('Q')
stacks._5.add('H')
stacks._5.add('V')
stacks._5.add('B')
stacks._6 = new StackNode('6')
stacks._6.add('C')
stacks._6.add('F')
stacks._6.add('G')
stacks._6.add('N')
stacks._6.add('P')
stacks._6.add('W')
stacks._6.add('Q')
stacks._7 = new StackNode('7')
stacks._7.add('W')
stacks._7.add('F')
stacks._7.add('R')
stacks._7.add('L')
stacks._7.add('C')
stacks._7.add('T')
stacks._8 = new StackNode('8')
stacks._8.add('T')
stacks._8.add('Z')
stacks._8.add('N')
stacks._8.add('S')
stacks._9 = new StackNode('9')
stacks._9.add('M')
stacks._9.add('S')
stacks._9.add('D')
stacks._9.add('J')
stacks._9.add('R')
stacks._9.add('Q')
stacks._9.add('H')
stacks._9.add('N')


// moves.forEach((each) => {
//     const { from, to, move } = each;
//     for (let i = 1; i <= move; i++) {
//         const removed = stacks[`_${from}`].remove();
//         console.log('removed', removed, 'to', to, 'from', from)
//         stacks[`_${to}`].add(removed.value);
//     }
// })

// moves.forEach((each) => {
//     const { from, to, move } = each;
//         const removed = stacks[`_${from}`].remove9000(move);
//         console.log('removed', removed, 'to', to, 'from', from)
//         stacks[`_${to}`].add9000(removed);
// })

console.log('stacks', stacks._1.top() + stacks._2.top() + stacks._3.top() + stacks._4.top() + stacks._5.top() + stacks._6.top() + stacks._7.top() + stacks._8.top() + stacks._9.top())