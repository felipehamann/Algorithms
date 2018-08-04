//Check out My YouTube Channel https://www.YouTube.com/CodingTutorials360
//Video Walkthrough - https://www.youtube.com/watch?v=ys9AcF63jQE
function alternatingSums(a) {
    var team1 = 0;
    var team2 = 0;

    a.forEach((element, index) => {
        if (index % 2 === 0) {
            team1 += element;
        }
        else {
            team2 += element;
        }
    });
    return [team1, team2];
}
