export const classPhoto = (redShirtHeights: number[], blueShirtHeights: number[]): boolean => {

    const redSorted = redShirtHeights.sort((a, b) => b - a);
    const blueSorted = blueShirtHeights.sort((a, b) => b - a);

    const size = redSorted.length;

    let isRedBack = redSorted[0] > blueSorted[0];
    let index = 0;

    while (index < size) {
        if (redSorted[index] >= blueSorted[index] && !isRedBack) {
            return false;
        }

        if (redSorted[index] < blueSorted[index] && isRedBack) {
            return false;
        }

        index++;
    }

    return true;
}