/*
Giới thiệu về function
- Declaration
- function expression
- arrow function
- anonymous function

*/
//declaration
function calAge1(birthYear) {
  return 2023 - birthYear;
}
//function expression
const calAge2 = function (birthYear) {
  return 2023 - birthYear;
};
//arrow function
const calAge3 = (birthYear) => 2022 - birthYear;

console.log(calAge1(1990));
console.log(calAge2(2010));
console.log(calAge3(1989));

//anonymous function
(() => {
  console.log("anonymous fn: hello");
})();

const logger = (log) => console.log(log);
logger("Message...");
