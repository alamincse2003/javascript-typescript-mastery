function outer() {
  const name = "Closure Example";

  function inner() {
    console.log(name);
  }
  return inner;
}

const fn = outer();
fn(); // Output: "Closure Example"
// Explanation:
// In this example, the `outer` function defines a variable `name` and an inner function `inner` that accesses this variable. When `outer` is called, it returns the `inner` function, which retains access to the `name` variable even after `outer` has finished executing. This is a demonstration of a closure, where the inner function "closes over" the variables of its outer function.

for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
// Output: 3, 3, 3

for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

// Output: 0, 1, 2
