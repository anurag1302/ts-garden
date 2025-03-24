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
console.log("*****************OBJECTS******************************");
const emp1 = {
    firstName: "John",
    lastName: "Cena",
    gender: "Male",
    salary: 12000.89,
    isAdmin: false,
    dateOfBirth: new Date(),
    getFullAddress: (city, country) => {
        return city + "-" + country;
    },
};
const emp2 = {
    firstName: "Mary",
    lastName: "Jane",
    gender: "Female",
    salary: 13000,
    isAdmin: true,
    dateOfBirth: new Date(),
    getFullAddress: (city, country) => {
        return city + "-" + country;
    },
};
console.log(emp1);
console.log(emp2.getFullAddress("Delhi", "India"));
console.log("*****************OBJECTS VIA INTERFACES******************************");
const emp3 = {
    firstName: "Dave",
    lastName: "Sam",
    gender: "Male",
    salary: 15000,
    isAdmin: false,
    dateOfBirth: new Date(),
    state: "NY",
    country: "US",
    getFullAddress: (city, country) => {
        return city + "-" + country;
    },
};
console.log(emp3);
console.log(emp3.getFullAddress("Chicago", "USA"));
console.log("*****************FUNCTIONS******************************");
const add = (a, b, c) => {
    if (typeof c === "undefined") {
        return a + b;
    }
    else {
        return a + b + c;
    }
};
console.log(add(1, 2));
console.log(add(1, 2, 3));
const add1 = (a, b, c = 20) => {
    return a + b + c;
};
console.log(add1(1, 2));
console.log(add1(1, 2, 3));
//Function with default parameter inline
const add2 = (a, b, c = 20) => {
    return a + b + c;
};
console.log(add2(10, 25));
console.log(add2(10, 20, 30));
const restFunc = (...num) => {
    let res = 1;
    num.forEach((n) => {
        res = res * n;
    });
    return res;
};
console.log(restFunc(1, 2, 3, 4, 5));
console.log(restFunc(10, 20, 30, 40));
