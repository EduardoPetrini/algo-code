export const insertionSort = (array: number[]): number[] => {
    for (let index = 1; index < array.length; index++) {
        let current = array[index];
        let currentIndex = index;

        while(currentIndex > 0 && current < array[currentIndex - 1]) {
            array[currentIndex] = array[currentIndex - 1];
            array[currentIndex - 1] = current;
            currentIndex--;
        }
    }

    return array;
}