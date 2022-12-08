const input = require('./input4');

let pairs = input.split('\n');

pairs = pairs.map((each) => {
    let pair = each.split(',');
    pair = pair.map((range) => {
        let value = range.split('-');
        value = value.map((num) => +num);
        return value;
    });
    return pair;
});

let count = 0;

pairs.forEach((each) => {
    [[low1, high1],[low2, high2]] = each;
    if(low1 === low2 && high1 === high2) {
        count++;
    } else if (low1 <= low2 && high1 >= high2) {
        count++;
    } else if (low2 <= low1 && high2 >= high1) {
        count++;
    } else if (low1 < low2 && low2 <= high1) {
        count++;
    } else if (low1 > low2 && low1 <= high2) {
        count++;
    }
})

// pairs.forEach((each) => {
//     [[low1, high1],[low2, high2]] = each;
//         if(low1 === low2 && high1 === high2) {
//         count++;
//     } else if (low1 <= low2 && high1 >= high2) {
//         count++;
// })

console.log('pairs', count);

// 483 is the correct answer

// let contains = [];

// pairs.forEach((each) => {
//     let first = each[0];
//     let second = each[1];
//     if (first[0] >= second[0]) {
//         // first elf's lower range is higher than second elf's lower range
//         if (first[1] <= second[1]) {
//             // console.log('first, second', first, second)
//             contains.push(each);
//         }
//         // } else if (second[0] >= first[0] && second[1] <= first[1]) {
//         //     // console.log('first, second', first, second)
//         //     contains.push(each);
//         // }
//     } else if (second[0] >= first[0] && first != second) {
//         if (second[1] <= first[1]) {
//             // console.log('first, second', first, second)
//             contains.push(each);
//         }
//     }

// });

// const morePairs = [[[1,9],[1,9]],[[1,1],[1,9]],[[1,9],[9,9]],[[1,1],[1,2]]]

// morePairs.forEach((each) => {
//     let first = each[0];
//     let second = each[1];
//     if (first[0] >= second[0]) {
//         // first elf's lower range is higher than second elf's lower range
//         if (first[1] <= second[1]) {
//             console.log('first, second', first, second)
//             contains.push(each);
//         }
//         // } else if (second[0] >= first[0] && second[1] <= first[1]) {
//         //     // console.log('first, second', first, second)
//         //     contains.push(each);
//         // }
//     } else if (second[0] >= first[0] && first != second) {
//         if (second[1] <= first[1]) {
//             console.log('first, second', first, second)
//             contains.push(each);
//         }
//     }

// });

// pairs.forEach((each) => {
//     // contains.push(each);
//     if(each[0][1] <= each[1][1]) {
//         if (each[0][0] >= each[1][0]) {
//             console.log('right', each[0][0] >= each[1][0],each[0][0], each[1][0]);
//             contains.push(each);
//         }
//     } else if(each[1][1] <= each[0][1]) {
//         if (each[1][0] >= each[0][0]) {
//             console.log('left', each[1], each[0]);
//             contains.push(each)
//         } else {
//             console.log('neither', each[1], each[0])
//         }
//     }
// })


// console.log('contains', contains.length);

// 5??, 404(low), 512(high), 435, ?, 443