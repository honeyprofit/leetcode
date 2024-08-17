function majorityElement(nums: number[]): number {
    
    let count1 = 0;
    let count2 = 0;
    let first = nums[0];
    let second = 0;

    for(let n of nums){
        if(n == first){
            count1++;
        }else{
            count2++;
            second = n;
        }
    }

    return (count1>count2)? first : second;
};
