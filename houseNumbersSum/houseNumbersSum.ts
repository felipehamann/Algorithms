function houseNumbersSum(inputArray: number[]): number {
    let total: number = 0;

    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] === 0) {
            return total;
        }

        total += inputArray[i];
    }

    return total;
}