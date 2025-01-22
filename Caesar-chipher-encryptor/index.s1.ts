export const caesarCipherEncryptor = (str: string, key: number): string => {
  const start = "a".codePointAt(0);
  const end = "z".codePointAt(0);

  if (!start || !end) {
    throw new Error("Invalid input");
  }

  const modKey = key % 26;
  let newString = '';

  for (let char of str) {
    let value = char.codePointAt(0);
    if (!value) {
      continue;
    }

    value = value + modKey;
    if (value > end) {
      value = (value % end) + start;
    }

    newString += String.fromCodePoint(value);
  }

  return newString;
};
