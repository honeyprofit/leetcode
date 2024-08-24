function hIndex(citations: number[]): number {
    citations.sort((a, b) => b - a);

    for (let i = 0; i < citations.length; i++) {
        if (citations[i] < i + 1) {
            return i;
        }
    }

    return citations.length;
}

let citations1: number[] = [4, 0, 6, 1, 5];
console.log(hIndex(citations1)); // Output: 3
