import { LinkedList } from "../lib/LinkedList";

export const middleNodeS2 = (linkedList: LinkedList): LinkedList | null => {
    let slow: LinkedList | null = linkedList;
    let fast: LinkedList | null = linkedList;

    while (slow && fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    return slow;
}