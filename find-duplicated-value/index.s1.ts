export const findDuplicatedValues = (array: number[]): number => {
    const numbers = new Map<number, number>();

    for (let index = 0; index < array.length; index++) {
        const value = numbers.get(array[index]);
        if (value === 1) {
            return array[index];
        }

        numbers.set(array[index], 1);
    }

    return -1;
}