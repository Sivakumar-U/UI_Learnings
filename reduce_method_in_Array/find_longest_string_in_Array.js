var words = ["Hello", "World", "Javscript", "HTML", "Jsp", "React"];
var res = words.reduce((longest, word) =>
  word.length > longest.length ? word : longest
);
console.log(res);
