//Check out My YouTube Channel https://www.YouTube.com/CodingTutorials360
//Video Walkthrough - https://www.youtube.com/watch?v=DkOTJRemqzY&index=6&list=PLHdCowjFIBmJpWtXakyh0cczY-3PsFwer

function makeArrayConsecutive2(statues) {
    //Puts the array in numerical order
    statues.sort(function (a, b) {
        return a - b;
    });
    //Set min value for where forloop is to start
    //Add 1 to min as no need to check if min is in the array
    const min = statues[0];
    //Finds max to set up to what number to check tt
    const max = statues[statues.length - 1];
    //Keeps track of missing numbers in array
    let count = 0;
    //Check all values between min and max
    for (let i = min; i < max; i++) {
        //If value is not in the array add one to count;
        if (!statues.includes(i)) {
            count++;
        }
    }

    return count;
}