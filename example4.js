/*
1. READ - Duyệt mảng sử dụng
- for in
- for of
- map
- forEach
2. ADD - Thêm phần tử vào mảng sử dụng
- push (mutable object tham chiếu)
- spread (immutable object tạo mới, không ảnh hưởng đến object )
3. FIND - Tìm kiếm sử dụng
- findIndex
- find
4. EDIT - Chỉnh sửa giá trị trong mảng khi đã tìm đc index
5. DELETE - Xoá phần tử trong mảng sử dụng
- slice
- filter
*/
//Duyệt mảng
//for in
var myInfo = {
  name: "kat",
  age: 18,
  address: "HN",
};
for (var key in myInfo) {
  console.log(myInfo[key]);
}
var language = ["javascrip", "ruby", "php"];
for (var key in language) {
  console.log(`for in: ${language[key]}`);
}
//for of
console.log(`for of: `);
for (var value of language) {
  console.log(value);
}
//map

function languageHandler(language) {
  console.log(language);
}

var newLanguage = language.map(languageHandler);
//for each
language.forEach(function (course, index, aray) {
  console.log(language, index, array);
});

console.log("---------------------");
console.log("ForEach:");
language.forEach((item) => console.log(item));
console.log("--------foreach demo");
language.forEach((item, idx, arr) => {
  console.log(idx);
});

console.log("---------------map");
//map
const lang2 = language.map((item, idx, arr) => {
  const x = `${item} + ${idx}`;

  return x;
});
console.log(lang2);

// console.log("---------------cb");

// function cbFn(a, b, c) {
//   console.log("callback", a, b, c);
//   return a + b;
// }

// function forEach(cb) {
//   console.log("demo");
//   const x = 2,
//     y = 3,
//     z = 4;
//   cb(x, y, z);
// }

// demoFn(cbFn);

// demoFn();

//ADD
//push, spread
console.log("---------------push");
let arr = [1, 2, 3, 4, 5];
let brr = arr;

// reference, mutable object (tham chiếu)
arr.push(6);

console.log("arr", arr);
console.log("brr", brr);

let arr_1 = [1, 2, 3, 4, 5];
let brr_1 = arr_1;

// immutable object (tạo mới, không ảnh hưởng đến object brr_1)
arr_1 = [...arr_1, 6];
arr_1 = [6, ...arr_1];

arr_1 = [...arr_1.slice(0, 3), 6, ...arr_1.slice(3)];
console.log("brr_1", brr_1);

console.log("arr_1", arr_1);

console.log("---------------search");
// tim theo gia tri => vi tri
const found_idx = arr_1.findIndex((value) => value === 4);
console.log("found idx", found_idx);

const arr_2 = [
  {
    name: "Katty",
    age: 19,
  },
  {
    name: "Van Anh",
    age: 20,
  },
];

// tim kiem => vi tri
let found = arr_2.findIndex((value) => value.name === "Van Anh");
console.log("found", found);
console.log("age", arr_2[found].age);

// tim kiem => gia tri
found = arr_2.find((value) => value.name === "Van Anh");
console.log("found", found.age);

//EDIT
console.log("---------------edit");
found.name = "Vanh";

console.log("arr_2", arr_2);

//DELETE
console.log("---------------delete");
console.log(arr_1);
// [0, 3) .. [4, Length]
let arr_3 = [...arr_1.slice(0, 3), ...arr_1.slice(4)];

console.log(arr_3);
// filter cac gia tri != 3
let arr_4 = arr_1.filter((value) => value !== 3);
console.log(arr_4);
