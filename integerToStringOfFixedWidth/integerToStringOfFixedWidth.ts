function integerToStringOfFixedWidth(number: number, width: number): string {
    let stringifiedNum = number.toString();
    const numberWidth = stringifiedNum.length;
    const widthDiff = width - numberWidth;

    if (numberWidth < width) {
        // padStart() does not work quite yet on CodeFights apparently or would have used it
        let padStart = '';

        for (let i = 0; i < widthDiff; i++) {
            padStart = padStart.concat('0');
        }

        return padStart.concat(stringifiedNum)
    }

    if (numberWidth < width) {

        return stringifiedNum.substring(widthDiff, stringifiedNum.length);
    }

    return stringifiedNum;
}
