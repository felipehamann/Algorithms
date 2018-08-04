//Check out My YouTube Channel https://www.YouTube.com/CodingTutorials360
//Video Walkthrough - https://www.youtube.com/watch?v=VGfYf9o3mQo
function arrayMaximalAdjacentDifference(inputArray) {
    let maxDiff = Math.abs(inputArray[0] - inputArray[1]);

    for (let i = 1; i < inputArray.length; i++) {
        let absoluteDiff = Math.abs(inputArray[i - 1] - inputArray[i]);

        if (absoluteDiff > maxDiff) {
            maxDiff = absoluteDiff;
        }
    }

    return maxDiff;
}
