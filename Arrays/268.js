let missingNumber = function (nums) {
  let targetSum = (nums.length * (nums.length + 1)) / 2;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) sum += nums[i];

  return targetSum - sum;
};

console.log(missingNumber([3, 0, 1]));
