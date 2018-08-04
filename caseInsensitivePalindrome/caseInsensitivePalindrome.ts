function isCaseInsensitivePalindrome(inputString: string): boolean {
    const originalLowerCase: string = inputString.toLowerCase();
    const reverseWord: string = originalLowerCase.toLowerCase().split('').reverse().join('');

    return originalLowerCase === reverseWord;
}
