var nums = [1, 2, 3, 4, 5];
var copy = [...nums];
console.log(nums);
console.log(copy);

// Here, using index num of nums and copy array we are modifying the values in the both arrays.
nums[3] = nums[3] + 4;
copy[2] = copy[4] + 2;
console.log(nums);
console.log(copy);
