function electionsWinners(votes: number[], k: number): number {
    const mostVotes: number = Math.max(...votes);
    let inTheRunningCount: number = 0;
    const sortedVotes: number[] = votes.sort((a, b) => { return b - a; });

    if (sortedVotes[0] !== sortedVotes[1] && k === 0) {
        return 1;
    }

    votes.forEach((voteCount: number) => {
        if (mostVotes - voteCount < k) {

            inTheRunningCount++;
        }
    });

    return inTheRunningCount;
}

