// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const inception = () => {
  const outerLayer = "No. Not there yet.";
  console.log('Are we there yet?', outerLayer);
  inner();

  function inner() {
    const innerLayer = "We're here. Hurry up.";
    console.log("You guys out there okay?", outerLayer);
    console.log("Oh crap, well...", innerLayer);
  }
}

inception();


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let counter = 0;
  return function() {
    return counter += 1;
  }
};

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

const newCounter = counter();
console.log(newCounter());
console.log(newCounter());

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0
  return {
    increment: function() {
      return count += 1
    },
    decrement: function() {
      return count -= 1
    }
  }
};

const newCounterFac = counterFactory();
console.log(newCounterFac.increment());
console.log(newCounterFac.increment());
console.log(newCounterFac.increment());
console.log(newCounterFac.increment());
console.log(newCounterFac.increment());
console.log(newCounterFac.decrement());
console.log(newCounterFac.decrement());
console.log(newCounterFac.decrement());
console.log(newCounterFac.decrement());
