export const threeSum = (array: number[], targetSum: number): number[][] => {
    const results: number[][] = [];
    const sorted = array.sort((numA, numB) => numA - numB);

    for (let index = 0; index < sorted.length; index++) {
        const num1 = sorted[index];
        let left = index + 1;
        let right = sorted.length - 1;

        while (left < right) {
            const num2 = sorted[left];
            const num3 = sorted[right];

            const sum = num1 + num2 + num3;

            if (sum > targetSum) {
                right--;
            } else if (sum < targetSum) {
                left++;
            } else if (sum === targetSum) {
                left++;
                right--;
                results.push([num1, num2, num3])
            }
        }
    }


    return results;
}