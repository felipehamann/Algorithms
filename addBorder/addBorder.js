//Check out My YouTube Channel https://www.YouTube.com/CodingTutorials360
//Video Walkthrough - https://www.youtube.com/watch?v=o0ElGkQzqLw
function addBorder(picture) {
    var lengthOfWall = picture[0].length + 2;
    var wall = "";

    for (var i = 0; i < lengthOfWall; i++) {
        wall = wall.concat('*');
    }
    picture.unshift(wall);
    picture.push(wall);

    for (var j = 1; j < picture.length - 1; j++) {

        picture[j] = "*".concat(picture[j], "*")
    }

    return picture;
}
