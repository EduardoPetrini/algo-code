export const transposeMatrixS2 = (matrix: number[][]): number[][] => {
    const newMatrix: number[][] = [];

    for (let colI in matrix[0]) {
        if (!newMatrix[colI]) {
            newMatrix[colI] = [];
        }

        for (let rowI in matrix) {
            const item: number = matrix[rowI][colI]
            if (item === undefined) {
                continue;
            }
            newMatrix[colI].push(item)
        }
    }
    return newMatrix;
}