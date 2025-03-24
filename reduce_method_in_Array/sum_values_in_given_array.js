/* reduce(): The reduce() method reduces an array of values down to just one value. 
To get the output value, it runs a reducer function on each element of the array.

accumulator - the returned value of the previous iteration
*/

var nums = [3, 7, 2, 8, 4, 5, 6];
var sum = nums.reduce((accumulator, number) => accumulator + number, 0);
console.log(sum); // 0   +   3   =   3
// 3   +   7   =   10
// 10  +   2   =   12
// 12  +   8   =   20
// 20  +   4   =   24
// 24  +   5   =   29
// 29  +   6   =   35
