'use strict';

//Styles
//Creating Inline Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
//Getting Styles like this only works for inline styles
console.log(message.style.backgroundColor);
// If we want to get styles that where defined elsewhere like in CSS files we need to use the getComputedStyle() method
console.log(getComputedStyle(message).height);

//Adding more height to a computed style
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// Changing a CSS Variable with the setProperty Method passing the name of the property and the value
document.documentElement.style.setProperty('--color-primary', 'orange');

//Attributes
const logo = document.querySelector('.nav__logo');

// Getting attributes like this only works for getting default attributes that an element of a certain type normaly has like an image has an alt, src and class attributes
console.log(logo.alt);
// Retrieves the absolute URL not the relative one written in the original HTML. To get the attribute as it was written we need to use the getAttribute() method
console.log(logo.src);
//To get the attribute as it was written in the original HTML
// The same is true for href attributes on links
console.log(logo.getAttribute('src'));

console.log(logo.className);
console.log(logo.id);

logo.alt = 'Beautiful minimalist logo';

// To get non standard attributes we need to use the .getAttribute() method
console.log(logo.getAttribute('designer'));

// too get a list of attribute names
console.log(logo.getAttributeNames());

//To set non standard attributes
logo.setAttribute('company', 'Bankist');

//Another example of getting the href property in two different ways with two different results
const link = document.querySelector('.btn--show-modal');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data Attributes
//<button class="btn--inline" data-go-to="1"></button>
// Note that data atributes return a string, if you expect a number you will need to convert it
const btn = document.querySelector('.btn--inline')
// Selecting elements via their data attribute:
const btnData = document.querySelector('[data-go-to]')
//Note that when there is a dash in the data name, it converts that name into camelCase when you use dataset (data-go-to becomes dataset.goTo)
console.log(btn.dataset.goTo); // result= "1"

//Here we use camecase where there where dashes in the original property name
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c'); // Not includes

// Don't use as it will override all existing classes and only allows us to add one class
// logo.className = 'another-class';
