import { LinkedList } from "../lib/LinkedList";

export const removeDuplicatesFromLinkedList = (linkedList: LinkedList): LinkedList => {
    let node: LinkedList | null = linkedList.next;
    let previous: LinkedList | null = linkedList;

    while (node) {
        if (node.value === previous?.value) {
            previous.next = node.next
        } else {
            previous = node
        }

        node = node.next;
    }

    return linkedList;
}