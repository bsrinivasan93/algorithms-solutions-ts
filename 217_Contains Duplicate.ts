function containsDuplicate(nums: number[]): boolean {
  const seenSet: Set<number> = new Set();
  for(const num of nums) {
    if(seenSet.has(num))
        return true;
    seenSet.add(num);
  }
  return false;
};

function containsDuplicate2(nums: number[]): boolean {
  const uniqueSet: Set<number> = new Set(nums);
  return uniqueSet.size < nums.length;
};

var nums: number[] = [1,2,3,1];
var nums2: number[] = [1,2,3,4];
var nums3: number[] = [1,1,1,3,3,4,3,2,4,2];
console.log(containsDuplicate(nums3));