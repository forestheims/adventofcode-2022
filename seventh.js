const input = require('./input7.js');
const util = require('util');


let newInput = input.split('\n');
newInput = newInput.map(t => t.split(' '));

// console.log('input', newInput);

class File {
    constructor([size, name]) {
        this.name = name;
        this.size = +size;
    }
}

class Dir {
    constructor(string, parent) {
        this.value = string;
        this.parent = parent;
        this.subDirs = {};
        this.files = {};
        this.size = 0;
    }

    ls(array) {
        array.forEach((each) => {
            if(each[0] === 'dir') {
                if (!this.subDirs[each[1]]) {
                    const newDir = new Dir(each[1], this);
                    this.subDirs[each[1]] = newDir;
                }
            } else {
                if (!this.files[each[1]]) {
                    const newFile = new File(each);
                    this.files[each[1]] = newFile;
                    this.size = this.size + +each[0];
                    if (this.value !== '/') {
                        this.parent.addToParents(+each[0]);
                    }
            }
            }
        })
    }

    smallFolders() {
        let sumArr = [];

        let keys = Object.keys(this.subDirs);
        keys.forEach(each => {
            const obj = this.subDirs[each];
            if (obj.size <= 100000) {
                sumArr.push(obj);
            };
            obj.smallFolders().forEach(eachSub => {
                sumArr.push(eachSub);
            });
        })

        return sumArr;
    }

    addToParents(size) {
        this.size = this.size + size;
        if (this.parent !== 'root') {
            this.parent.addToParents(size);
        }
    }
}
const root = new Dir('/', 'root')
let pointer = root;
let lsArr = [];

newInput.forEach((each, index, self) => {
    if (each[0] === '$') {
        if (each[1] === 'cd') {
            if (each[2] === '..') {
                pointer = pointer.parent
            } else if (each[2] === '/') {
                pointer = root;
            } else if (!pointer.subDirs[each[2]]) {
                // if folder doesn't exist, create it
                const newDir = new Dir(each[2], pointer)
                pointer.subDirs[each[2]] = newDir;
                pointer = newDir;
            } else {
                // folder exists, change pointer
                pointer = pointer.subDirs[each[2]]
            }
            lsArr = [];
        } else if (each[1] === 'ls') {
            let lsIndex = index + 1;
                do {
                    lsArr.push(self[lsIndex]);
                    lsIndex++;
                } while (self[lsIndex + 1] && self[lsIndex + 1][0] !== '$' && self[lsIndex + 1][0] !== 'cd' && self[lsIndex + 1][0] !== 'ls');
            pointer.ls(lsArr);
            lsArr = [];
        }
    } 
})

// console.log('root', util.inspect(root, {showHidden: false, depth: null, colors: true}))

console.log('root.smallFolders()', root.smallFolders().map(each => each.value)) 

let answer = 0;
root.smallFolders().forEach((each) => {
    // console.log('each', each)
    answer = answer + each.size;
})
console.log('ans', answer)

// 1991257 (too high), 