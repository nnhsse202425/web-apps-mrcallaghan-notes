"use strict"; // enable modern Javascript modifications

/**********************************************************
 * Objects
 **********************************************************/

/**
 * Object construction
 *  objects can be constructed in a couple of ways
 *  properties can be added to objects after construction
 */

// creating an empty object with object constructor syntax
let journalEntry = new Object();

// create an empty object with object literal syntax
journalEntry = {};

// create an object with properties (key-value pairs) in
//    JSON format; objects can contain method
journalEntry = {
  date: "2024-11-14",
  habitOfMind: "Applying Past Knowledge to New Situations",
  content:
    "By comparing and contrasting JavaScript objects to Java, I am strengthening my understanding of js",
  getLength() {
    return this.content.length; // this references the object, similar to Java
  },
};

console.log(journalEntry);
console.log(typeof journalEntry);
console.log(journalEntry.getLength());

/**
 * Accessing the properties
 *    use the dot notation, like in Java
 *    non-existent properties returns undefined
 */
console.log(journalEntry.date);
console.log(journalEntry.studentName);

// properties can be added after construction
journalEntry.studentName = "Callaghan";
console.log(journalEntry.studentName);

/**
 * Object references
 *    variables of type object have a value that is a reference to the object.
 *    copying an object reference is not the same thing as copying the object, like Java
 *    can use Object.assign and structuredClone to clone object
 */
