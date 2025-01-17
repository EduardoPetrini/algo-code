const calcSum = (array: any, level: number): number => {
    let sum = 0;

    for (let element of array) {
        if (element instanceof Array) {
            sum += calcSum(element, level + 1);
            continue
        }

        sum += element;
    }

    return sum * level;
}


export const productSumS2 = (array: any): number => {
    return calcSum(array, 1);
}