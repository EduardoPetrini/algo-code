export class BinaryTree {
    value: number;
    left: BinaryTree | null;
    right: BinaryTree | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    init(values: number[]) {
        values.forEach((value: number) => this.insert(value))
    }

    insert(value: number) {
        if (!this.left) {
            this.left = new BinaryTree(value);
            return this;
        }

        if (!this.right) {
            this.right = new BinaryTree(value);
            return this;
        }

        const queue: BinaryTree[] = [this];

        while (queue.length) {
            const node = queue.shift();
            if (!node) {
                return;
            }

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }

            if (!node.left) {
                node.left = new BinaryTree(value);
                return;
            }

            if (!node.right) {
                node.right = new BinaryTree(value);
                return;
            }

        }
    }
}