"use strict"; // enable modern Javascript modifications

/**********************************************************
 * Arrays
 **********************************************************/

// create an empty array
let fruits = [];

// create an array with elements
fruits = ["apple", "banana", "cherry"];

// arrays are zero-indexed
console.log(fruits[1]); // banana

// use .length to get the number of elements
console.log(fruits.length); // 3

// elements can be added to arrays (unlike Java)
fruits[3] = "date";
console.log(fruits);
console.log(fruits.length); //  length 4

// elements can be of any type
const arr = [1, "two", true, { name: "Callaghan" }, fruits];
console.log(arr);

fruits[11] = "fig";
console.log(fruits);
console.log(fruits[7]); // undefined
console.log(fruits.length); // 12

// arrays have methods like stacks and queues
// use .push and .pop to treat an array like a stack (fast)
fruits.pop(); // remove the last element
fruits.push("blueberry"); // add the element to end
console.log(fruits);

// we can treat an array like a queue
//  use .pop, to remove from the head of the queue,
//  and .unshift (slow), to add to the tail of the queue
fruits.unshift("apricot"); // add the element to the tail of the queue
fruits.pop(); // remove element from head of the queue
console.log(fruits);

// for ... of
//  enhanced for loop in js
for (const fruit of fruits) {
  console.log(fruit);
}

// the following function is used to create an object from a string value
//  that will be assigned to the name property
function createFruitObjectFromName(item) {
  return { name: item };
}

// map invokes the specified function for each element and returns the
//  resulting array. Here is the implementation of the map method:

// function map(list) {
//   const result = [];
//   for (const item of list) {
//     result.push(createFruitObjectFromName(item));
//   }
//   return result;
// }

// console.log(map(fruits));

//  map is very useful for creating an array of objects from an array of values
let fruitObjects = fruits.map(createFruitObjectFromName);
console.log(fruitObjects);

/*
 * Arrow functions are typically used in these cases.
 *  Here is the previous example using an arrow function:
 */
fruitObjects = fruits.map((item) => ({ name: item }));
console.log(fruitObjects);

const capFruits = fruits.map((item) => item.toUpperCase());
console.log(capFruits);

// or the other way around...
console.log(fruitObjects.map((item) => item.name));

/**
 * there are other array methods such as:
 *  splice, slice, and concat;
 *  indexOf, includes, find, and filter;
 *  sort, split, join, and reduce
 */
