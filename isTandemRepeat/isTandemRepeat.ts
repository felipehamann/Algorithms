function isTandemRepeat(inputString: string): boolean {
    const wordLength = inputString.length;

    if (wordLength % 2 === 0) {
        const firstWordHalf = inputString.slice(0, wordLength / 2);
        const secondWordHalf = inputString.slice(wordLength / 2, wordLength);

        return firstWordHalf === secondWordHalf;
    }

    return false;
}
