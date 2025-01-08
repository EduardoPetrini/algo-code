import { BinaryTree } from "../lib/BinaryTree"

const recursiveCalc = (tree: BinaryTree | null): number => {
    if (!tree) {
        return -1;
    }

    switch (tree.value) {
        case -1: return recursiveCalc(tree.left) + recursiveCalc(tree.right);
        case -2: return recursiveCalc(tree.left) - recursiveCalc(tree.right);
        case -3: return Math.trunc(recursiveCalc(tree.left) / recursiveCalc(tree.right));
        case -4: return recursiveCalc(tree.left) * recursiveCalc(tree.right);
    }

    return tree.value;
}

export const evaluateExpressionTree = (tree: BinaryTree): number => {
    return recursiveCalc(tree);
}