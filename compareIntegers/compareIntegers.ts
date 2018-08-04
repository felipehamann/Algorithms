function compareIntegers(a: string, b: string): string {
    return parseInt(a) > parseInt(b) ? 'greater' : parseInt(a) < parseInt(b) ? 'less' : 'equal';
}
