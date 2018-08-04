//Check out My YouTube Channel https://www.YouTube.com/CodingTutorials360
//Video Walkthrough - https://www.youtube.com/watch?v=smuKknnNZ3w&list=PLHdCowjFIBmJpWtXakyh0cczY-3PsFwer&index=5

function almostIncreasingSequence(sequence) {
    var count = 0;

    for (var i = 0; i < sequence.length; i++) {
        if (sequence[i] <= sequence[i - 1]) {
            count++;
            if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) {
                return false;
            }
        }
    }

    return count <= 1;
}