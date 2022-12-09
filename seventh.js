const input = require('./input7.js');


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
                    if (this.value !== '/') this.parent.addToParents(+each[0]);
            }
            }
        })
    }

    smallFolders() {
        let sumArr = [];
        if (this.size <= 100000) {
            sumArr.push(this);
        }
        let more = Object.keys(this.subDirs).map(each => {
            return this.subDirs[each].smallFolders();
        })
        sumArr.push(more);
        // console.log('more', more);
        return sumArr.flat(9);
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
                // console.log('pointer', pointer)
            } else if (!pointer[each[2]]) {
                const newDir = new Dir(each[2], pointer)
                pointer.subDirs[each[2]] = newDir;
                pointer = newDir;
            }
            lsArr = [];
        } else if (each[1] === 'ls') {
            let lsIndex = index + 1;
                do {
                    // console.log('lsIndex', lsIndex)
                    lsArr.push(self[lsIndex]);
                    lsIndex++;
                } while (self[lsIndex + 1] && self[lsIndex + 1][0] !== '$' && self[lsIndex + 1][0] !== 'cd' && self[lsIndex + 1][0] !== 'ls');
            pointer.ls(lsArr);
            lsArr = [];
        }
    } 
})

// console.log('root', root)

// console.log('root.smallFolders()', root.smallFolders())

let answer = 0;
root.smallFolders().forEach((each) => {
    answer = answer + each.size;
})
console.log('ans', answer)

// 1991257 (too high), 