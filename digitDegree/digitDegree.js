//Check out My YouTube Channel https://www.YouTube.com/CodingTutorials360
//Video Walkthrough - https://www.youtube.com/watch?v=YuDtdIIDigM
function digitDegree(n) {
    let count = 0;

    if (n <= 9) {
        return count;
    } else {
        while (true) {
            count++;
            n = getDigit(n);

            if (n <= 9) {
                break;
            }
        }
    }
    return count;
}

function getDigit(num) {
    return num.toString().split("").reduce((a, b) => {
        return parseInt(a) + parseInt(b);
    });
}