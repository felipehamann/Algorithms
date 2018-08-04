function firstNotRepeatingCharacter(s: string): string {
    const arrayOfChars: string[] = s.split('');
    let duplicates: any = {};
    let answer: string = '_';
    let indexAnswer: number = Number.MAX_SAFE_INTEGER;

    arrayOfChars.forEach((element, index) => {
        if (!duplicates.hasOwnProperty(element)) {
            duplicates[element] = {
                count: 1,
                index
            };
        } else {
            duplicates[element].count++;
            duplicates[element].index = index;
        }
    });

    for (const key in duplicates) {
        if (duplicates[key].count === 1 && duplicates[key].index < indexAnswer) {
            answer = key;
            indexAnswer = duplicates[key].index;
        }
    }

    return answer;
}


