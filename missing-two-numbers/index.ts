
/**
 * The two missing numbers problem tries to find them in an array of numbers.
 * 
 * The length of the array is array.length + 2
 * 
 * The numbers might not be in sequence, sorted, but they are sequencial 
 * 
 * Example: input: [1,4,3] (expected length is 5), so the missing numbers
 * are [2, 5]
 * 
 * Example2: input: [2], expected length is 3 (length + 2),
 * so the result is [1,3]
 * 
 * How to address, let first try if only 1 number is missing by suming what is expected
 * and compare to what we got.
 * 
 * @param array The array of numbers with 2 missing values
 * @returns 
 */
export const missingTwoNumbers = (array: number[]): number[] => {
    let expectedSum = 0;

    // 15
    for (let index = 1; index <= array.length + 2; index++) {
        expectedSum += index;
    }

    // the sum that we got
    // 8
    let currentSum = 0;
    for (let index = 0; index < array.length; index++) {
        currentSum += array[index];
    }

    // the difference between the expected and current is the sum of the two
    // missing numbers;
    // 7
    const diff = expectedSum - currentSum;

    // if we get the average of the diff, one missing number will be bigger 
    // and the other one will be smaller than the avg.
    // In this way we can find the missing numbers by spliting the problem 
    // in one missing number problem
    // 3
    const avg = Math.floor(diff / 2);

    // what is the expect sum for the subarray below than the avg
    let expectedBelowSum = 0; // 6
    let expectedAboveSum = 0; // 9
    for (let index = 1; index <= array.length + 2; index++) {
        if (index <= avg) {
            expectedBelowSum += index;
        } else {
            expectedAboveSum += index;
        }
    }

    // Get the current sum we have below and above the avg
    let belowSum = 0; // 4
    let aboveSum = 0; // 4
    for (let index = 0; index < array.length; index++) {
        const num = array[index];
        if (num <= avg) {
            belowSum += num;
        } else {
            aboveSum += num;
        }
    }


    // the smaller missing number is the expected below sum minus the below sum
    // the bigger missing number is the other way around
    const missing1 = expectedBelowSum - belowSum;
    const missing2 = expectedAboveSum - aboveSum;

    return [missing1, missing2];
}