export const generateDocumentS1 = (characters: string, document: string) => {
  const charMap = new Map<string, number>();
  const docMap = new Map<string, number>();

  for (const char of characters) {
    charMap.set(char, (charMap.get(char) || 0) + 1);
  }

  for (const char of document) {
    docMap.set(char, (docMap.get(char) || 0) + 1);
  }

  for (const [char, count] of docMap.entries()) {
    const value = charMap.get(char);
    if (!value || count > value) {
      return false;
    }
  }

  return true;
};
