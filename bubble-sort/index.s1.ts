export const bubbleSort = (array:number[]): number[] =>{
    let hasSwapped = true;

    while(hasSwapped) {
        hasSwapped = false;

        for(let index = 0; index < array.length -1; index++) {
            const current = array[index];
            const next = array[index+1];

            if (current > next) {
                array[index] = next;
                array[index + 1 ] = current;
                hasSwapped = true;
            }
        }
    }

    return array;
}