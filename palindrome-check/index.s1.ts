export const palindromeCheck = (str: string): boolean => {
  let indexA = 0;
  let indexB = str.length - 1;

  while (indexA < indexB) {
    if (str[indexA] !== str[indexB]) {
      return false;
    }

    indexA++;
    indexB--;
  }

  return true;
};
