function spiralTraverseRecursive(array: number[][], startRow: number, endRow: number, startCol: number, endCol: number, results: number[]): number[] {
    if (startRow > endRow || startCol > endCol) {
        return results;
    }

    for (let col = startCol; col <= endCol; col++) {
        results.push(array[startRow][col]);
    }

    for (let row = startRow + 1; row <= endRow; row++) {
        results.push(array[row][endCol]);
    }

    if (startRow === endRow) {
        return results;
    }

    for (let col = endCol - 1; col >= startCol; col--) {
        results.push(array[endRow][col]);
    }

    if (startCol === endCol) {
        return results;
    }

    for (let row = endRow - 1; row > startRow; row--) {
        results.push(array[row][startCol]);
    }

    return spiralTraverseRecursive(array, startRow + 1, endRow - 1, startCol + 1, endCol - 1, results);
}

export const spiralTraverseS2 = (array: number[][]): number[] => {
    return spiralTraverseRecursive(array, 0, array.length - 1, 0, array[0].length - 1, []);
}