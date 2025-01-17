export const nthFibonacciS2 = (n: number): number => {

    if (n <= 1) {
        return 0;
    }

    const previous = [0, 1];

    let index = 2;

    while (index < n) {
        console.log(previous)
        const temp = previous[0];
        previous[0] = previous[1];
        previous[1] = temp + previous[1];
        index++;
    }

    return previous[1];
}