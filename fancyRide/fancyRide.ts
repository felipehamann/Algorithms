function fancyRide(l: number, fares: number[]): string {
    const rides: string[] = ['UberX', 'UberXL', 'UberPlus', 'UberBlack', 'UberSUV'];

    for (let i = fares.length - 1; i >= 0; i--) {

        if (fares[i] * l <= 20) {
            return rides[i];
        }
    }
}
