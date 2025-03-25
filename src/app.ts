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

console.log("*****************FUNCTIONS******************************");
//Functions

//Function with optional parameter

type FuncType = (a: number, b: number, c?: number) => number;

const add: FuncType = (a, b, c) => {
  if (typeof c === "undefined") {
    return a + b;
  } else {
    return a + b + c;
  }
};

console.log(add(1, 2));
console.log(add(1, 2, 3));

//Function with default parameter via type alias

type FuncType1 = (a: number, b: number, c?: number) => number;

const add1: FuncType1 = (a, b, c = 20) => {
  return a + b + c;
};

console.log(add1(1, 2));
console.log(add1(1, 2, 3));

//Function with default parameter inline

const add2 = (a: number, b: number, c: number = 20): number => {
  return a + b + c;
};

console.log(add2(10, 25));
console.log(add2(10, 20, 30));

//Function with rest operator

type Rest = (...num: number[]) => number;
const restFunc: Rest = (...num): number => {
  let res: number = 1;
  num.forEach((n) => {
    res = res * n;
  });

  return res;
};

console.log(restFunc(1, 2, 3, 4, 5));
console.log(restFunc(10, 20, 30, 40));

//Function with objects

type Product = {
  id: number;
  name: string;
  imageUrl: string;
  quantity: number;
  manufacturingDate: Date;
};

type GETProductData = (product: Product) => Product;

const getData: GETProductData = (product) => {
  return product;
};

console.log(
  getData({
    id: 101,
    name: "Mac",
    imageUrl: "someURL",
    quantity: 10,
    manufacturingDate: new Date(),
  })
);

console.log("*****************CLASS******************************");

class Employee {
  id: number;
  firstName: string;
  lastName: string;
  department: string;
  private salary: number;
  dateOfBirth: Date;

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    department: string,
    salary: number,
    dob: Date
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.department = department;
    this.salary = salary;
    this.dateOfBirth = dob;
  }

  getEmpDetails = (): string => {
    return `${this.firstName} - ${this.lastName} - ${this.department}`;
  };

  getSalary = (): number => {
    return this.salary;
  };
}

const employee1 = new Employee(101, "John", "Cena", "IT", 20000, new Date());
//console.log("Emp1 Salary", employee1.salary); // private, is not accessible
console.log("Emp1 salary", employee1.getSalary());
console.log("Emp1 Details", employee1.getEmpDetails());
