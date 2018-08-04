function launchSequenceChecker(systemNames: string[], stepNumbers: number[]): boolean {
    const launchCodes = {};

    for (let i = 0; i < systemNames.length; i++) {
        if (launchCodes.hasOwnProperty(systemNames[i])) {
            if (launchCodes[systemNames[i]] >= stepNumbers[i]) {
                return false;
            }
            launchCodes[systemNames[i]] = stepNumbers[i];
        } else {
            launchCodes[systemNames[i]] = stepNumbers[i];
        }
    }

    return true;
}
