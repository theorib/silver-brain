'use strict';
// Function to convert any phrase to title case with an exception list
const convertTitleCase = function (
  str,
  ignore = [
    'a',
    'an',
    'the',
    'and',
    'or',
    'but',
    'for',
    'in',
    'on',
    'to',
    'of',
    'with',
    'at',
    'by',
    'from',
  ]
) {
  const toUppercase = word => word.at(0).toUpperCase() + word.slice(1);
  const converted = toUppercase(
    str
      .toLowerCase()
      .split(' ')
      // .map(word =>
      //   ignore.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
      // )
      // .join(' ');
      .reduce(function (acc, word) {
        if (ignore.includes(word)) {
          acc.push(word);
        } else if (word) {
          acc.push(toUppercase(word));
        }
        return acc;
      }, [])
      .join(' ')
  );
  return converted;
};

//Function to calculate average
const calcAverage = function (arr) {
  return arr.reduce((acc, value) => acc + value, 0) / array.length;
};

//function to retrieve the maximum value in an array
const maximum = function (arr) {
  arr.reduce(function (acc, value) {
    if (value > acc) {
      acc = value;
    }
    return acc;
  }, arr[0]);
};

//Function to retrieve the maximum value in an array
const minimum = function (arr) {
  arr.reduce(function (acc, value) {
    if (value < acc) {
      acc = value;
    }
    return acc;
  }, arr[0]);
};

//Prevent reloading of forms inside addEventListener(e) function:
// We need to make sure the function has access to the event (e) otherwise it wont prevent the behaviour
document.querySelector('.button').addEventListener('click', function (e) {
  //Prevent form from submitting
  e.preventDefault();
});

document.querySelector('.button').addEventListener('click', function (e) {
  //Gets the original targeted element to which we added the event listener
  e.target;
});

// Function to get all the elements with a class in a document and filter their content into a new array

const movementsUIold = Array.from(
  document.querySelectorAll('.movements__value')
);
console.log(movementsUIold);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    function (movUI, i) {
      return Number(movUI.textContent.replace('€', ''));
    }
  );
  console.log(movementsUI);
});

//Function to generate a random Integer
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

//Function to check if a number is even or to check if it's divisible by another number if this other number is passed as a second argument
const isEven = (num, div = 2) => num % div === 0;

// A function to get all elements with a certain class and return them in an array with either strings or numbers as options. Default is string
const getArrayOfValueOfElements = function (selector, type = 'string') {
  const arr = Array.from(document.querySelectorAll(selector)).map(item => {
    let itemValue;
    if (type === 'string') {
      itemValue = item?.textContent;
    }
    if (type === 'number') {
      itemValue = Number.parseFloat(item?.textContent.replace(' ', ''), 10);
    } else {
      console.log('Invalide Type');
    }
    return itemValue;
  });
  return arr;
};

//function to scroll to an element with old way of doing it explained as well
btnScrollTo.addEventListener('click', function (e) {
  // New way of doing this!
  section1.scrollIntoView({ behavior: 'smooth' });

  // const s1Coords = section1.getBoundingClientRect();
  // console.log(e);
  // console.log(s1Coords);
  // getBoundingClientRect Is relative to the viewport
  // console.log(e.target.getBoundingClientRect());

  //Get the current scroll position
  // console.log(`Current Scroll X/Y`, window.pageXOffset, window.pageYOffset);
  // get the height and width of the viewport
  // console.log(
  //   `Height and Width of Viewport H/W`,
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  // console.log(`s1 coordinate y:`, s1Coords.y);

  // To make the scrolling always take you to the right position we have to add the current scroll position to the top and left coordinates as bellow.

  // window.scrollTo(
  //   s1Coords.left + window.pageXOffset,
  //   s1Coords.top + window.pageYOffset
  // );

  // To create a smooth scrolling we need to pass on an object to the scrollTo() method with a left, top and behavior properties
  // This is the old School Way of Doing This

  // window.scrollTo({
  //   left: s1Coords.left + window.pageXOffset,
  //   top: s1Coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
});
