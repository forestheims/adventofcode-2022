const input = require('./input8.js');

let arr = input.split('\n');
arr = arr.map(r => {
    let innerArr = r.split('');
    innerArr = innerArr.map(s => +s);
    return innerArr;
});

// console.log('arr', arr[0])

// 99 x 99





const aRealArray = arr.map((r,i) => r.map((s,j) => {
        if (i == 0) return true;
        else if (i == 98) return true;
        else if (j == 0) return true;
        else if (j == 98) return true;
        else {
            // logic
        }
        return false;
    })
)

console.log('aRealArray', aRealArray)