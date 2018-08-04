function findClosestPair(numbers: number[], sum: number): number {
    let distance = -1;

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length - 1; j++) {
            const distanceSum = numbers[i] + numbers[j];
            const absDistance = Math.abs(i - j);

            if (sum === distanceSum) {
                if (distance === -1 || absDistance < distance)
                    distance = absDistance;
            }
        }

    }

    return distance;
}