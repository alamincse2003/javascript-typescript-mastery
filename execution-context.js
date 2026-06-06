const name = "Al Amin";

function greet() {
  const message = "Hello";
  console.log(message);
}

greet();

// function execution context

function add(x, y) {
  return x + y;
}

const result = add(5, 3);
console.log(result);

function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
