var minSubArrayLen = function(target, nums) {
    let left = 0; // 윈도우의 왼쪽 포인터
    let sum = 0;  // 현재 윈도우의 합
    let minLength = Infinity;  // 최소 길이를 저장할 변수 (초기에는 매우 큰 값)

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];  // 윈도우에 새로운 요소 추가

        // 합이 target 이상이 되면 윈도우를 축소하면서 최소 길이 계산
        while (sum >= target) {
            minLength = Math.min(minLength, right - left + 1);  // 최소 길이 갱신
            sum -= nums[left];  // 윈도우 왼쪽 요소 제거
            left++;  // 왼쪽 포인터 이동
        }
    }

    return minLength === Infinity ? 0 : minLength;  // 조건을 만족하는 서브배열이 없는 경우 0을 반환
};
