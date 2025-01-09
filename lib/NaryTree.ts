export class NaryTree {
    name: string;
    children: NaryTree[];
    constructor(name: string) {
        this.name = name;
        this.children = [];
    }

    addChild(name: string) {
        this.children.push(new NaryTree(name));
    }
}