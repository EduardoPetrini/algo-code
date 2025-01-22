export const selectionSort = (arr: number[]): number[] => {
    let index = 0;
    while (index < arr.length) {
        let minIndex = index;

        for (let i = index; i < arr.length; i++) {
            if(arr[i] < arr[minIndex]) {
                minIndex = i;
            }
        }

        [arr[index], arr[minIndex]] = [arr[minIndex], arr[index]];
        index++;
    }
    return arr;
}