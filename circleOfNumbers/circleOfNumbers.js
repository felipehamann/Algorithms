//Check out My YouTube Channel https://www.YouTube.com/CodingTutorials360
//Video Walkthrough - https://www.youtube.com/watch?v=vesPC-NUcb0
function circleOfNumbers(n, firstNumber) {
    //Stores values in an array to check later
    const numArray = [];
    //Variable to store half way point
    const halfWay = n / 2;
    //Add the circle of numbers to the array
    for (let i = 0; i < n; i++) {
        numArray.push(i);
    }

    if (firstNumber < halfWay) {
        return numArray[firstNumber + halfWay]
    }
    
    return numArray[firstNumber - halfWay];
}
