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
    const move = +`${each[5]}${each[6]}`.trim()
    const from = +(each[12] + each[13]).trim();
    const to = +(each[16] + each[17] ? each[17] : '');
    return { from, to, move }
})

class StackNode {
    constructor(letter) {
        this.value = letter;
        this.next = null;
    }

    add(letter) {
        const newNode = new StackNode(letter)
        this.next ? void this.next.add(letter) : this.next = newNode;
        return newNode;
    }

    remove() {
        const last = this.next;
        this.next?.next ? void this.next.remove() : this.next = null;
        // console.log('last', last)
        return last
    }

    top() {
        return this.next ? this.next.top() : this;
    }
}

const stacks = {};

stacks._1 = new StackNode('N')
stacks._1.add('S')
stacks._1.add('D')
stacks._1.add('C')
stacks._1.add('V')
stacks._1.add('Q')
stacks._1.add('T')
stacks._2 = new StackNode('M')
stacks._2.add('F')
stacks._2.add('V')
stacks._3 = new StackNode('F')
stacks._3.add('Q')
stacks._3.add('W')
stacks._3.add('D')
stacks._3.add('P')
stacks._3.add('N')
stacks._3.add('H')
stacks._3.add('M')
stacks._4 = new StackNode('D')
stacks._4.add('Q')
stacks._4.add('R')
stacks._4.add('T')
stacks._4.add('F')
stacks._5 = new StackNode('R')
stacks._5.add('F')
stacks._5.add('M')
stacks._5.add('N')
stacks._5.add('Q')
stacks._5.add('H')
stacks._5.add('V')
stacks._5.add('B')
stacks._6 = new StackNode('C')
stacks._6.add('F')
stacks._6.add('G')
stacks._6.add('N')
stacks._6.add('P')
stacks._6.add('W')
stacks._6.add('Q')
stacks._7 = new StackNode('W')
stacks._7.add('F')
stacks._7.add('R')
stacks._7.add('L')
stacks._7.add('C')
stacks._7.add('T')
stacks._8 = new StackNode('T')
stacks._8.add('Z')
stacks._8.add('N')
stacks._8.add('S')
stacks._9 = new StackNode('M')
stacks._9.add('S')
stacks._9.add('D')
stacks._9.add('J')
stacks._9.add('R')
stacks._9.add('Q')
stacks._9.add('H')
stacks._9.add('N')

moves.forEach((each) => {
    const { from, to, move } = each;
    for (let i = 0; i <= move; i++) {
        const removed = stacks[`_${from}`].remove();
        console.log('removed', removed)
        stacks[`_${to}`].add(removed.value);
    }
})