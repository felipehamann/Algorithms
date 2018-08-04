function houseOfCats(legs: number): number[] {
    const peopleCount: number[] = [];

    if (legs === 2) {
        peopleCount.push(1);
        return peopleCount;
    }

    while (legs >= 0) {
        peopleCount.unshift(legs / 2);
        legs -= 4;
    }



    return peopleCount;
}