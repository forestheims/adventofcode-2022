const input = require('./input8.js');

let arr = input.split('\n');
arr = arr.map(r => {
    let innerArr = r.split('');
    innerArr = innerArr.map(s => +s);
    return innerArr;
});

// console.log('arr', arr[0])

// 99 x 99





const aRealArray = arr.map((r,i,b) => r.map((s,j,a) => {
        if (i == 0) return true;
        else if (i == 98) return true;
        else if (j == 0) return true;
        else if (j == 98) return true;
        else {
            let cutoff = 0;
            for (let h = 0; h<=j; h++) {
                // if (cutoff < a[h]) cutoff = a[h];
                if (s > cutoff) {
                    cutoff = s
                    return [s, a[h]];
                } else return false;
            }
        }
        return false;
    })
)

console.log('aRealArray', aRealArray)