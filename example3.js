/*
1. Template literals (ký tự chuỗi)
2. Multiple line 
3. Destructuring (phân dã)
4. Rest
5. Spread
*/

//template
const courseName = "Javascript";
const description = "Course name: " + course;
console.log(description);

const desc = `Course name: ${courseName}  ${description} \${}`;
console.log(desc);

//multiple line
const lines =
  "line 1\n\
line 2";
const lines2 = `Line 1
Line 2
Line 3`;
console.log(lines);
console.log(lines2);

//destructuring phân dã

var array = ["javascript", "php", "ruby"];
// var a1 = array[0];
// var a2 = array[1];
// var a3 = array[2];

//var [a1, a2, a3] = array;
var [a1, a2, a3] = array;

console.log(a1, a2, a3);

let aa1 = 1;
let aa2 = 2;
[aa2, aa1] = [aa1, aa2];
console.log("swap", aa1, aa2);

//rest
var [course2, ...rest] = array;
console.log(course2);
console.log(rest);

//spread

function logger2(...param) {
  console.log(param);
}
logger2(1, 2, 3, 4);

function sum(a, b) {
  return a + b;
}

console.log("sum(1, 2) =", sum(1, 2));

function sum2(...a) {
  let s = 0;
  for (let i = 0; i < a.length; i++) {
    s = s + a[i];
  }
  return s;
}

console.log("sum2(1, 2, 3, 4) =", sum2(1, 2, 3, 4));

var arr1 = ["javascript", "ruby", "php"];
var arr2 = ["reactjs", "java"];
var arr3 = [...arr2, ...arr1];

console.log(arr3);

console.log("arr1.concat(arr2) =", arr1.concat(arr2));

// vi du su dung spread voi object
var defaultConfig = {
  api: "https://domain-fpt-poly",
  apiVersion: "v1",
  other: "other",
};

var newConfig = {
  ...defaultConfig,
  api: "https://domain-polytechnic",
};
console.log(newConfig);
