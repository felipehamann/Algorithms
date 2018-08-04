function arrayReplace(inputArray: number[], elemToReplace: number, substitutionElem: number): number[] {
    inputArray.forEach((element, index) => {
        if (element === elemToReplace) {
            inputArray[index] = substitutionElem;
        }
    });

    return inputArray;
}