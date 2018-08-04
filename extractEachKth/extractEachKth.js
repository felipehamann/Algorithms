function extractEachKth(inputArray, k) {

    return inputArray.filter((element, index) => (index + 1) % k !== 0);
}