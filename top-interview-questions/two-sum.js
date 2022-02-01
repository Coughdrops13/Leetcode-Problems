const nums = [2,3,4,5,6];
const target = 11;

const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        const output = [i, j];
        return output;

      }
    }
  }
}

console.log(twoSum(nums, target));