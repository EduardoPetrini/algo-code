export const commonCharactersS2 = (strings: string[]) => {
    const stringMap = new Map<string, number>();

    for (const string of strings) {
        for (const char of new Set(string)) {
            stringMap.set(char, (stringMap.get(char) || 0) + 1);
        }
    }

    return Array.from(stringMap.keys()).filter(char => stringMap.get(char) === strings.length);
}
