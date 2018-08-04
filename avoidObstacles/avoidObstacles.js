//Check out My YouTube Channel https://www.YouTube.com/CodingTutorials360
//Video Walkthrough - https://www.youtube.com/watch?v=l7H1qO8NjvI
function avoidObstacles(inputArray) {
    //Sort array numerically to get the largets value
    inputArray = inputArray.sort((a, b) => a - b);
    //Stores largest value in sorted array
    const largestArrayVal = inputArray[inputArray.length - 1];
    //Iterates from 1 to the largest number + 1
    //+1 incase no values work between the entire set
    for (let i = 1; i <= largestArrayVal + 1; i++) {
        //If all the numbers % iterater dont return 0 it works
        if (inputArray.every((element) => element % i !== 0)) {
            return i;
        }
    }
}