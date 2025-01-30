export const smallestDifferenceS1 = (arrayOne: number[], arrayTwo: number[]): number[] => {
    const sortedOne = arrayOne.sort((num1, num2) => num1 - num2);
    const sortedTwo = arrayTwo.sort((num1, num2) => num1 - num2);
    let results: number[] = [];
    let smallest = Number.MAX_VALUE;
    let one = 0;
    let two = 0;

    while (one < sortedOne.length && two < sortedTwo.length) {
        const [numOne, numTwo] = [sortedOne[one], sortedTwo[two]];
        const diff = Math.abs(numOne - numTwo);
        if (diff === 0) {
            return [numOne, numTwo];
        }

        if (diff < smallest) {
            results = [numOne, numTwo];
            smallest = diff;
        }

        if (numOne < numTwo) {
            one++;
        } else {
            two++;
        }
    }

    return results;
}