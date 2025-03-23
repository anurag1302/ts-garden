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
