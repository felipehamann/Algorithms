//Check out My YouTube Channel https://www.YouTube.com/CodingTutorials360
//Video Walkthrough - https://www.youtube.com/watch?v=nFt4th0XRGg
function evenDigitsOnly(n) {
    const digits = n.toString().split('');

    return digits.every((digit) => parseInt(digit) % 2 === 0);
}