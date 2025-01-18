const swap = (arr: number[], index: number, num: number) => {
    let i = 0;
    while (i < index) {
        arr[i] = arr[i + 1];
        i++;
    }
    
    arr[index] = num;
}

export const findTheLargestThree = (arr: number[]) => {
    const result = new Array(3);

    for (const num of arr) {
        if (result[2] === undefined || num > result[2]) {
            swap(result, 2, num);
        } else if (result[1] === undefined || num > result[1]) {
            swap(result, 1, num);
        } else if (result[0] === undefined || num > result[0]) {
            swap(result, 0, num);
        }
    }

    return result;
}