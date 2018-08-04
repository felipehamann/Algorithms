function mostFrequentDigitSum(n: number): number {
    let numsCount: any = {};
    let largestCount: number = 0;
    let largestKey: number = 0;

    while (n > 0) {
        let count = 0;
        const digits = n.toString().split('');

        digits.forEach((element) => count += parseInt(element));

        if (numsCount.hasOwnProperty(count)) {
            numsCount[count]++;
        } else {
            numsCount[count] = 1;
        }

        n -= count;
    }

    for (let key in numsCount) {
        if (numsCount[key] >= largestCount) {

            largestCount = numsCount[key];
            largestKey = parseInt(key);
        }
    }

    return largestKey;
}