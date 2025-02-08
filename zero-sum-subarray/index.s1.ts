export const zeroSumSubarray = (array: number[]): boolean => {
    // First, create a map to store the ongoing sum
    const sums = new Map<number, number>();

    // add the first expected sum, "0" to the map
    sums.set(0, 1);

    let currentSum = 0;

    for (let index = 0; index < array.length; index++) {
        const num = array[index];
        if (num === 0) {
            return true;
        }

        currentSum += num;

        const mapValue = sums.get(currentSum);

        // if there is the same sum already in the map, return true
        // because from the first sum to the next sum with the same 
        // result, must be a zero sum
        if (mapValue) {
            return true;
        }

        sums.set(currentSum, 1);
    }

    return false;
}