const input = require('./input6.js');

// console.log('input', input);

let newInput = input.split('');

let four = [];

newInput.forEach((each, index) => {
    four.unshift(each);
    // console.log('index', index);
    four.unique = true;
    
    if (four.length >= 14) {
        four.length = 14;
        four.booger = index;
    }

    let obj = {};

    four.forEach((eachOfFour) => {
        obj[eachOfFour] ? four.unique = false : obj[eachOfFour] = eachOfFour;
    })

    if(four.unique === true) {
        console.log('four', four)
    }

    // if (four.filter((item, index) => four.indexOf(item) !== index).length < 1) console.log('first', four.filter((item, index) => four.indexOf(item) !== index), index) 
})

// 1655
// 2665