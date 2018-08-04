//Check out My YouTube Channel https://www.YouTube.com/CodingTutorials360
//Video Walkthrough - https://www.youtube.com/watch?v=mN_nZhJRNuo
function matrixElementsSum(matrix) {
    //Keeps track of the total
    let priceTotal = 0;
    //Keeps track of indices(j) to ignore
    let bannedIndex = [];
    //Row for loop
    for (let i = 0; i < matrix.length; i++) {
        //Col for loop
        for (let j = 0; j < matrix[i].length; j++) {
            //Checks if we need to ban an index
            if (matrix[i][j] === 0) {
                bannedIndex.push(j);
            }
            //If index is not banned add the value to total
            else if (bannedIndex.indexOf(j) === -1) {
                priceTotal += matrix[i][j];
            }
        }
    }
    return priceTotal;
}