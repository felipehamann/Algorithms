//Check out My YouTube Channel https://www.YouTube.com/CodingTutorials360
//Video Walkthrough - https://www.youtube.com/watch?v=LHn8WEj3CfU
function isLucky(n) {
    //Convert to a string
    n = n.toString();
    //Find the half way point
    const half = n.length / 2;
    //Split into half of a string, make into character array and reduce parseInt values
    const firstHalf = n.substring(0, half).split("").reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    });
    const secondHalf = n.substring(half, n.length).split("").reduce((a, b) => {
        return parseInt(a) + parseInt(b);
    });

    return firstHalf === secondHalf;
}