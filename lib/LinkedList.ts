export class LinkedList {
    value: number;
    next: LinkedList | null;
    constructor(value: number) {
        this.value = value;
        this.next = null;
    }

    add(value: number) {
        let linkedList = this as LinkedList;

        while (linkedList.next) {
            linkedList = linkedList.next;
        }

        linkedList.next = new LinkedList(value);
    }
}