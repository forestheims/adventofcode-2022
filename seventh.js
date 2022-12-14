const input = require('./input7.js');


let newInput = input.split('\n');
newInput = newInput.map(t => t.split(' '));


class File {
    constructor(name, size) {
        this.name = name;
        this.size = +size;
    }
}

class Dir {
    constructor(name, parent) {
        this.value = name;
        this.parent = parent;
        this.subDirs = {};
        this.files = {};
        this.size = 0;
    }

    addDir(name, par) {
        const subDir = new Dir(name + '/', par);
        par.subDirs[name + '/'] = subDir;
    }

    addFile(name, size) {
        const file = new File(name, +size);
        this.files[name] = file;
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
    
    middleFolders() {
        let sumArr = [];

        let keys = Object.keys(this.subDirs);
        keys.forEach(each => {
            const obj = this.subDirs[each];
            if (obj.size <= 560000 && obj.size >= 528671) {
                sumArr.push(obj);
            };
            obj.middleFolders().forEach(eachSub => {
                sumArr.push(eachSub);
            });
        })
        return sumArr;
    }
}

let lsMode = false;
const root = new Dir('/', null);
let pwd = root;
let path = ['/']

newInput.forEach(command => {
    let inp = command[0];
    let ins = command[1];
    if (inp === '$') {
        lsMode = false;
        if (ins === 'ls') {
            lsMode = true;
        } else if (ins === 'cd') {
            if (command[2] === '/') {
                pwd = root;
                path = ['/'];
            } else if (command[2] === '..') {
                pwd = pwd.parent;
                path.pop();
            } else {
                pwd = pwd.subDirs[command[2] + '/'];
                path.push(command[2] + '/');
            }
        }
    } else if (lsMode && inp === 'dir') {
        pwd.addDir(ins, pwd);
    } else if (lsMode) {
        pwd.addFile(ins, +inp)
        if (pwd.value === '/') {
            pwd.size = pwd.size + +inp;
        } else {
            pwd.size += +inp;
            let parent = pwd.parent;
            while(parent !== null) {
                if (parent !== null) {
                    parent.size += +inp;
                    parent = parent.parent;
                }
            }
        }
    }
})

let result = 0;
const resArr = root.smallFolders();
resArr.forEach(repo => result += repo.size);
// console.log('result', result);

// 1991257 (too high), 1367870 (correct)

// console.log('root', root)

const max = 70000000;
const used = root.size;
const free = max - used;
const update = 30000000;
const moreNeeded = update - free;
console.log('used', used, 'free', free, 'more', moreNeeded)

console.log('root', root.middleFolders()[0].size)

// 549173