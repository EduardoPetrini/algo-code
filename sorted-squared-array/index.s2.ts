export const sortedSquaredArrayS2 = (array: number[]): number[] => {
    const size = array.length;

    if (!size) {
        return [];
    }

    let indexA = 0;
    let indexB = size - 1;
    let index = size;

    const solution = new Array(size);

    while (indexA <= indexB) {
        index--;

        const elemA = array[indexA] * array[indexA];
        const elemB = array[indexB] * array[indexB];

        if (elemA > elemB) {
            solution[index] = elemA;
            indexA++;
            continue;
        }

        solution[index] = elemB;
        indexB--;
    }

    return solution;
}