import { BinaryTree } from "../lib/BinaryTree";

const nodeDepthsRec = (tree: BinaryTree | null, level: number, sum: number): number => {
    if (!tree) {
        return sum;
    }

    sum += level;

    level += 1;

    sum = nodeDepthsRec(tree.left, level, sum);
    sum = nodeDepthsRec(tree.right, level, sum);

    return sum
}

export const nodeDepths = (tree: BinaryTree): number => {
    return nodeDepthsRec(tree, 0, 0);
}