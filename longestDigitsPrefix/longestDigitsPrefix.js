//Check out My YouTube Channel https://www.YouTube.com/CodingTutorials360
//Video Walkthrough - https://www.youtube.com/watch?v=0WXOG-J-8Qg
function longestDigitsPrefix(inputString) {
    const chars = inputString.split('');
    let prefix = '';

    for (let char of inputString) {
        const num = parseInt(char);

        if (isNaN(num)) {
            break;
        }

        prefix += char;
    }

    return prefix;
}