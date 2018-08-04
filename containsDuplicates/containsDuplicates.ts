function containsDuplicates(a: number[]): boolean {
    a = a.sort((a, b) => {
        return a - b;
    });
 
    for (let i = 0; i < a.length; i++) {
        if (a[i] === a[i + 1]) {
            return true;
        }
    }

    return false;
}
