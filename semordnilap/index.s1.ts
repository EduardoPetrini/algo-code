export const semordnilap = (array: string[]) => {
  const wordMap = new Map<string, boolean>();
  const results: string[][] = [];

  for (let word of array) {
    wordMap.set(word, true);

    const reverse = word.split("").reverse().join("");
    if (reverse !== word && wordMap.has(reverse)) {
      results.push([word, reverse]);
    }
  }

  return results;
};
