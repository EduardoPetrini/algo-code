export const calcValidSubsequence = (array: number[], sequence: number[]): boolean => {
    const size = sequence.length;
    const arrSize = array.length;
  
    let indexB = 0;
    for (let indexA = 0; indexA < size; indexA++) {
      const elemA = sequence[indexA];
  
      let found = false;
      while (indexB < arrSize) {
        const elemB = array[indexB];
  
        indexB++;
        
        if (elemA === elemB) {
          found = true;
          break;
        }
      }
  
      if (!found) {
        return false;
      }
    }
  
    return true;
}