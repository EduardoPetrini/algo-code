export class BST {
    value: number;
    left: BST | null;
    right: BST | null;
    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;

    }

    init(values: number[]) {
        values.forEach((value: number) => this.insert(value))
    }

    private insertRec(tree: BST | null, value: number): BST {
        if (!tree) {
            throw new Error('Cannot insert in an empty tree');
        }

        if (value > tree.value) {
            if (tree.right) {
                return this.insertRec(tree.right, value);
            }

            tree.right = new BST(value);
        } else if (value < tree.value) {
            if (tree.left) {
                return this.insertRec(tree.left, value);
            }

            tree.left = new BST(value);
        }

        return tree;
    }

    insert(value: number) {
        this.insertRec(this, value);
    }
}