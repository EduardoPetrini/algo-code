export const longestPeak = (array: number[]): number => {
    let peak = 0;
    let start = 0;
    let index = 1;

    while (index < array.length - 1) {
        let [num0, num1, num2] = [array[index - 1], array[index], array[index + 1]];

        if (num0 >= num1) {
            start = index;
        }

        if (num0 < num1 && num1 > num2) {
            // found peak, find end
            let end = index + 1;
            while (num1 > num2 && end < array.length) {
                num1 = array[end];
                num2 = array[end + 1];
                end++;
            }

            end = end - 1;
            const currentLength = (end - start) + 1;
            peak = Math.max(peak, currentLength);
            start = end;
            index = end;
        }

        index++;
    }



    return peak;
}