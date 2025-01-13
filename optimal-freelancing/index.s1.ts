export const optimalFreelancing = (jobs: { deadline: number, payment: number }[]): number => {
    let profit = 0;
    const MAX_DAYS = 7;
    const sorted = jobs.sort((a, b) => a.payment - b.payment);
    const works = new Array(MAX_DAYS).fill(0);
    
    while (sorted.length) {
        const job = sorted.pop();
        if (!job) {
            break;
        }

        let jobIndex = (job.deadline - 1) < MAX_DAYS ? (job.deadline - 1) : 6;

        while(jobIndex >= 0) {
            if (!works[jobIndex]) {
                break;
            }   

            jobIndex--;
        }

        if (jobIndex < 0) {
            continue;
        }

        works[jobIndex] = 1;
        profit += job.payment;
    }
    
    return profit;
}