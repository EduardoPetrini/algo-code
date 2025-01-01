export const twoSums2 = (array: number[], targetSum: number): number[] => {
  const map = new Map<number, number>();

  const size = array.length;
  for (let index = 0; index < size; index++) {
    const item = array[index];

    const compliment = targetSum - item;

    if (map.has(compliment)) {
      return [compliment, item];	
    }

    map.set(item, index);
  }

  return [];
}
