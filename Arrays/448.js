const findDisappearedNumbers = function (nums) {
  let uniqueNums = new Set(nums);
  let output = [];

  for (let i = 1; i <= nums.length; i++) {
    if (!uniqueNums.has(i)) {
      output.push(i);
    }
  }

  return output;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
