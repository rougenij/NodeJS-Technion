let nums = [0, 0, 10, 20, 30, 40, 50];
let count = 0;

for (let i = 0; i < nums.length; i++) count = nums[i] == 0 ? ++count : count;

console.log("Number of 0 in array = " + count);
