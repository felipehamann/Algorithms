//Check out My YouTube Channel https://www.YouTube.com/CodingTutorials360
//Video Walkthrough - https://www.youtube.com/watch?v=kBmSTGzop_Q
function growingPlant(upSpeed, downSpeed, desiredHeight) {
    let totalHeight = 0;
    let days = 0;

    while (totalHeight < desiredHeight) {
        days++;
        totalHeight += upSpeed;

        if (totalHeight < desiredHeight) {
            totalHeight -= downSpeed;
        }
    }
    
    return days;
}