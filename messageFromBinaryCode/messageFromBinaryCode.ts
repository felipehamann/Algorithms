function messageFromBinaryCode(code: string): string {
    let stringArray = [];

    for (let i = 0; i < code.length; i += 8) {
        stringArray.push(binaryCharToString(code.substring(i, i + 8)));
    }

    return stringArray.join('');
}

function binaryCharToString(binarySnip: string): string {

    return String.fromCharCode(parseInt(binarySnip, 2));
}
