// Function type_of is a substitute for the typeof keyword that returns "null" for null and the specific type of any object.
// https://javascript.plainenglish.io/the-best-way-to-type-check-in-vanilla-js-55197b4f45ec
const type_of = someVariable =>
  Object.prototype.toString.call(someVariable).slice(8, -1).toLowerCase();

// Deep Clone an object with limitations (doesn't preserve Data or prototype chain)
// ! More Performant
const clonedObjectJSON = JSON.parse(JSON.stringify(originalObject));

// Deep clone an object with modern Javascript without limitations
// ! Less Performant
// https://marian-caikovski.medium.com/the-best-way-to-copy-objects-9434cf2fef75
const clonedObjectStructuredClone = window.structuredClone(originalObject);
