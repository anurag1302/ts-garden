"use strict";
const func = (a, b) => {
    return a * b;
};
const func2 = (a, b) => {
    return a + b;
};
//Arrays
const arr1 = ["a", "b", "c"];
const arr2 = [1, 2, 3];
const arr3 = ["A", 10, "B", 20];
console.log("*****************ARRAYS******************************");
arr1.forEach((item) => {
    console.log(item.toLocaleUpperCase());
});
arr2.forEach((item) => {
    console.log(item * 2);
});
arr3.forEach((item) => {
    console.log(item);
});
console.log("*****************FUNCTIONS******************************");
console.log(func(10, 20));
console.log(func2(10, 30));
