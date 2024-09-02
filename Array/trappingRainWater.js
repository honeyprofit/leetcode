   let left = 0, right = height.length - 1;  // 포인터 초기화
    let left_max = 0, right_max = 0;  // 최대 높이 초기화
    let water_trapped = 0;  // 고인 물의 총량

    while (left < right) {  // 포인터가 만나지 않는 동안 반복
        if (height[left] < height[right]) {
            // 왼쪽이 낮은 경우
            if (height[left] >= left_max) {
                left_max = height[left];  // 새로운 최대값 설정
            } else {
                water_trapped += left_max - height[left];  // 물의 양 계산
            }
            left++;  // 왼쪽 포인터 이동
        } else {
            // 오른쪽이 낮은 경우
            if (height[right] >= right_max) {
                right_max = height[right];  // 새로운 최대값 설정
            } else {
                water_trapped += right_max - height[right];  // 물의 양 계산
            }
            right--;  // 오른쪽 포인터 이동
        }
    }

    return water_trapped;  // 총 고인 물의 양 반환
};
