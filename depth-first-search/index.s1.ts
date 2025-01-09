import { NaryTree } from "../lib/NaryTree"

const depthFirstSearchRec = (tree: NaryTree | null, array: string[]): string[] => {
    if (!tree) {
        return array;
    }

    array.push(tree.name);

    for (let child of tree.children) {
        depthFirstSearchRec(child, array);
    }

    return array;
}

export const depthFirstSearch = (tree: NaryTree) => {
    return depthFirstSearchRec(tree, [])
}