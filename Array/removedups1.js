/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 1;

    for(let i=0; i<nums.length-1; i++){
        let j = i+1;
        if(nums[i]!=nums[j]){
            nums[k]=nums[j];
            k++;
        }
    }

    return k;  
};
