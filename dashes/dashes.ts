function dashes(n: number): string[] {
    const halfDiamond: string[] = [];
    let longestLength: number = 0;
    
    for (let i = 1; i <= n; i++) {
        let word = '-';
        word = word.concat('|-'.repeat(i - 1))
        halfDiamond.push(word);

        longestLength = longestLength < word.length ? word.length : longestLength;
    }

    const reverseDiamond = halfDiamond.slice(0, n - 1).reverse();
    const fullDiamond = halfDiamond.concat(reverseDiamond);

    for (let i = 0; i < fullDiamond.length; i++) {
        while (fullDiamond[i].length !== longestLength) {
            fullDiamond[i] = ' ' + fullDiamond[i] + ' ';
        }
    }

    return fullDiamond;
}
