//Check out My YouTube Channel https://www.YouTube.com/CodingTutorials360
//Video Walkthrough - https://www.youtube.com/watch?v=JC25FQ9hef8
function palindromeRearranging(inputString) {
    const chars = inputString.split('');
    const charCount = {};
    let oddCount = 0;

    for (let char of chars) {
        if (charCount.hasOwnProperty(char)) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    for (let key in charCount) {
        if (charCount[key] % 2 !== 0) {
            oddCount++;
        }
    }

    return oddCount > 1 ? false : true;
}