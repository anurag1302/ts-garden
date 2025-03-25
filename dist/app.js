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
const getData = (product) => {
    return product;
};
console.log(getData({
    id: 101,
    name: "Mac",
    imageUrl: "someURL",
    quantity: 10,
    manufacturingDate: new Date(),
}));
console.log("*****************CLASS******************************");
class Employee {
    constructor(id, firstName, lastName, department, salary, dob) {
        this.getEmpDetails = () => {
            return `${this.firstName} - ${this.lastName} - ${this.department}`;
        };
        this.getSalary = () => {
            return this.salary;
        };
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.department = department;
        this.salary = salary;
        this.dateOfBirth = dob;
    }
}
const employee1 = new Employee(101, "John", "Cena", "IT", 20000, new Date());
//console.log("Emp1 Salary", employee1.salary); // private, is not accessible
console.log("Emp1 salary", employee1.getSalary());
console.log("Emp1 Details", employee1.getEmpDetails());
class Vehicle {
    constructor(id, name, type) {
        this.id = id;
        this.name = name;
        this.type = type;
    }
}
const car = new Vehicle(101, "MyCar", "Car");
console.log(car.id);
//car.id = 102; //not allowed, because id is readonly
