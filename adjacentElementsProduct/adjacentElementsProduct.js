//Check out My YouTube Channel https://www.YouTube.com/CodingTutorials360
//Video Walkthrough - https://www.youtube.com/watch?v=blCiiW3cWuE&list=PLHdCowjFIBmJpWtXakyh0cczY-3PsFwer&index=8

function adjacentElementsProduct(inputArray) {
    //Initialize product holder to first values and not 0 if you use 0 will not work if all results are negative
    var product = inputArray[0] * inputArray[1];
    //Compares the current product with adjacent multiplying elements and sets it if it is greator
    for (var i = 0; i < inputArray.length - 1; i++) {
        if (inputArray[i] * inputArray[i + 1] >= product) {
            product = inputArray[i] * inputArray[i + 1];
        }
    }
    return product;
}