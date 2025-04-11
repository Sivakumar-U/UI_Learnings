/* filter(): The filter() method takes each element in an array and it applies a conditional statement against it. 
If this conditional returns true, the element gets pushed to the output array. 
If the condition returns false, the element does not get pushed to the output array.*/

var nums = [3, 7, 2, 8, 4, 5, 6];
var evens = nums.filter((n) => n % 2 == 0);
console.log(evens);
