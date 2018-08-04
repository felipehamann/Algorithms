//Check out My YouTube Channel https://www.YouTube.com/CodingTutorials360
//Video Walkthrough - https://www.youtube.com/watch?v=9kLmJnNiixE
function arrayChange(inputArray) {
    let count = 0;
    
    for (let i = 0; i < inputArray.length - 1; i++) {
        if (inputArray[i] >= inputArray[i + 1]) {
            const difference = (inputArray[i] + 1) - inputArray[i + 1];
            inputArray[i + 1] = inputArray[i] + 1;
            count += difference;
        }
    }

    return count;
}