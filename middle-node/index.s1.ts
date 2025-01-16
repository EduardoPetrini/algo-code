import { LinkedList } from "../lib/LinkedList";

export const middleNodeS1 = (linkedList: LinkedList): LinkedList | null => {
    let node: LinkedList | null = linkedList;
    let size = 0;
    let middleIndex = 0;

    while (node) {
        size++;
        node = node.next;
    }

    middleIndex = Math.floor(size / 2);

    let index = 0;
    node = linkedList;
    while (node && index < middleIndex) {
        node = node.next;
        index++
    }

    return node;
}