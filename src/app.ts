type numbers = (a: number, b: number) => number; //type aliases

const func = (a: number, b: number): number => {
  return a * b;
};

const func2: numbers = (a, b) => {
  return a + b;
};

console.log(func(10, 20));
console.log(func2(10, 30));
