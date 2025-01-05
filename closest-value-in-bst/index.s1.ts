import { BST } from "./BST";


const isCloser = (current: number, previous: number, target: number) => {
    const currentDiff = Math.abs(current) - Math.abs(target);
    const previousDiff = Math.abs(previous) - Math.abs(target);

    return Math.abs(currentDiff) <= Math.abs(previousDiff);
}

export const findClosestValue = (tree: BST | null, target: number, closest: number | null): number | null => {
    if (!tree) {
        return closest
    }

    if (!closest) {
        closest = tree.value;
    }

    if (isCloser(tree.value, closest, target)) {
        closest = tree.value;
    }

    if (target > tree.value) {
        return findClosestValue(tree.right, target, closest);
    } else if (target < tree.value) {
        return findClosestValue(tree.left, target, closest);
    }

    return tree.value;
}