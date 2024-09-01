/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const n = ratings.length;
    const candies = new Array(n).fill(1);
    
    // 왼쪽에서 오른쪽으로 스캔
    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }
    
    // 오른쪽에서 왼쪽으로 스캔
    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i], candies[i + 1] + 1);
        }
    }
    
    // 사탕의 총합 계산
    return candies.reduce((a, b) => a + b, 0);
};
