export const spiralTraverseS1 = (array: number[][]): number[] => {
    let startRow = 0, startCol = 0;
    let endRow = array.length - 1, endCol = array[0].length - 1;
    const results = [];

    while (startRow <= endRow && startCol <= endCol) {
        for (let col = startCol; col <= endCol; col++) {
            results.push(array[startRow][col]);
        }

        for (let row = startRow + 1; row <= endRow; row++) {
            results.push(array[row][endCol]);
        }

        if (startRow === endRow) {
            break;
        }

        for (let col = endCol - 1; col >= startCol; col--) {
            results.push(array[endRow][col]);
        }

        if (startCol === endCol) {
            break;
        }

        for (let row = endRow - 1; row > startRow; row--) {
            results.push(array[row][startCol]);
        }

        startRow++;
        endRow--;
        startCol++;
        endCol--;
    }

    return results;
}