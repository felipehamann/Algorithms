//Check out My YouTube Channel https://www.YouTube.com/CodingTutorials360
//Video Walkthrough - https://www.youtube.com/watch?v=imhEc7iymds
function arrayReplace(inputArray, elemToReplace, substitutionElem) {
    inputArray.forEach((element, index) => {
        if (element === elemToReplace) {
            inputArray[index] = substitutionElem;
        }
    });

    return inputArray;
}