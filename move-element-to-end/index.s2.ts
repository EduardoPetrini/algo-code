export const moveElementToEndS2 = (
  array: number[],
  toMove: number
): number[] => {
  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    while (start < end && array[start] !== toMove) {
      start++;
    }

    while (start < end && array[end] === toMove) {
      end--;
    }

    [array[start], array[end]] = [array[end], array[start]];
  }
  return array;
};
