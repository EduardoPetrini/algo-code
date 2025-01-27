export const firstNonRepeatingChar = (str: string) => {
  const charCount = new Map<string, number>();

  for (const char of str) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  for (let index = 0; index < str.length; index++) {
    const char = str[index];
    if (charCount.get(char) === 1) {
      return index;
    }
  }

  return -1;
};
