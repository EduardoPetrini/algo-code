export const arrayOfProducts = (array: number[]): number[] => {
    const left = [1];
    const product = new Array(array.length);

    for (let index = 1; index < array.length; index++) {
        console.log(index, left[index - 1], array[index])
        left.push(left[index - 1] * array[index - 1]);
    }

    let right = 1;
    product[array.length - 1] = left[array.length - 1];
    for (let index = array.length - 2; index >= 0; index--) {
        right = right * array[index + 1];
        product[index] = right * left[index];
    }

    return product;
}