export const mergeOverlapingIntervals = (array: number[][]): number[][] => {
    const intervals = [];

    const sorted = array.sort((a, b) => a[0] - b[0]);
    let currentInterval = sorted[0];
    for (let index = 1; index < sorted.length; index++) {
        const interval = sorted[index];

        if (interval[0] <= currentInterval[1]) {
            currentInterval[1] = currentInterval[1] > interval[1] ? currentInterval[1] : interval[1];
        } else {
            intervals.push(currentInterval);
            currentInterval = interval;
        }
    }

    intervals.push(currentInterval);

    return intervals;
}