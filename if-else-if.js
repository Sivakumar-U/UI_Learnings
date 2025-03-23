// Logical Operators: AND(&&) means all consitions must be valid, OR(||), Not(!)

var ch = "#";
if (ch >= "A" && ch <= "Z") console.log("Uppercase alphabet");
else if (ch >= "a" && ch <= "z") console.log("Lowercase alphabet");
else if (ch >= "0" && ch <= "9") console.log("digit");
else console.log("symbol");
