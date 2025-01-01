export const calcValidSubsequence2 = (array: number[], sequence: number[]): boolean => {
    const seqSize = sequence.length;
    const arrSize = array.length;
  
    let indexB = 0;
    for (let indexA = 0; indexA < arrSize; indexA++) {
      if (indexB === seqSize) {
        return true;
      }

      const elemA = array[indexA];
      const elemB = sequence[indexB];

      if (elemA === elemB) {
        indexB++;
      }
    }
  
    return indexB === seqSize;
}