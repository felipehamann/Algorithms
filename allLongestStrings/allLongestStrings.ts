function allLongestStrings(inputArray: string[]): string[] {
    let longestLength: number = 0;
    const longestWords: string[] = [];

    inputArray.forEach((element) => {
        longestLength = longestLength < element.length ? element.length : longestLength;
    });

    inputArray.forEach((element) => {
        if (element.length === longestLength) {
            longestWords.push(element);
        }
    });

    return longestWords;
}
