//Check out My YouTube Channel https://www.YouTube.com/CodingTutorials360
//Video Walkthrough - https://www.youtube.com/watch?v=5aO-EunylgQ
function allLongestStrings(inputArray) {
    //Initialize the longest var to index 0
    var longestWord = inputArray[0].length;
    for (var i = 1; i < inputArray.length; i++) {
        //Checks if the current string is longer
        if (longestWord < inputArray[i].length) {
            longestWord = inputArray[i].length;
        }
    }
    //Filters out any values not equal to the longest String
    var longestWordsArray = inputArray.filter((word) => {
        return word.length === longestWord;
    });

    return longestWordsArray;
}