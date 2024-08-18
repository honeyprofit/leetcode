/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0;
    let majority = 0;

    for(n of nums){
        if(count == 0){
            majority = n;
            count++;
        }else{
            if(n == majority){
                count++;
            }else{
                count--;
            }
        }    
    }

    return majority;
};
