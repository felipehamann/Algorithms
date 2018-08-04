//Check out My YouTube Channel https://www.YouTube.com/CodingTutorials360
//Video Walkthrough - https://www.youtube.com/watch?v=WkGd9C9hO9M
function knapsackLight(value1, weight1, value2, weight2, maxW) {
    //If we can carry both items and make the weight limit carry them both
    if (weight1 + weight2 <= maxW) {
        return value1 + value2;
    }
    //If item1 weight fits and 2nd item is too heavy
    else if (weight1 <= maxW && weight2 > maxW) {
        return value1;
    }
    //If item2 weight fits and 1st item is too heavy
    else if (weight2 <= maxW && weight1 > maxW) {
        return value2;
    }
    //If both items are too heavy  return no value
    else if (weight1 > maxW && weight2 > maxW) {
        return 0;
    }
    //All other tests fail just return the value of whichever item is highest
    else {
        if (value2 > value1) {
            return value2;
        }
        else {
            return value1;
        }
    }

}
