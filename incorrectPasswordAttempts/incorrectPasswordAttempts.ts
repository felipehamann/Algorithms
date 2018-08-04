function incorrectPasscodeAttempts(passcode: string, attempts: string[]): boolean {
    let count = 0;

    for (let attempt of attempts) {
        count = attempt === passcode ? 0 : count++;

        if (count === 10) {
            return true
        }
    };

    return false;
}
