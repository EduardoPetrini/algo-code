export const tournamentWinner = (competitions: string[][], results: number[]): string => {
    const size = competitions.length;

    const competitors = new Map<string, number>();

    let globalWinner = '';
    competitors.set(globalWinner, 0);

    for (let index = 0; index < size; index++) {
        const matchResult = results[index];
        const [home, away] = competitions[index];
        let winner = home;

        if (matchResult === 0) {
            winner = away;
        }

        let value = competitors.get(winner);
        if (!value) {
            value = 0;
        }

        value += 3;
        competitors.set(winner, value);
        
        const currentBigestValue = competitors.get(globalWinner) || 0
        if (value > currentBigestValue) {
            globalWinner = winner;
        }
    }


    return globalWinner;
}