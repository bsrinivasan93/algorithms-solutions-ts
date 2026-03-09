function findMissingNumber(nums: number[]): number {
    const n = nums.length;
    var missingNum = n;
    for(var i=0; i<n; i++) {
        missingNum = missingNum ^ i;
        missingNum = missingNum ^ nums[i];
    }
    return missingNum;
}

var strings: number[] = [3,0,1];
var nums2: number[] = [0,1];
var nums3: number[] = [9,6,4,2,3,5,7,0,1];
console.log(findMissingNumber(nums3));