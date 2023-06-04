/*
1. Giới thiệu ES6
2. Cách sử dụng var, let, const
3. Cách dùng khác thay thế cho if-else
*/

//1. Var / let, const: khách nhau scope, hosting
//2. Const / var, let: khác nhau Assignment

//var, let - assignment
const a = 10;
console.log(a);

let b = 10;
b = 20;
console.log(b);

let isSuccess = false;
if (true) {
  isSuccess = true;
}
console.log(isSuccess);

//Cách dùng if-else
if (true) {
  var course = "Javascript basic";
}

console.log(course);

//3. Cách dùng khác thay thế cho if-else
// let xx = 1;
// let yy = 0;
// let zz = 2;

// falsy: 0, null, undefined, false, ...
// neu gia tri truoc dung thi lay gia tri cuoi cung
// console.log(xx && yy);

// lay gia trị đầu tiên đúng
// console.log("xx || yy = ", xx || yy);
// console.log("yy || xx = ", yy || xx);

// lấy giá trị đầu tiên != null, undefined (nullish)
// console.log("xx ?? yy = ", xx ?? yy);
// console.log("yy ?? xx = ", yy ?? xx);

// if (!yy) {
//   console.log(xx);
// }

// console.log("yy || xx = ", yy || xx);
