function stringsConstruction(a: string, b: string): number {
    const aCount = getAlphabetCount(a);
    const bCount = getAlphabetCount(b);
    const divisors = [];

    for (let char in aCount) {
        if (bCount.hasOwnProperty(char)) {
            divisors.push(Math.floor(bCount[char] / aCount[char]));
        } else {
            return 0;
        }
    }

    return Math.min(...divisors);
}

function getAlphabetCount(word: string): any {
    const splitWord = word.split('');
    const alphabetCount = {};

    splitWord.forEach((char) => {
        if (alphabetCount.hasOwnProperty(char)) {
            alphabetCount[char]++;
        } else {
            alphabetCount[char] = 1;
        }
    });

    return alphabetCount;
}