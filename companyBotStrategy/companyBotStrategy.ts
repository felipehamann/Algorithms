function companyBotStrategy(trainingData: number[][]): number {
    let time = 0;
    let correctness = 0;

    trainingData.forEach((data: number[]) => {
        if (data[1] === 1) {
            time += data[0];
            correctness += data[1];
        }
    });

    return time / correctness || 0;
}
