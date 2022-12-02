const input = require('./input2.js');

const rounds = input.split('\n');

let total = 0;

const score = {
    A: 1,
    B: 2,
    C: 3,
    X: 1,
    Y: 2,
    Z: 3,
    win: 6,
    lose: 0,
    draw: 3,
}

for (let round of rounds) {
    const [elf, self] = round.split(' ');
    total = total + score[self];
    if(score[elf] === score[self]) {
        total = total + 3;
    };
    if ((score[elf] === 3 && score[self] === 1) || (score[elf] === 1 && score[self] === 2) || (score[elf] === 2 && score[self] === 3)) {
        total = total + 6;
    }
}

console.log('total', total);

