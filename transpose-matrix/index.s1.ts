export const transposeMatrix = (matrix: number[][]): number[][] => {
    const newMatrix: number[][] = [];
    const rowSize = matrix.length;

    for (let rowI = 0; rowI < rowSize; rowI++) {
        let colI = 0;
        const cowSize = matrix[rowI].length;

        while (colI < cowSize) {
            if (!newMatrix[colI]) {
                newMatrix[colI] = [];
            }

            const item: number = matrix[rowI][colI];
            newMatrix[colI].push(item);
            colI++;
        }
    }

    return newMatrix;
}