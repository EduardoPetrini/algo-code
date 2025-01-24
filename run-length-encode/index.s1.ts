export const runLengthEncode = (str: string): string => {
    const encoded = [];
    let count = 1;

    for (let index = 1; index < str.length; index++) {
        if (str[index] !== str[index - 1] || count >= 9) {
            encoded.push(count, str[index-1]);
            count = 0;
        }

        count += 1;
    }

    encoded.push(count, str[str.length - 1]);

    return encoded.join('');
}