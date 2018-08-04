//Check out My YouTube Channel https://www.YouTube.com/CodingTutorials360
//Video Walkthrough - https://www.youtube.com/watch?v=mmPOCGRLgeA
function boxBlur(image) {
    const res = [];

    for (let y = 0; y < image.length - 2; y++) {
        const line = [];

        for (let x = 0; x < image[y].length - 2; x++) {
            let sum = 0;
            let count = 0;

            for (let a = y; a < y + 3; a++) {
                for (let b = x; b < x + 3; b++) {
                    sum += image[a][b];
                    count++;
                }
            }

            line.push(Math.floor(sum / count));
        }

        res.push(line);
    }

    return res;
}