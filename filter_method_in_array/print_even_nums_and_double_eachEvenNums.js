var nums = [3, 7, 2, 8, 4, 5, 6];
var evenDoubles = nums.filter((n) => n % 2 == 0).map((n) => n + n);
console.log(evenDoubles);
