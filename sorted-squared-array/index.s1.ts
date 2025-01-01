export const sortedSquaredArrayS1 = (array: number[]): number[] => {
    return array.map(elem => elem * elem).sort((elemA, elemB) => elemA - elemB);
}