function isMAC48Address(inputString: string): boolean {
    const pairs: string[] = inputString.toUpperCase().split('-');
    const availableChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        'A', 'B', 'C', 'D', 'E', 'F'
    ];
    
    if (pairs.length > 6 || pairs.length < 6) {
        return false;
    }

    for (const char of pairs) {
        if (char.trim().length > 2 || char.trim().length <= 1) {
            return false;
        }
    }

    const singleChars = pairs.join('').split('');

    for (let char of singleChars) {
        if (!availableChars.includes(char)) {
            console.log(char);
            return false;
        }
    }

    return true;
}
