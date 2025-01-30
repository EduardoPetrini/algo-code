export const smallestDifferenceS2 = (arrayOne: number[], arrayTwo: number[]): number[] =>{
    let result: number[] = [];
    let smallest = Number.MAX_VALUE;

    for (let numOne of arrayOne) { 
        for (let numTwo of arrayTwo) {
            const diff = Math.abs(numOne - numTwo);

            if (diff === 0) {
                return [numOne, numTwo];
            }

            if (diff < smallest) {
                result = [numOne, numTwo];
                smallest = diff;
            }
        }
    }

    return result;
}