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

// console.log('totalPrior', totalPrior);

const groupsOfThree = rucksacks.map((string, index) => {
    let item = '';
    if (index % 3 === 0) {
        let first = string.split('');
        let second = rucksacks[index + 1].split('');
        let third = rucksacks[index + 2].split('');
        let firstLibrary = {};
        let secondLibrary = {};
        for (let letter of first) {
            firstLibrary[letter] = letter;
        }
        for (let letter of second) {
          secondLibrary[letter] = letter;
        }
        for (let letter of third) {
            if(firstLibrary[letter] && secondLibrary[letter]) item = letter;
        }
    }
    return item
});

// console.log('groupsOfThree', groupsOfThree);

const groupPriorities = groupsOfThree.map((item) => {
    const priorityValue = priorLibrary[item];
    return priorityValue;
})

// console.log('priorities', priorities);

let groupPrior = 0;

groupPriorities.forEach((ind) => {
    console.log('ind', ind)
    if (ind) groupPrior = groupPrior + ind;
})

console.log('groupPrior', groupPrior);