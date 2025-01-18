const binarySearchRec = (array: number[], target: number, start: number, end: number): number => {
    if (start > end) {
        return -1
    }

    const middleIndex = Math.floor((start + end) / 2);

    if (array[middleIndex] === target) {
        return middleIndex;
    }

    if (target > array[middleIndex]) {
        return binarySearchRec(array, target, middleIndex + 1, end);
    }

    return binarySearchRec(array, target, start, middleIndex - 1);
}

export const binarySearch = (array: number[], target: number): number => {
    return binarySearchRec(array, target, 0, array.length - 1)
}