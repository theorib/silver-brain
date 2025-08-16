'use strict';

//Traversing the DOM

const h1 = document.querySelector('h1');

//Selecting elements based on their data set properties and keys
const dataElement = document.querySelector('[data-key]');
//Selecting elements based on their data set properties and keys with a specific value
const dataElement = document.querySelector('[data-key="value"]');

// console.log(h1);

// Going Downwards: selecting child elements

console.log(h1.querySelectorAll('.highlight'));
// Every single node that is a direct child
console.log(h1.childNodes);
// Selecting only direct child elements and this is a live HTML collection
console.log(h1.children);
// Only first Child
console.log(h1.firstElementChild);
// Only last Child
console.log(h1.lastElementChild);

// Going Upwards: selecting parent elements

console.log(h1.parentNode);
console.log(h1.parentElement);

// Traverses the DOM looking for the closest parent element that matches the rule
console.log(h1.closest('.header'));
// h1.closest('.header').style.background = `var(--gradient-primary)`;
// h1.closest('h1').style.background = `var(--gradient-secondary)`;

// Going Sideways: siblings
// In JavaScript we can only select direct siblings unless we use a trick
// Selecting HTML elements
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

// Selecting Nodes
console.log(h1.nextSibling);
console.log(h1.previousSibling);

// Selecting all siblings including the item itself
console.log(h1.parentElement.children);

[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) {
    el.style.backgroundColor = 'red';
  }
});
