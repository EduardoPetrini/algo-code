export const nthFibonacciS1 = (n: number): number => {
    if (n == 1) {
         return 0;
    }

    if (n == 2) {
        return 1;
    }

    return nthFibonacciS1(n-1) + nthFibonacciS1(n-2);
}