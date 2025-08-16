'use strict';

//Selecting the whole document, we always need .documentElement as writing only document doesn't actually select the right node
console.log(document.documentElement);
//Selecting the Head
console.log(document.head);
//Selecting the Body
console.log(document.body);

// Selecting Elements

//querySelector and querySelectorAll are available in the document but also all of it's child elements so you can use these to select child elements of elements

//Returns the first element that maches this selector
const header = document.querySelector('.header');

//Selecting Multiple elements
// Returns an iterable node list
const allSections = document.querySelectorAll('.section');
console.log(allSections);

//To select an ID you don't need the #
document.getElementById('section--1');

// This method returns an HTML collection which is iterable
// The difference between a collection and a node list is that in a collection, if the DOM changes, the collection is also updated immediately and automatically
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

//Returns a live HTML collection of all items of a given class
const allSections2 = document.getElementsByClassName('section');
console.log(allSections2);

//Creating and Inserting Elements
// .insertAdjacentHTML('position','element')
// The position value can be either 'beforebegin','afterbegin','beforeend' or 'afterend'
// The insert adjacent HTML method expects a string, not an Object, to pass an object you'd have to convert it to a string first
document
  .querySelector('.header__title')
  .insertAdjacentHTML('afterbegin', `<h1>Canis!!</h1>`);

//This methods returns an actual DOM element that we can store in a variable
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = `We use cookies for improved functionality and analytics`;
message.innerHTML = `We use cookies for improved functionality and analytics <button class='btn btn--close-cookie'>Got it!</button>`;

//Prepend adds the element as the first child
// header.prepend(message);

//Append adds the element as the last child of the element
// The cloneNode method is necessary to have multiple instances of the same element and the true parameter is so the node is created with all sub items cloned as well
// header.append(message.cloneNode(true));
header.append(message);

//This method inserts and element before another element as a sibling
header.before(message);
//This method inserts an element after another element as a sibling
header.after(message);

//To use the message element that we stored in a variable with the insertAdjacentHTML method we would first have to convert the contents to a string. we can effectively do that using the .outerHTML property.
header.insertAdjacentHTML('beforebegin', message.outerHTML);

//Deleting elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
    //Old way of removing elements was a bit of a way around as it had to traverse the DOM tree
    // message.parentElement.removeChild(message);
  });
