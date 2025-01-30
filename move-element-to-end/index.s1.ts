export const moveElementToEnd = (array: number[], toMove: number): number[] => {
  let count = 0;
  let index = 0;

  while (index < array.length) {
    if (array[index] === toMove) {
      array.splice(index, 1);
      count++;
      index--;
    }
    index++;
  }

  array.push(...new Array(count).fill(toMove));
  return array;
};
