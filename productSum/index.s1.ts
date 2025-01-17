const calcSum = (array: any, level: number): number => {
    return array.reduce((sum: number, element: number[] | number) => sum + ((element instanceof Array) ? calcSum(element, level + 1) : element) * level, 0)
}


export const productSumS1 = (array: any): number => {
    return calcSum(array, 1);
}