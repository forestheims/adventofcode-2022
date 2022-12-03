const input = require('./input3.js');
const priorLibrary = require('./library3.js');

const rucksacks = input.split('\n');

const rucksacksSplit = rucksacks.map((string) => {
    let item = '';
    let first = string.split('');
    first.length = (string.length / 2);
    first = first.join('')
    let second = string.split(first)[1];
    first = first.split('');
    second = second.split('');
    let library = {};
    for (let letter of first) {
        library[letter] = letter;
    }
    for (let letter of second) {
        if(library[letter]) item = letter;
    }
    first = first.join('')
    second = second.join('')
    return [first, second, item]
});

// console.log('rucksacksSplit', rucksacksSplit);

const priorities = rucksacksSplit.map((array) => {
    const priority = array[2];
    // const priorityValue = priority.charCodeAt();
    const priorityValue = priorLibrary[priority];
    return [priority, priorityValue];
})

// console.log('priorities', priorities);

let totalPrior = 0;

priorities.forEach((ind) => {
    totalPrior = totalPrior + ind[1];
})

console.log('totalPrior', totalPrior);