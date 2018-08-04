//Check out My YouTube Channel https://www.YouTube.com/CodingTutorials360
//Video Walkthrough - https://www.youtube.com/watch?v=opHFArgojyk
function depositProfit(deposit, rate, threshold) {
    let year = 0;

    while (threshold > deposit) {
        deposit += deposit * (rate / 100);
        year++;
    }

    return year;
}