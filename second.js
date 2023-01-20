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

let newTotal = 0;

function playScore(elf, result) {
    let play = 0;
    if(elf === 'A') {
         if (result === 'X') {
            play = play + 3;
        } else if (result === 'Z') {
            play = play + 2;
    }
    }

    if (elf === 'B') {
        if (result === 'X') {
            play = play + 1;
        } else if (result === 'Z') {
            play = play + 3;
    }
    }

    if (elf === 'C') {
        if (result === 'X') {
            play = play + 2;
        } else if (result === 'Z') {
            play = play + 1;
    }
}
    return play;
}

for (let round of rounds) {
    const [elf, result] = round.split(' ');
    if(result === 'X') {
        newTotal = newTotal + playScore(elf, result);
    }

    if (result === 'Y') {
        newTotal = newTotal + 3 + score[elf];
    }

    if (result === 'Z') {
        newTotal = newTotal + 6 + playScore(elf, result);
}
}

console.log('newTotal', newTotal)
