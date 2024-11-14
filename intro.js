"use strict"; // enable modern Javascript modifications

/* eslint-disable no-constant-condition */

/**********************************************************
 * Output to the terminal
 **********************************************************/
// Javascript uses console.log() instead of System.out.println()
console.log("Hello, world.");
console.log("I'm learning Javascript");

/**********************************************************
 * Variable declaration, assignment, and scope
 **********************************************************/
/**
 * variable declaration:
 *  use the "let" keyword
 * similar to a local variable in Java
 * block scoped
 */

let x;

/**
 * variable assignment:
 *  may be done after declaration or at the same time
 */
x = 7;
console.log(x);

x = 11;
console.log(x);

/**
 * constants (immutable values)
 *   use the const keyword
 *   similar to final in Java
 *   use all uppercase letters for contants assigned to literal
 *   use camalCase for constants assigned to expressions
 */
const HOSTNAME = "localhost";
console.log(HOSTNAME);

/**
 * var keyword:
 *   older way to declare variables in javascript
 *   similar to local variables in Java
 *   rarely used in modern javascript
 */
var y = 11;

/**********************************************************
 * Primitive Types
 **********************************************************/

/**
 * Number
 *   represents both integer and floating-point values
 *   similar to a double
 */

let a = 7;
a = 3.14;
//a = "hello";
console.log(typeof a);

/**
 * String
 *   a primitive type in JavaScript
 *   literals are enclosed in single or double quotes
 *   backticks enable template strings
 *   similar to the String class in Java
 */

a = "Hello"; // notice that we can dynamically change the type of a variable
console.log(typeof a);
let b = `${3 + 4} World.`; // variable embedding
console.log(b);

/**
 * Boolean
 *   similar to Java boolean type
 */
a = true;
console.log(typeof a);

/**
 * null
 *   a primitive type with only one value: null
 *   represents nothing, empty, unknown
 *   not like a reference to a non-existent object, like in Java
 */
a = null;
console.log(typeof a); // returns object ¯\_(ツ)_/¯ (old bug in JavaScript)

/**
 * undefined
 *  a primitive type with only one value: undefined
 *    the value of a variable that has not been explicitly assigned a value
 *    similar to null being assigned to an instance variable in java
 */

let c;
console.log(c);
console.log(typeof c);

/**********************************************************
 * Conditionals and Boolean Expressions
 **********************************************************/

/**
 * all values have an implicit boolean value due to javascript's type coercion
 */
if (1 && "Hello") {
  console.log("1 and Hello are true");
}

if (0 || "" || null || undefined) {
  // 0, empty string, null, undefined are not true
} else {
  console.log("0, empty string, null and undefined are all evaluated false");
}

/**
 * variables of different types are converted to numbers for comparison
 */
if ("34" == 34) {
  console.log("'34' is converted to 34 and then compared to 34");
}

if (3 != true) {
  console.log("true is converted to 1 and then compared to 3");
}

/**
 * the strict equality operator (===) does not perform type coercion;
 *   returns false if the types are different
 *   most similar to java's ==
 *   recommended to use this (===) instead of (==)
 */

if ("34" === 34) {
  // false
} else {
  console.log(
    "'34' is not strictly equal to to 34 because they are different types"
  );
}

/**
 * Recommendation regarding null and undefined;
 *  only use the strict equality and inequality operators (===, !==)
 */

if (a === null) {
  console.log("a is null");
}

if (c === undefined) {
  console.log("c is undefined");
}
