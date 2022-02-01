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

// The following was copied from https://redquark.org/leetcode/0001-two-sum/


// var twoSum = function (nums, target) {
//   // Array to store the result
//   result = [];
//   // Map to store the difference and its index
//   index_map = new Map();
//   // Loop for each element in the array
//   for (let i = 0; i < nums.length; i++) {
//       let difference = target - nums[i];
//       if (index_map.has(difference)) {
//           result[0] = i;
//           result[1] = index_map.get(difference);
//           break;
//       } else {
//           index_map.set(nums[i], i);
//       }
//   }
//   return result;
// };