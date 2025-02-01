export const monotonicArray = (array: number[]): boolean => {
    if (array.length < 2) {
        return true;
    }
    
    let monotonic = false;
    let index = 0;
    let direction = null;

    while (index < array.length) {
        const [num1, num2] = [array[index], array[index + 1]];

        if (num1 > num2) {
            if (direction === null) {
                direction = 1;
            }

            if (direction === 0) {
                return false;
            }
        } else if (num1 < num2) {
            if (direction === null) {
                direction = 0;
            }

            if (direction === 1) {
                return false;
            }
        } else {
            monotonic = true;
        }

        index++;
    }

    return monotonic;
}