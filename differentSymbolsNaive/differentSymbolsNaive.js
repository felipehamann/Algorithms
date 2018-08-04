function differentSymbolsNaive(s) {
    const uniqueChars = new Set();
    const inputChars = s.split('');

    inputChars.forEach((char) => {
        uniqueChars.add(char);
    });

    return uniqueChars.size;
}
