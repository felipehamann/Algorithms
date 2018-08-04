function arrayConversion(inputArray: number[]): number {
    let iteration = true;

    while (inputArray.length !== 1) {
        inputArray = sumProduct(inputArray, iteration);
        iteration = !iteration;
    }

    return inputArray[0];
}

function sumProduct(nums: number[], sum: boolean): number[] {
    const sumProducts: number[] = [];

    if (sum) {
        for (let i = 0; i < nums.length; i += 2) {
            sumProducts.push(nums[i] + nums[i + 1]);
        }
    } else {
        for (let i = 0; i < nums.length; i += 2) {
            sumProducts.push(nums[i] * nums[i + 1]);
        }
    }

    return sumProducts;
}