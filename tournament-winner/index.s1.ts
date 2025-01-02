export const tournamentWinner = (competitions: string[][], results: number[]): string => {
    const size = competitions.length;
    
    const competitors = new Map<string, number>();

    let globalWinner = '';
    let biggerValue = 0;

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

        value++;
        competitors.set(winner, value);

        if (value > biggerValue) {
            biggerValue = value;
            globalWinner = winner;
        }
    }


    return globalWinner;
}