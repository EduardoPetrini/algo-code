export const generateDocumentS2 = (characters: string, document: string) => {
  const counts = new Map<string, number>();

  for (const char of characters) {
    counts.set(char, (counts.get(char) || 0) + 1);
  }

  for (const char of document) {
    counts.set(char, (counts.get(char) || 0) - 1);

    if ((counts.get(char) || -1) < 0) {
      return false;
    }
  }

  return true;
};
