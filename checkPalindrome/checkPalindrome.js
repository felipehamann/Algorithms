//Check out My YouTube Channel https://www.YouTube.com/CodingTutorials360
//Video Walkthrough - https://www.youtube.com/watch?v=IVoOmPDCHCM
function checkPalindrome(inputString) {
    const originalWord = inputString.toLowerCase();
    const reversedWord = originalWord.split('').reverse().join('');

    return originalWord === reversedWord;
}