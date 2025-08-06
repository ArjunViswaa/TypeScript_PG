"use strict";
class ListNode {
    constructor(value) {
        this.value = value;
    }
}
class LinkedList {
    constructor() {
        this.length = 0;
    }
    add(value) {
        const node = new ListNode(value);
        if (!this.root || !this.tail) {
            this.root = node;
        }
        else {
            this.tail.next = node;
        }
        this.tail = node;
        this.length++;
    }
    getNumberOfElements() {
        return this.length;
    }
    print() {
        let current = this.root;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}
const numberList = new LinkedList();
numberList.add(10);
numberList.add(5);
numberList.add(-3);
numberList.print();
const nameList = new LinkedList();
//# sourceMappingURL=linked-list.js.map