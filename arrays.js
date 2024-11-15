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
