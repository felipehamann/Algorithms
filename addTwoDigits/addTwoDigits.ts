function addTwoDigits(n: number): number {
    const nums = n.toString().split('');

    return parseInt(nums[0]) + parseInt(nums[1]); 
    }