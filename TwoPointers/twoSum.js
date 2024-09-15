var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    
    while (left < right) {
        let sum = numbers[left] + numbers[right];
        
        if (sum === target) {
            return [left + 1, right + 1]; // Adding 1 to convert from 0-based to 1-based index
        } else if (sum < target) {
            left++; // Move left pointer to the right to increase the sum
        } else {
            right--; // Move right pointer to the left to decrease the sum
        }
    }
    
    // If we reach here, there was no valid pair found (should not happen with valid input)
    return [];
};
