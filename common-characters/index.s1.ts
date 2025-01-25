export const commonCharactersS1 = (strings: string[]) => {
    let smallestString;

    for (const string of strings) {
        if (!smallestString || string.length < smallestString.length) {
            smallestString = string;
        }
    }

    const smallestStringSet = new Set(smallestString);

    for (const string of strings) {
        const stringSet = new Set(string);
        smallestStringSet.forEach(char => {
            if (!stringSet.has(char)) {
                smallestStringSet.delete(char);
            }
        });
    }

    return Array.from(smallestStringSet);
}