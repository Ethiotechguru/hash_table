class Heap {
    constructor() {
        this.heap = [];
    }
    add(val) {
        this.heap.push(val);
        let cIndex = this.heap.length - 1;
        while (cIndex > 0) {
            let pIndex = Math.floor((cIndex - 1) / 2);
            if (this.heap[cIndex] <= this.heap[pIndex]) break;
            let temp = this.heap[pIndex];
            this.heap[pIndex] = this.heap[cIndex];
            this.heap[cIndex] = temp;
            cIndex = pIndex;
        }
        console.log(this.heap);
        return this.heap;
    }
    removeMax() {
        let end = this.heap.pop();
        this.heap[0] = end;
        let pIndex = 0;
        while (this.heap.length > (pIndex*2)+1) {
            let left = (2 * pIndex) + 1;
            let right = left + 1;
            let swap = null;
            if (this.heap[left] < this.heap[pIndex] && this.heap[right] < this.heap[pIndex]) {
                break;
            }
            if (right<this.heap.length && this.heap[left] > this.heap[right]){
                if (this.heap[left] > this.heap[pIndex]){
                    swap = left;
                }
            }else{
                if (right >= this.heap.length) break;
                if (this.heap[right] > this.heap[pIndex]){
                    swap = right;
                }
            }
            if(swap === null) break;
            let temp = this.heap[pIndex];
            this.heap[pIndex] = this.heap[swap];
            this.heap[swap] = temp;
            pIndex = swap;
        }
        console.log(this.heap);
        return this.heap;
    }
}
let list = new Heap();
list.add(41);
list.add(39);
list.add(33);
list.add(18);
list.add(27);
list.add(12);
list.add(55);
list.add(65);
list.add(85);
list.add(95);
list.add(98);;
list.add(105);
list.add(34);
list.add(23)
list.removeMax();

