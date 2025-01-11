export const minimumWaitingTime = (queries: number[]): number => {
    const sorted = queries.sort((a, b) => a - b);

    const result = sorted.reduce((acc: number, query: number, index: number) => {
        acc += query * (sorted.length - (index + 1));

        return acc;
    }, 0)

    return result
}