function firstDuplicate(a: number[]): number {
    const smallestIndex = {};

    for (let i = 0; i < a.length; i++) {
        if (smallestIndex.hasOwnProperty(a[i])) {
            return a[i];
        }
        else {
            smallestIndex[a[i]] = a[i];
        }
    }

    return -1;
}
