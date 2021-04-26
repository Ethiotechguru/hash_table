class HashTable {
    //hash table Time complexity average and best case
    //insertion O(1)
    //accessing O(1);
    //deletion O(1)
    constructor(size = 54) {
        this.keyMap = new Array(size)
    }
    _hash(key) {
        let total = 0;
        let pr = 31
        for (let char of key) {
            char = char.toLowerCase();
            let value = char.charCodeAt(0) - 96;
            total = (total * pr + value) % this.keyMap.length;
        }
        console.log(total);
        return total;
    }
    set(key, val) {
        let index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, val])
    }
    get(key) {
        key = key.toLowerCase();
        let index = this._hash(key)
        for (let i = 0; i < this.keyMap[index].length; i++) {
            let name = this.keyMap[index][i][0].toLowerCase();
            if (name === key) {
                console.log(this.keyMap[index][i][1])
                return this.keyMap[index][i][1]
            }
        }
    }
    getAllVal() {
        let valArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    valArr.push(this.keyMap[i][j][1])
                }
            }
        }
        console.log(Array.from(new Set(valArr)));
        return Array.from(new Set(valArr));
    }
    getAllKeys() {
        let keyArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    keyArr.push(this.keyMap[i][j][0])
                }
            }
        }
        console.log(keyArr);
        return Array.from(new Set(keyArr));
    }
}
let ht = new HashTable(10);
ht.set('Mike', 'teacher')
ht.set('ruth', 'coworker');
ht.set('tom', 'teacher')
ht.set('Ad', 'room mate')
ht.set('Alex', 'friend');
ht.set('tsion', 'nephew');

console.log(ht.keyMap);
// console.log(ht.getAllKeys());

