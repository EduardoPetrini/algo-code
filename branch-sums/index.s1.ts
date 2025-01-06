import { BinaryTree } from "../lib/BinaryTree";

const branchSumsRec = (tree: BinaryTree | null, sums: number[], previousSum: number): number[] => {
    if (!tree) {
        return sums;
    }

    previousSum += tree.value;

    if (!tree.left && !tree.right) {
        sums.push(previousSum);
        return sums;
    }

    branchSumsRec(tree.left, sums, previousSum);
    branchSumsRec(tree.right, sums, previousSum);

    return sums;
}

export const branchSums = (tree: BinaryTree): number[] => {
    const results = branchSumsRec(tree, [], 0);

    return results;
}