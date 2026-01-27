function twoSum(nums: number[], target: number): number[] {
    const originalNums = [...nums];
    nums.sort((a, b) => a - b);
    var lIndex: number = 0;
    var rIndex: number = nums.length-1;
    console.debug(`Sorted nums: ${nums}`);
    console.debug(`lIndex ${nums[lIndex]} rIndex ${nums[rIndex]} Target: ${target}`);
    
    while(lIndex < rIndex){
        const sum = nums[lIndex] + nums[rIndex];
        if(sum > target){
            rIndex--;
        } else if(sum < target) {
            lIndex++;
        } else {
            break;
        }
        console.debug(`lIndex ${nums[lIndex]} rIndex ${nums[rIndex]} Target: ${target}`);
    }
    return [originalNums.indexOf(nums[lIndex]), originalNums.lastIndexOf(nums[rIndex])];
}

function twoSumMemoryEfficient(nums: number[], target: number): number[] {
    const complementMap: Map<number, number> = new Map();
    for(const [index, num] of nums.entries()) {
        console.debug(`ind ${index} num ${num}`);
        const complement = target-num;
        if(complementMap.has(complement)) {
            return [complementMap.get(complement), index];
            }
        complementMap.set(num, index);
        console.debug(`ind ${index} map `, [complementMap]);
    }
    return [-1, -1];
}

var nums: number[] = [3,3];
var target = 6; 
var res = twoSumMemoryEfficient(nums, target);
console.log(res);
