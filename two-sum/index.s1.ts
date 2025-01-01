export const twoSum = (array: number[], targetSum: number): number[] => {
  const size = array.length;

  if (size <= 1) {
    return [];
  }

  const solution: number[] = [];

  for (let indexA = 0; indexA < size; indexA++) {
    const itemA = array[indexA];
    let indexB = indexA + 1;

    while (indexB < size) {
      const itemB = array[indexB];

      const sum = itemA + itemB;

      if (sum === targetSum) {
        solution.push(itemA, itemB);

        return solution;
      }

      indexB += 1;
    }
  }

  return solution;
}
