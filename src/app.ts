type numbers = (a: number, b: number) => number; //type aliases

const func = (a: number, b: number): number => {
  return a * b;
};

const func2: numbers = (a, b) => {
  return a + b;
};

//Arrays

const arr1: string[] = ["a", "b", "c"];
const arr2: Array<number> = [1, 2, 3];
const arr3: Array<string | number> = ["A", 10, "B", 20];

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
//Objects
type details = {
  firstName: string;
  lastName: string;
  gender: string;
  salary: number;
  isAdmin: boolean;
  dateOfBirth: Date;
  getFullAddress: (city: string, country: string) => string;
};

const emp1: details = {
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

const emp2: details = {
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

console.log(
  "*****************OBJECTS VIA INTERFACES******************************"
);

interface employeeDetails {
  firstName: string;
  lastName: string;
  gender: string;
  salary: number;
  isAdmin: boolean;
  dateOfBirth: Date;
  getFullAddress: (city: string, country: string) => string;
}

interface newEmployeeDetails extends employeeDetails {
  state: string;
  country: string;
}

const emp3: newEmployeeDetails = {
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
