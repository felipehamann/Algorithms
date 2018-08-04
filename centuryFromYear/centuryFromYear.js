//Check out My YouTube Channel https://www.YouTube.com/CodingTutorials360
//Video Walkthrough - https://www.youtube.com/watch?v=BMKVzk-geY0

function centuryFromYear(year) {
        //Finds out if it is a perfect century example: 1700
        const dividesEven = year % 100;
        //Breaks down into century floating point
        const century = year / 100;
        //If perfect century return the value
        if (dividesEven === 0) {
                return century;
        }
        //If imperfect century example: 1705 remove floating points and add 1 for logic
        return Math.floor(century) + 1;
}