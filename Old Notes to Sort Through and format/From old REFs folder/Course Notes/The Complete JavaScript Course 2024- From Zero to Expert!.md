##### 18\. Forkify App: Building a Modern Application | 310\. Uploading a New Recipe - Part 3 | 6:39

Updating the hash in the browser using the history API: `` window.history.pushState(null, '', `#${model.state.recipe.id}`); `` 

---

##### 18\. Forkify App: Building a Modern Application | 304\. Implementing Bookmarks - Part 1 | 9:46

When an element does not exist in the DOM when the application load, we can't directly create an event listener but we can instead target the parent element and use event delegation on it. That way, we can listen for an event on an element that will be dynamically created afterwards

---

##### 18\. Forkify App: Building a Modern Application | 303\. Developing a DOM Updating Algorithm | 13:29

We can compare elements with a very handy method called `.isEqualNode()` 

In this case we can use: `newElement.isEqualNode(currentElement)` 

---

##### 18\. Forkify App: Building a Modern Application | 303\. Developing a DOM Updating Algorithm | 8:53

converting a Node List into an array can be done using Array.from(nodeList)

---

##### 18\. Forkify App: Building a Modern Application | 303\. Developing a DOM Updating Algorithm | 4:38

To update only the parts of the page that need updating we will need to compare the new markup with the old markup.

To do that, we need to create a new DOM object out of the new markup. in this case our new markup is coming in the form of a string. to convert that string to a dom object we will use:

```javaScript
const newMarkup = this._generateMarkup(this._data); //this returns a string
 
    const newDOM = document.createRange().createContextualFragment(newMarkup); //this converts the string into a real dom object
```

  
---

##### 18\. Forkify App: Building a Modern Application | 297\. Implementing Search Results - Part 1 | 19:26

Publisher/Subscriber Method

---

##### 18\. Forkify App: Building a Modern Application | 295\. Event Handlers in MVC: Publisher-Subscriber Pattern | 6:03

Events should be **handled** in the **controller** (otherwise we would have application logic in the view)

Events should be **listened for** in the **view** (otherwise we would need DOM elements in the controller)

---

##### 18\. Forkify App: Building a Modern Application | 295\. Event Handlers in MVC: Publisher-Subscriber Pattern | 4:04

**Pulisher-Subscriber Pattern:**

Code that knows when to react: PUBLISHER

Code that wants to react: SUBSCRIBER

---

##### 18\. Forkify App: Building a Modern Application | 295\. Event Handlers in MVC: Publisher-Subscriber Pattern | 3:54

**Design Patterns** in programming are simply solutions for certain kinds of problems

---

##### 18\. Forkify App: Building a Modern Application | 292\. The MVC Architecture | 9:42

Model View Controller (MVC)

Model and View should be able to exist completely independent of one another and this is partially achieved by separating business logic from application logic. the controller is what connect these two parts.

**Model**  (interacts with APIs):

* Business Logic
* State
* HTTP Library

**Controller**:

* Application Logic (bridge between model and views, which should no nothing about one or the other)
* Handles UI events and **dispatches tasks to model and view**
* Only the controller imports and calls functions from the model and the view, never the other way around

**View**  (interacts with the user):

* Presentation Logic

---

##### 18\. Forkify App: Building a Modern Application | 292\. The MVC Architecture | 7:20

**Presentation Logic**

* Code that is concerned about the **visible part** of the application
* Essentially displays application state

---

##### 18\. Forkify App: Building a Modern Application | 292\. The MVC Architecture | 7:19

**Application Logic**

* Code that is only concerned about the **implementation of the application itself**
* Handles navigation and UI events

---

##### 18\. Forkify App: Building a Modern Application | 292\. The MVC Architecture | 6:53

**HTTP Library**

* Responsible for making and receiving AJAX requests
* Optional but almost always necessary in real-world apps

---

##### 18\. Forkify App: Building a Modern Application | 292\. The MVC Architecture | 5:26

**State:**

* Essentially **stores all the data** about the application
* Should be the "single source of truth"
* UI should be kept in sync with the state
* State libraries exist

---

##### 18\. Forkify App: Building a Modern Application | 292\. The MVC Architecture | 4:36

**Business Logic:**

* Code that **solves the actual business problem;**
* Directly related to what business does and what it needs;
* **Example:** sending messages, storing transactions, calculating taxes,...

---

##### 18\. Forkify App: Building a Modern Application | 292\. The MVC Architecture | 4:29

Any architecture pattern should have:

* Business Logic
* State
* HTTP Library
* Application logic (Router)
* Presentation Logic (UI Layer)

---

##### 18\. Forkify App: Building a Modern Application | 292\. The MVC Architecture | 2:53

Architecture patterns

* Module View Controler (MVC)
* Module View Presenter (MVP)
* Flux
* etc.

---

##### 18\. Forkify App: Building a Modern Application | 292\. The MVC Architecture | 0:59

**Structure**

**Maintainability**

**Expandability**

  
* Like a house software need structure: the way we **organise our code**
* A project is never done! We need to be able to easily **change it in the future**
* We also need to be able to easily **add new features**

  
---

##### 18\. Forkify App: Building a Modern Application | 291\. Listening For load and hashchange Events | 2:59

To change the hash in the URL, all we need to do is add a link that goes to that hash like this

```javaScript
<a href="#5ed6604591c37cdc054bc958">RECIPE 1</a>
```

---

##### 18\. Forkify App: Building a Modern Application | 287\. Project Overview and Planning (I) | 5:03

**User Story:** Description of the application's functionality from the user's perspective

* **Common format:** As a **_\[type of user\]_**, I want **_\[an action\]_**so that **_\[a benefit\]_**

---

##### 18\. Forkify App: Building a Modern Application | 287\. Project Overview and Planning (I) | 5:07

**Application Planning Steps**

1. User Stories
2. Features
3. Flowchart
4. Architecture
5. Development

---

##### 17\. Modern JavaScript Development: Modules, Tooling, and Functional | 284\. Let's Fix Some Bad Code: Part 2 | 3:38

`Object.freeze()` only freezes the first level of the object!

---

##### 17\. Modern JavaScript Development: Modules, Tooling, and Functional | 283\. Declarative and Functional JavaScript Principles | 9:46

**Functional Programming Techniques:**

* Try to avoid data mutations
* Use built-in methods that don't produce side effects
* Do data transformations with methods such as `.map()`, `.filter()` and `reduce()`
* Try to avoid side effects in functions: this is of course not always possible

**Declarative Syntax:**

* Use array and object destructuring
* Use the spread operator (...)
* Use the ternary (conditional) operator
* Use template literals

---

##### 17\. Modern JavaScript Development: Modules, Tooling, and Functional | 283\. Declarative and Functional JavaScript Principles | 4:53

**Functional Programming:**

* **Declarative** programming paradigm
* Based on the idea of writing software by combining many **pure functions**, avoiding **side effects** and **mutating** data

  
**Side Effect:** Modification (mutation) of any data **outside** of the function (mutating external variables, logging to console, writing to DOM, etc.)

**Pure Function:** Function without side effects. Does not depend on external variables. **Given the same inputs, always returns the same outputs.**

**Immutability**: State (Data) is **never** modified! Instead, state is **copied** and the copy is mutated and returned.

---

##### 17\. Modern JavaScript Development: Modules, Tooling, and Functional | 283\. Declarative and Functional JavaScript Principles | 0:39

Two fundamental ways of writing code (**paradigms**):

* Imperative  
   * Programmer explains **"HOW to do things"**  
   * We explain the computer every single step it has to follow to achieve a result  
   * Example: step-by-step recipe of a cake
* Declarative  
   * Programmer tells **"WHAT to do"**  
   * We simply _describe_ the way the computer should achieve the results  
   * The **HOW** (step-by-step instructions) gets abstracted away

---

##### 17\. Modern JavaScript Development: Modules, Tooling, and Functional | 281\. Review: Writing Clean and Modern JavaScript | 9:01

**Asynchronous Code**

* Consume promises with async/await for best readability
* Whenever possible, run promises in **parallel** (Promise.all)
* Handle errors and promise rejections

---

##### 17\. Modern JavaScript Development: Modules, Tooling, and Functional | 281\. Review: Writing Clean and Modern JavaScript | 7:11

**Avoid Nested Code**

* Use early `return` (guard clause)
* Use ternary (conditional) or logical operators instead of `if`
* Use multiple `if` instead of `if/else-if`
* Avoid `for` loops, use array methods instead
* Avoid callback-based asynchronous APIs

---

##### 17\. Modern JavaScript Development: Modules, Tooling, and Functional | 281\. Review: Writing Clean and Modern JavaScript | 5:15

**OOP**

* Use ES6 classes
* Encapsulate data and **don't mutate** it from outside the class
* implement method chaining
* Do **not** use arrow functions as methods (in regular objects)

---

##### 17\. Modern JavaScript Development: Modules, Tooling, and Functional | 281\. Review: Writing Clean and Modern JavaScript | 3:16

**Functions**

* Generally functions should do **only one thing**
* Don't use more than 3 function parameters
* Use default parameters whenever possible
* Generally return same data type as received
* Use arrow functions when they make code more readable

---

##### 17\. Modern JavaScript Development: Modules, Tooling, and Functional | 281\. Review: Writing Clean and Modern JavaScript | 2:19

**General:**

* Use DRY principle (refactor your code so you don't repeat yourself)
* Don't pollute global namespace, encapsulate instead
* Don't use var
* Use strong type checks (=== and !==)

---

##### 17\. Modern JavaScript Development: Modules, Tooling, and Functional | 281\. Review: Writing Clean and Modern JavaScript | 1:42

**Readable Code:**

* Write code so **others** can understand it
* Write code so that **you** can understand it in 1 year
* Avoid too "clever" and overcomplicated solutions
* Use descriptive variable names: **what they contain**
* Use descriptive function names: **what they do**

---

##### 17\. Modern JavaScript Development: Modules, Tooling, and Functional | 279\. Bundling With Parcel and NPM Scripts | 16:21

Two ways of running locally installed packages in the command line:

* NPX like: `npc parcel index.html`
* NPM Scripts: the usual way

---

##### 17\. Modern JavaScript Development: Modules, Tooling, and Functional | 279\. Bundling With Parcel and NPM Scripts | 14:48

Parcel can work with all CommonJS modules as well, they don't have to be ES6 modules

---

##### 17\. Modern JavaScript Development: Modules, Tooling, and Functional | 279\. Bundling With Parcel and NPM Scripts | 13:41

Once parcel is running, we can include dependencies with the import function without defining a full path like:

`import cloneDeep from 'loads-es'` 

---

##### 17\. Modern JavaScript Development: Modules, Tooling, and Functional | 279\. Bundling With Parcel and NPM Scripts | 12:48

```javaScript
if (module.hot) {
  module.hot.accept();
}
```

So that parcel keeps a live-server like interface with no rebuild

  
---

##### 17\. Modern JavaScript Development: Modules, Tooling, and Functional | 278\. Introduction to NPM | 18:02

With the `npm I` command the list of dependencies in the package.json file included in the folder will be installed

---

##### 17\. Modern JavaScript Development: Modules, Tooling, and Functional | 277\. A Brief Introduction to the Command Line | 0:00

```javaScript
/*
ls = will show the contents of the current folder
cd = change directory
clear = clear the console
mkdir = create a folder
touch = createa  file or multiple files
ctrl + c = cancel live server
rm = delete files
mv = move file
rmdir = delete empty directory
rm -R = to recursively remove a directory with all it's files
 
*/
```

---

##### 17\. Modern JavaScript Development: Modules, Tooling, and Functional | 277\. A Brief Introduction to the Command Line | 3:29

Whenever we use a command line we are always in a folder

---

##### 17\. Modern JavaScript Development: Modules, Tooling, and Functional | 276\. CommonJS Modules | 1:40

CommonJS was the module implementation in Node.js and it is still around and here to stay as most modules for node have been built using CommonJS

---

##### 17\. Modern JavaScript Development: Modules, Tooling, and Functional | 275\. The Module Pattern | 7:21

The module pattern works because of closures! Closures allows a function to have access to all the variables that where present at it's birthplace 

---

##### 17\. Modern JavaScript Development: Modules, Tooling, and Functional | 274\. Top-Level await (ES2022) | 11:43

If you import a module that has a top-level await, then the current module will have to wait for the imported module to finish the blocking code.

**this has major performance implications!**

---

##### 17\. Modern JavaScript Development: Modules, Tooling, and Functional | 274\. Top-Level await (ES2022) | 3:39

top level await **blocks the execution of the entire module**

---

##### 17\. Modern JavaScript Development: Modules, Tooling, and Functional | 274\. Top-Level await (ES2022) | 0:36

as of ES2022 we can use the `await` keyword outside of async functions but only in modules. This is called top-level await

To make it work we need to have the type="module" in the javascript function call

---

##### 17\. Modern JavaScript Development: Modules, Tooling, and Functional | 273\. Exporting and Importing in ES6 Modules | 19:28

imports and exports are a live connection 

---

##### 17\. Modern JavaScript Development: Modules, Tooling, and Functional | 273\. Exporting and Importing in ES6 Modules | 17:06

You can have default imports/exports and named imports/exports at the same time but in practice, we never do that:

```javaScript
import add, { addToCart, totalPrice, tq,} from './shoppingCart.js';
```

**avoid this**

---

##### 17\. Modern JavaScript Development: Modules, Tooling, and Functional | 273\. Exporting and Importing in ES6 Modules | 15:16

We usually use default exports when we only want to export one thing per module.

We need to export a value directly (which can be a function but not a named one) like this: 

```javaScript
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to the cart`);
}
```

---

##### 17\. Modern JavaScript Development: Modules, Tooling, and Functional | 273\. Exporting and Importing in ES6 Modules | 12:17

You can import all exports from a module like this:

```javaScript
import * as ShoppingCart from './shoppingCart.js';
```

You give them a name that works like an object that wraps all the exports. Effectively acting as a namespace for the exports

---

##### 17\. Modern JavaScript Development: Modules, Tooling, and Functional | 273\. Exporting and Importing in ES6 Modules | 10:57

We can also rename our exports: 

```javaScript
export { totalPrice, totalQuantity as qt };
```

---

##### 17\. Modern JavaScript Development: Modules, Tooling, and Functional | 273\. Exporting and Importing in ES6 Modules | 10:34

You can rename imports like this:

```javaScript
import {
  addToCart,
  totalPrice as price, //renaming imports
  totalQuantity,
} from './shoppingCart.js';
```

---

##### 17\. Modern JavaScript Development: Modules, Tooling, and Functional | 273\. Exporting and Importing in ES6 Modules | 9:39

Bulk named exports: 

```javaScript
export { totalPrice, totalQuantity };
```

---

##### 17\. Modern JavaScript Development: Modules, Tooling, and Functional | 273\. Exporting and Importing in ES6 Modules | 8:36

**Exports** always need to happen on **top-level code!**

---

##### 17\. Modern JavaScript Development: Modules, Tooling, and Functional | 273\. Exporting and Importing in ES6 Modules | 7:57

With named imports we have to put them inside curly braces like this:

```javaScript
import { addToCart } from './shoppingCart.js';
```

---

##### 17\. Modern JavaScript Development: Modules, Tooling, and Functional | 273\. Exporting and Importing in ES6 Modules | 5:42

There are two types of exports:

* Named exports
* Default exports

---

##### 17\. Modern JavaScript Development: Modules, Tooling, and Functional | 273\. Exporting and Importing in ES6 Modules | 3:30

The imported module's code is always executed first. Import statements are hoisted to the top

---

##### 17\. Modern JavaScript Development: Modules, Tooling, and Functional | 273\. Exporting and Importing in ES6 Modules | 0:59

in Module names it's a convention to use camelCase names

---

##### 17\. Modern JavaScript Development: Modules, Tooling, and Functional | 272\. An Overview of Modules in JavaScript | 10:43

1. Imports are hoisted when the file is first Parsed (read but not executed)
2. Importing happens before the code in the main module is executed
3. Modules are imported into a file in a **synchronous** way so only after the modules are imported the code will in the module will be executed
4. Importing synchronous code makes **bundling** and **dead code elimination** possible
5. Downloading of the modules themselves is **asynchronous**
6. Modules have live connections, the values are not copied

---

##### 17\. Modern JavaScript Development: Modules, Tooling, and Functional | 272\. An Overview of Modules in JavaScript | 6:20

ES6 Modules: stored in files, **one module per file**

In **modules:**

1. Top Level Variables are scoped to the module
2. Modules are always executed in Strict mode
3. Top-level `this` keyword is always `undefined`
4. Import and export values (only happen at the top level), all imports are hoisted,
5. HTML Linking `<script type="module">`
6. File downloading is always Asynchronous

---

##### 17\. Modern JavaScript Development: Modules, Tooling, and Functional | 272\. An Overview of Modules in JavaScript | 3:42

Modules allows us to:

1. **Compose Software:** Modules are building blocks we put together to build a complex applications;
2. **Isolate Componets:** Modules can be developed in isolation without thinking about the entire codebase;
3. **Abstract Code:** Implement low-level code in modules and import these abstractions into other modules;
4. **Organised code:** Modules naturally lead to a more organised codebase;
5. **Reuse code:** Modules allows us to reuse code in a project or even across multiple projects;

---

##### 17\. Modern JavaScript Development: Modules, Tooling, and Functional | 272\. An Overview of Modules in JavaScript | 1:22

modules can have their own code and then **import** and **export** values. 

The exported code is called the module's **Public API**.

The **Public API** is normally **consumed by importing values** into a module

These imported values are called **dependencies**

---

##### 17\. Modern JavaScript Development: Modules, Tooling, and Functional | 272\. An Overview of Modules in JavaScript | 0:25

A Module is a reusable piece of code that **encapsulates** implementation details.

It' usually a **standalone file** but not necessarily 

---

##### 17\. Modern JavaScript Development: Modules, Tooling, and Functional | 271\. An Overview of Modern JavaScript Development | 5:03

Webpack and Parcel are the most common Javascript Bundlers 

---

##### 17\. Modern JavaScript Development: Modules, Tooling, and Functional | 271\. An Overview of Modern JavaScript Development | 0:07

Nowadays we divide the development projects into Modules which help keep the code organised and maintainable and we can also include 3rd party code as modules

  
---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 268\. Coding Challenge #3 | 11:25

async functions **ALWAYS** return a **promise** and not the value we are interested in

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 268\. Coding Challenge #3 | 1:07

`Promise.any()` takes in an array of promises and will then return the first fulfilled promise. Rejected promises are ignored.

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 267\. Other Promise Combinators: race, allSettled and any | 9:02

`Promise.allSettled()` takes in an array of promises and will return an array of all the promises wether they where rejected or not.

`Promise.allSettled()` never short circuits, it will always return the settled promises. 

`Promise.allSettled()` returns an **array of objects**, the objects include the status of the promise and then the actual value.

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 267\. Other Promise Combinators: race, allSettled and any | 3:22

Promise.race() **short-circuits** whenever a promise gets settled

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 267\. Other Promise Combinators: race, allSettled and any | 2:05

If the winning promise is s fulfilled promise then the fulfilment value of the Promise.race() will be the fulfilment value of the winning promise

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 267\. Other Promise Combinators: race, allSettled and any | 0:45

`Promise.race()` receives an array of promises and returns a promise.

This promise combinator is settled as soon as any one of the input promises is settled.

Remember that a promise is settled as soon as a value is available but it doesn't mean it's not an error or not the value you expected.

**The first settled promise wins the race wether it's fulfilled or rejected**

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 266\. Running Promises in Parallel | 9:47

The `Promise.all()` **combinator** short circuits when one promise rejects.

  
But whenever you have several promises that don't depend on each other you should **always** use Promise.all() since it will save users a lot of loading time

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 266\. Running Promises in Parallel | 6:35

`Promise.all()` takes in an array of promises and it will return a new promise which will then run all the promises in the array at the same time.

It returns an array with the results

we can also `await Promise.all()`

so we can get the actual final result of the promise

**if one of the promise rejects, the whole promise rejects**

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 265\. Returning Values from Async Functions | 12:27

Using IIFE is a good way of creating an async function that is not stored anywhere and executed immediately:

```javaScript
(function(){
// function body
})()
```

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 265\. Returning Values from Async Functions | 9:39

for an error caught by a try...catch to propagate down the line we need to explicitly re-throw the error at the end of the catch block

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 265\. Returning Values from Async Functions | 3:24

An Async function always returns a promise.

The value that we decide to return from an Async function, will be come the fulfilled value of the promise returned by the async function.

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 264\. Error Handling With try...catch | 10:17

Try catch statements can be used elsewhere in JavaScript

```javaScript
try {
//code to try
} catch(err) {
//how to handle the error
}
```

  
---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 263\. Consuming Promises with Async/Await | 8:27

**async** and **await** is a really elegant way of being able to store the consumed promise in a variable without having to deal with any callback functions

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 263\. Consuming Promises with Async/Await | 6:29

Async await is synthetic sugar over promises and then() method

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 263\. Consuming Promises with Async/Await | 3:01

```javaScript
const whereAmI = async function (country) {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${country}`
  );
  console.log(response);
 
  //Same as doing but we can store it in a variable:
  //fetch(`https://restcountries.com/v3.1/name/${country}`.then(response =>   console.log(response))
 
  const data = await response.json();
  console.log(data);
 
  //Same as doing but we can store it in a variable:
  //response.json().then(data=>console.log(data));
};
```

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 263\. Consuming Promises with Async/Await | 2:22

**fetch**() will always return a **promise**

the **await** keyword will basically await for the result of this promise.

await will stop the code of the function until the promise is fulfilled

Stopping execution inside an async function is not a problem since it won't stop the rest main thread of the rest of the code from running

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 263\. Consuming Promises with Async/Await | 1:10

By adding async in front of the function call we make the function asynchronous.

When this function is done it automatically returns a promise.

Inside an async function we can have one or more await statements

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 260\. Building a Simple Promise | 3:59

We pass into the resolve function the value that can then be consumed using the then method. The same goes to the reject method

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 260\. Building a Simple Promise | 1:02

The promise constructor takes one argument, the executor function. The executor function is the one that will contain the asynchronous behaviour that we want to handle with the promise

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 259\. The Event Loop in Practice | 8:32

You can't do high precision things using javascript timers

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 258\. Asynchronous Behind the Scenes: The Event Loop | 14:56

We call callbacks from promises **Microtasks**. As soon as there is a microtask in the queue it will be taken into the call stack by the event loop even if there were several callbacks in the callback queue waiting to be executed. Microtasks can stave the callback queue and prevent it from running. It's hard for that to happen in practice but it's certainly a possibility

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 258\. Asynchronous Behind the Scenes: The Event Loop | 14:22

It's a different case altogether with promise callbacks. They are handled by a different queue called Microtasks queue which takes precedence over the callback queue in the event loop

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 258\. Asynchronous Behind the Scenes: The Event Loop | 11:42

JavaScript itself has no sense of time. A javascript runtime just executes the code that it's given. It's the event loop that orchestrates when callbacks are brought to the call stack to be executed

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 258\. Asynchronous Behind the Scenes: The Event Loop | 10:33

The event loop, looks into the call stack to determine if it's empty or not. Then if it's finally empty, it will take the first callback function in like and bring it to the call stack. This is called an event loop tick (each time the event loop takes a callback from the callback queue into the call stack) 

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 258\. Asynchronous Behind the Scenes: The Event Loop | 9:08

A timer's callback does not have a guarantee of running perfectly on time. It depends on the state of the callback queue and the call stack. The only guarantee is that it won't happen before the set amount of time has lapsed

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 258\. Asynchronous Behind the Scenes: The Event Loop | 7:34

The callback queue is basically an ordered list of all the callback functions that are in-line to be executed. Like a todo-list with all the tasks that the call stack has to complete.

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 258\. Asynchronous Behind the Scenes: The Event Loop | 5:28

All asynchronous tasks in JavaScript happen inside the WEB APIs in the browser, not anywhere near the call stack. The callback functions that are waiting for the asynchronous tasks to finish are effectively waiting in the web APIs and then when they are ready to be fired they are sent to the callback queue to then be sent to the call stack to be executed

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 256\. Throwing Errors Manually | 3:29

The `throw` keyword terminates a function just like the `return` keyword does.

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 255\. Handling Rejected Promises | 15:52

the fetch function only fails when there is no connection so other kinds of error would not be caught by the catch method

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 255\. Handling Rejected Promises | 14:09

Catch, also returns a promise and the finally method can only work after that promise

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 255\. Handling Rejected Promises | 12:31

We use this method when something needs to happen no matter the result of the promise.

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 255\. Handling Rejected Promises | 12:04

With the `finally()` method, wether a promise is fulfilled or rejected, the callback function in the `finally()` method will always be called.

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 255\. Handling Rejected Promises | 6:18

The `catch()` method will handle any errors in the whole chain no matter where or how long it is.

Errors will propagate down the chain until they are caught and only if they are not caught they will return an actual javascript error.

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 255\. Handling Rejected Promises | 3:41

The `then()` method accepts two callback functions. One when the promise is fulfilled and one for when the promise is rejected

Alternatively, and this is a better option if we are using a chain, we can add a `.catch()` method to the **end** of the chain

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 255\. Handling Rejected Promises | 0:35

A Promise in which an error happened is a rejected promise

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 254\. Chaining Promises | 4:51

The `then()` method always returns a promise, not matter if we actually return anything or not. But if we explicitly return something, then that something will replace the value returned from the function.

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 253\. Consuming Promises | 9:06

Promises do not get rid of callbacks but they do get rid of callback hell

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 253\. Consuming Promises | 5:53

We handle a promise using the `then()` method, which runs a callback function after the promise is settled. The callback function inside the `then()` method takes one argument which is the response of the promise. To read the data from that response, we need to call the `json()` method in the response which returns yet another promise which we will have to handle with the another `then()` method. This last then method's callbackfunction's argument will then become our data.

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 252\. Promises and the Fetch API | 9:12

To consume a promise, it first has to be built. The Fetch API for example returns a built promise that we can then consume.

You can also manually build a promise but that's not that often.

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 252\. Promises and the Fetch API | 6:03

Lifecycle of a Promise:

1. Pending
2. Settled  
   1. Fulfilled (Successfully returned a value)  
   2. Rejected (error)

A Promise is only settled once and from there, state will remain unchanged forever.

When we get and use the result of a promise we "Consume" the promise

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 252\. Promises and the Fetch API | 5:03

Advantages of using promises:

1. We no longer have to rely on events and callback functions to handle asynchronous results.
2. We can chain promises for a sequence of asynchronous operations completely escaping callback hell.

  
---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 252\. Promises and the Fetch API | 3:02

A **Promise** is an object that is used as a placeholder for the future result of an asynchronous operation.

  
A **Promise** is a container for an asynchronously delivered value

  
A **Promise** is a container for a future value

  
That value is the response from an AJAX call

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 251\. Welcome to Callback Hell | 11:10

callback hell is when we have many levels of nested callback functions in sequence

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 250\. \[OPTIONAL\] How the Web Works: Requests and Responses | 13:19

TCP/IP Transmission Control Protocol / Internet Protocol

TCP divides each response/request into small packets which can be send via different routes on the internet 

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 250\. \[OPTIONAL\] How the Web Works: Requests and Responses | 11:05

When you access a web page, the first HTTP request will only contain the html, that is then scanned for each asset that it needs. then, an additional http request will be generated for each asset and it will come with an http response 

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 250\. \[OPTIONAL\] How the Web Works: Requests and Responses | 9:08

HTTP response:

start line: http version, status code, message

response headers

<BODY>

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 250\. \[OPTIONAL\] How the Web Works: Requests and Responses | 7:02

HTTP Request:

http request start line: HTTP method + request target + http version

request headers

<BODY>

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 250\. \[OPTIONAL\] How the Web Works: Requests and Responses | 6:26

Main http methods:

* GET
* POST
* PUT
* PATCH

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 249\. Our First AJAX Call: XMLHttpRequest | 4:25

Without CORS we cannot access a public API from our own code.

CORS stands for Cross Origin Resource Sharing 

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 249\. Our First AJAX Call: XMLHttpRequest | 1:20

In JS there are multiple way for doing AJAX calls.

The old method was using the XMLHttpRequest Method

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 247\. Asynchronous JavaScript, AJAX and APIs | 17:13

In modern web development almost nobody uses XML as a data format anymore so AJAX is just an old term. JSON is the most popular data format since it's simply a javascript object converted to a string

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 247\. Asynchronous JavaScript, AJAX and APIs | 12:24

API or Application Programming Interface are a piece of software that can be used by another piece of software in order to allow applications to talk to each other.

Some examples in web development are

* DOM API
* Geolocation API
* Own Class API methods
* "Online API"  
   * Application running on a server that receives requests for data and sends data back as a response

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 247\. Asynchronous JavaScript, AJAX and APIs | 10:16

AJAX or Asynchronous JavaScript And XML, allows us to communicate with remote web servers in an asynchronous way

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 247\. Asynchronous JavaScript, AJAX and APIs | 10:02

Examples of asynchronous javascript are:

* loading an image with the src attribute
* timeout function
* Geolocation API
* AJAX Calls

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 247\. Asynchronous JavaScript, AJAX and APIs | 9:00

* Callback functions alone do not make code asynchronous. For example the filter function.
* Also, adding event listeners alone do not make code asynchronous. for example a click event listener is waiting for a click to happen but it's not doing anything in the background. There is no asynchronous behaviour happening at all.

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 247\. Asynchronous JavaScript, AJAX and APIs | 7:18

Setting the source of an image using the src attribute is always asynchronous. The image will be loaded while the rest of the code keeps running.

Once an image has finished loading, a load event will automatically be fired by JavaScript

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 247\. Asynchronous JavaScript, AJAX and APIs | 4:54

Asynchronous code is **non-blocking.**

Asynchronous code is all about coordinating the behaviour of our program over a period of time

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 247\. Asynchronous JavaScript, AJAX and APIs | 3:59

Asynchronous code will only be executed after a task that has been running in the background finishes execution, for example a timeout call-back function 

---

##### 16\. Asynchronous JavaScript: Promises, Async/Await, and AJAX | 247\. Asynchronous JavaScript, AJAX and APIs | 0:47

Synchronous code means code is executed line by line in the order we have written it.

Each line of code always waits for the previous line to finish execution

Alert window is a good example of a ling-running operation which blocks execution of the rest of the code.

---

##### 15\. Mapty App: OOP, Geolocation, External Libraries, and More! | 243\. Working with localStorage | 22:42

To reload the browser we use `location.reload()` 

---

##### 15\. Mapty App: OOP, Geolocation, External Libraries, and More! | 243\. Working with localStorage | 19:19

When you store an object using stringily in JSON into local storage you loose the prototype chain

---

##### 15\. Mapty App: OOP, Geolocation, External Libraries, and More! | 243\. Working with localStorage | 4:22

Anything that has to happen only after the map has been created has to come at the end of the creating the map function otherwise you will get an error since that part of the javascript will probably be executed before the map object actually exists

  
---

##### 15\. Mapty App: OOP, Geolocation, External Libraries, and More! | 243\. Working with localStorage | 4:14

Local Storage is a very simple API and it's only advised to use it for small amounts of data.

---

##### 15\. Mapty App: OOP, Geolocation, External Libraries, and More! | 243\. Working with localStorage | 3:31

Local Storage is a simple **Key**, **Value** store and the value has to be a **string.**

---

##### 15\. Mapty App: OOP, Geolocation, External Libraries, and More! | 243\. Working with localStorage | 3:03

Local Storage API is an interface that the browser provides for us and we can use

---

##### 15\. Mapty App: OOP, Geolocation, External Libraries, and More! | 239\. Managing Workout Data: Creating Classes | 5:21

Usually we use third party libraries to help create IDs 

---

##### 15\. Mapty App: OOP, Geolocation, External Libraries, and More! | 236\. Rendering Workout Input Form | 3:17

Change the focus to a form element calling the `.focus()` method

---

##### 15\. Mapty App: OOP, Geolocation, External Libraries, and More! | 234\. Displaying a Map Using Leaflet Library | 8:19

Scripts have access to all the global variables form other scripts, as long as the other script was loaded before the script calling the variable.

---

##### 15\. Mapty App: OOP, Geolocation, External Libraries, and More! | 234\. Displaying a Map Using Leaflet Library | 5:44

Leaflet gives us an L namespace to use it's functions

---

##### 15\. Mapty App: OOP, Geolocation, External Libraries, and More! | 232\. How to Plan a Web Project | 12:59

Flowcharts evolve throughout implementation 

---

##### 15\. Mapty App: OOP, Geolocation, External Libraries, and More! | 232\. How to Plan a Web Project | 11:25

Whenever we build a flow chart, it's a good idea to start with events. There we start with the page loading event.

---

##### 15\. Mapty App: OOP, Geolocation, External Libraries, and More! | 232\. How to Plan a Web Project | 4:30

A **user story** is a description of the application's functionality from the user's perspective. All user stories put together provide a clear overview of the application's functionality

**Common format**: As a**_\[type of user\]_**, I want **_\[an action\]_** so that **_\[a benefit\]_**

Who? What? Why?

---

##### 15\. Mapty App: OOP, Geolocation, External Libraries, and More! | 232\. How to Plan a Web Project | 2:04

Planning an application:

1. User Stories
2. Features
3. Flowchart
4. Architecture
5. Development Step

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 227\. ES6 Classes Summary | 3:36

Instance Properties are suitable for properties that may be unique or different for all instances of an object while Public fields are used for properties that will be the same for every single object generated by the class

  
---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 225\. Encapsulation: Private Class Fields and Methods | 6:25

The syntax to make a field private is adding the hash symbol before the field name #

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 225\. Encapsulation: Private Class Fields and Methods | 4:52

Public fields will be created in every instance of the class and they are not on the prototype.

They are also referenceable by the this keyword 

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 225\. Encapsulation: Private Class Fields and Methods | 2:12

In The class Fields Proposal there are four different kinds of fields and methods (actually 8).

  
Fields are properties that will be on all instances.

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 224\. Encapsulation: Protected Properties and Methods | 3:56

using underscore before the name of a property or method is a convention that says that those elements should not be touched outside of the class

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 224\. Encapsulation: Protected Properties and Methods | 1:41

Two big reasons to use encapsulation:

* Avoid code from outside to accidentally introduce bugs in our code
* Let us change our code confident that it won't break anyone's use of it as they are only interacting the the API we provided.

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 223\. Another Class Example | 6:16

These methods that we create are the public interface with our object and we also call this API

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 223\. Another Class Example | 4:33

For adding movements you could easily interact with them using acc.movements.push() for example but that's not a good idea at all, specially with sensitive stuff like this. It's much better to create methods that interact with these properties instead.

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 223\. Another Class Example | 2:39

We can easily create in the constructor other parameters that are not based in any inputs.

Within the constructor we can also execute any code that we want

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 222\. Inheritance Between "Classes": Object.create | 8:35

To create Child classes and inheritance using Object.create we have to:

1. First create the parent prototype object const  
`PersonProto = {}`
2. Create the child object and link it to the parent object using object.create, just as if we where creating an instance of that first prototype object  
` const StudentProto = Object.create(PersonProto);`
3. Then we re-create the init function in the new object but call the prototype object's init function with the call() method  
```javaScript  
StudentProto.init = function (firstName, birthYear, course) {  
  PersonProto.init.call(this, firstName, birthYear);  
  this.course = course;  
};  
```
4. Then we create any child methods inside the child object  
```javaScript  
StudentProto.introduce = function () {  
  console.log(`My name is ${this.firstName} and I study ${this.course}`);  
};  
```
5. Then we create as many instances of the child object as we want and init them:  
```javaScript  
const jay = Object.create(StudentProto);  
jay.init('Jay', 2012, 'Cinema');  
```

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 221\. Inheritance Between "Classes": ES6 Classes | 9:29

We we re-define an existing method in a child class we can say that the newly created method is **shadowing** the one of the parent class

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 221\. Inheritance Between "Classes": ES6 Classes | 8:05

The `extends` keyword takes care of linking the prototype chain with the parent class

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 221\. Inheritance Between "Classes": ES6 Classes | 5:59

If you don't need any new properties then you don't need to write any constructor methods in the child class

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 221\. Inheritance Between "Classes": ES6 Classes | 3:22

To create a child class using ES6 Classes we need to:

1. create the class and then use the extends keyword `class StudentCL extends PersonCl {}`
2. Create a constructor function as usual with all the arguments including the ones of the parent: `constructor(fullName, birthYear, course) {}`
3. As the first item in the constructor function we need to call the super() function to call the parent class and pass in its arguments:  
```javaScript  
 constructor(fullName, birthYear, course) {  
    super(fullName, birthYear);  
  }  
```
4. Only after that we pass on the other arguments to the constructor function

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 219\. Inheritance Between "Classes": Constructor Functions | 13:10

We definitely don't want to define the two prototypes as `Student.prototype = Person.prototype` as this would make their prototypes one and the same and not one inheriting the other so changing one would also change the other.

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 219\. Inheritance Between "Classes": Constructor Functions | 11:32

We have to create this connection **BEFORE** we add any more methods to the Student prototype because Object.create() will return an empty object

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 219\. Inheritance Between "Classes": Constructor Functions | 11:23

What we will also need to do is manually link the prototype of Student to the Person prototype using the Object.create() function

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 219\. Inheritance Between "Classes": Constructor Functions | 8:29

By passing the this keyword in the call function like this, the this keyword is first set to the empty object being created and then to the new object being created with the new keyword later on

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 219\. Inheritance Between "Classes": Constructor Functions | 8:08

To use another constructor as a parent to a new constructor function, we can call the parent inside the child function but using the call() method and setting the this keyword to this so it reflects the right object 

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 217\. Object.create | 10:41

`Object.create()` creates a new object and the prototype of that object will the the object that we passed in.

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 217\. Object.create | 7:40

Notice that Steven.\_\_proto\_\_ is equal to PersonProto and not PersonProto.prototype

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 217\. Object.create | 6:25

This is the least used way of implementing prototypal inheritance. However it's still useful and you may stumble upon it in real world.

Also we need this function to link different classes together.

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 217\. Object.create | 5:36

The `Object.create()` allows us to set a prototype from any object and link them through the .\_\_proto\_\_ property

  
---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 217\. Object.create | 0:42

With Object.create, there is still the concept of prototypal inheritance but there is no constructor function and no new operator.

Instead we use Object.create on an object which then acts as a prototype for all other objects.

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 216\. Static Methods | 5:39

Static Methods vs Instance Methods. Instance methods are added to the .prototype property while static methods aren't

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 216\. Static Methods | 1:38

The `from()` method is really attached to the Array constructor and **NOT** to the prototype property of the constructor so all the arrays do NOT inherit this method because it's not on their prototype it's simply attached to the prototype itself.

`Number.parseFloat()` is also attached to the Number constructor and not to numbers themselves

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 215\. Setters and Getters | 4:38

Classes also have getters and setters and they work in the exact same way.

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 215\. Setters and Getters | 3:38

It's not mandatory to specify both a setter and a getter for a property, just a setter or a getter would be enough.

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 215\. Setters and Getters | 3:15

Any setter method needs to have exactly one parameter

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 215\. Setters and Getters | 0:11

Getters and Setters are common to all objects of javascript and all of them can have both.

Getters and setters are functions that get and set a value but on the outside they still look like regular properties

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 214\. ES6 Classes | 12:22

The nice thing about classes is that they put all the code that belongs to an object all inside a code block so it's great for organisation. With function constructions it's all a big mess

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 214\. ES6 Classes | 9:28

1. Classes are not hoisted. Function declarations are hoisted, which means we can use them before they are declared in the code but classes are not.
2. Classes just like functions are also first-class citizens. We can pass them into functions and also return them from functions since they are just a special kind of function behind the scenes
3. The body of a class is always executed in strict mode so even if we didn't activate it for our entire script, all the code inside the class will be executed in strict mode.

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 214\. ES6 Classes | 5:31

All of the methods we write in the class, outside the constructor will be on the prototype of the object not on the objects themselves

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 214\. ES6 Classes | 2:05

We can use classes as declarations and classes as expressions, just like with functions. That is because classes are just a special type of function

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 212\. Prototypal Inheritance on Built-In Objects | 9:28

You can easily add new prototype methods to The array constructor or even to the object constructor by calling Array.prototype and then defining a method

But extending the prototype of a built-in object is generally not a good idea:

1. The next version of JavaScript might add a new method with the same name but it may work differently so it will break your code
2. When working with a team of developers, this is normally a really bad idea since if multiple developers develop the same method in different ways it would create all kinds of bugs.

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 212\. Prototypal Inheritance on Built-In Objects | 5:41

when we create an array simply with `[]` is a shorthand and the same as creating an array like `new Array()` 

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 211\. Prototypal Inheritance and The Prototype Chain | 8:45

The prototype chain is pretty similar to the scope chain but instead of working with scopes it works with properties and methods in objects

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 211\. Prototypal Inheritance and The Prototype Chain | 8:01

`Object.__proto__ = null` and it marks the end of the prototype chain since Object doesn't have a prototype for itself. However, every object created will inherit the methods and properties of Object.prototype

So obviously Object.\_\_proto\_\_ is different to Object.prototype, as it's the case in every step of the chain.

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 211\. Prototypal Inheritance and The Prototype Chain | 5:39

The fact that an object is connected to a prototype and it's ability to look up methods and properties in that prototype is what is called **Prototype Chain**

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 211\. Prototypal Inheritance and The Prototype Chain | 4:04

If a property or method is not found within a javascript object, then JavaScript uses looks into the object prototype. This behaviour is what we call Prototype Inheritance or Delegation

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 211\. Prototypal Inheritance and The Prototype Chain | 3:06

This whole process is how things work with function constructors and ES6 classes but not with the Object.create syntax

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 211\. Prototypal Inheritance and The Prototype Chain | 2:37

The new object is automatically returned from the function unless we explicitly return something else which we would normally never would when using a construction function like this.

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 210\. Prototypes | 7:44

in this case, Person.prototype is **NOT** the prototype of person. It's rather the prototype that every object created with the prototype function constructor will inherit

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 210\. Prototypes | 4:03

Every object always has access to all the methods and properties of it's prototype

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 210\. Prototypes | 3:44

to create methods in a constructor function, we use the .prototype property. for example `Person.prototype.calcAge = ` 

Every object created with that constructor function will have access to this method because of Prototypal inheritance.

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 210\. Prototypes | 0:45

each and every function in javascript automatically has a property called prototype and that includes of course constructor functions.

Every object created by a certain constructor function will get access to all the methods and properties that we defined in the constructor prototype property

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 209\. Constructor Functions and the new Operator | 13:58

function constructor are not really a feature of javascript. they are just a pattern that has been developed by other developers and it is widely used.

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 209\. Constructor Functions and the new Operator | 13:06

You should never create a function inside a constructor function. If you do, each instance of that constructor will have to carry around that function code inside them. If we had a 1000 objects we would create a thousand copies of that function.

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 209\. Constructor Functions and the new Operator | 11:42

the properties in the constructor function can be called instance properties as every instance of that constructor function will have those properties

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 209\. Constructor Functions and the new Operator | 10:51

We can check if an object is an instance of a constructor using `instanceof` 

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 209\. Constructor Functions and the new Operator | 10:31

Even though constructor functions are not the same as full blown classes, the objects created using them are still called instances

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 209\. Constructor Functions and the new Operator | 7:56

The key names don't have to have the same name as the function arguments but it is a convention to have it so

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 209\. Constructor Functions and the new Operator | 3:29

We use the new operator to call a constructor function and behind the scenes 4 different steps happen:

1. A new `{}` empty object is created
2. function is called and in the function call the `this` keyword will be set to this newly created object `this = {}`
3. This newly created object is linked to a prototype
4. The object `{}` created in the beginning is automatically returned from the constructor function

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 209\. Constructor Functions and the new Operator | 1:45

in OOP there is a convention that constructor function names always start with a capital letter.

An arrow function will **NOT** work as a constructor function since it doesn't have it's own `this` keyword but normal functions and function expressions will.

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 209\. Constructor Functions and the new Operator | 1:25

A constructor function is little more than a regular function. The main difference is that we call a cosntructor function with the `new` operator

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 208\. OOP in JavaScript | 7:45

In Javascript there are 3 different ways of creating a Class/Child Object kind of behaviour:

1. Constructor Functions  
   1. Technique to create objects from a function  
   2. This is how built-in objects like Arrays, Maps or Sets are actually implemented  
   3. This is how OOP has been done in Javascript since the beginning.
2. ES6 Classes  
   1. The modern alternative to constructor function syntax  
   2. "Syntactic sugar": behind the scenes, ES6 classes work exactly like constructor functions  
   3. ES6 classes do **NOT** behave like classes in classical OOP  
   4. They are basically a layer of abstraction over constructor functions
3. Object.create()  
   1. The easiest and most straightforward way of linking an object to a prototype object  
   2. it's not as used as the other two methods

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 208\. OOP in JavaScript | 6:43

So an array inherits the map() method from its prototype. We can also say that an array delegates the behaviour of mapping to it's prototype.

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 208\. OOP in JavaScript | 2:05

In JavaScript we have something called Prototype and:

* all Objects in javascript are linked to a Prototype Object
* The prototype object contains methods that all objects linked to that prototype can access and use **Prototypal inheritance**
* This is different than the traditional Class/Instance inheritance
* You can also say that objects **delegate** theirbehaviour to the linked prototype. We can also call this mechanism **Delegation**

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 208\. OOP in JavaScript | 1:08

The process of creating an instance is called **Instantiation**

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 207\. What is Object-Oriented Programming? | 17:46

1. Inheritance  
   1. When two classes are closely related, we can have one class inherit from the other  
   2. We will have a **Parent** class and a **Child** class and the **child class extends the parent**  
   3. Inheritance means all methods and properties of a certain class are available in a child class. This allows us to **reuse common logic**  
   4. Child class can obviously have it's now methods and properties
2. Polymorphism  
   1. A child class can **overwrite** a method it inherited from a parent class

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 207\. What is Object-Oriented Programming? | 9:26

There isn't a single correct way of designing a class but there are 4 fundamental principles of OOP:

1. Abstraction  
   1. ignoring or hiding details that don't matter, allowing us to get an overview perspective of the thing we are implementing instead of messing with details that don't matter to our implementation
2. Encapsulation  
   1. Encapsulation means keeping some properties and methods **private** inside the class so they are **not accessible outside the class**. Some other methods are **publicly aspired (API)**  
   2. With encapsulation we prevent external code from accidentally manipulating internal properties/state (state is an objects data)  
   3. Makes it easier for us to change our code without breaking code from the outside

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 207\. What is Object-Oriented Programming? | 7:44

We call all objects created with a class instances of that class.

An instance is a real object created in our code but the class itself is not an object

We can use a class to create as many instances as we want or as many objects from it as we want

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 207\. What is Object-Oriented Programming? | 6:55

The class is just a plan and the plan doesn't contain the real user data yet

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 207\. What is Object-Oriented Programming? | 5:56

In traditional OOP we use classes which are like blueprints to create new objects. like an architect's blueprint from which many houses can be created.

JavaScript does not support real classes.

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 207\. What is Object-Oriented Programming? | 1:09

Today OOP is the most popular and largely used programming paradigm in large scale software engineering 

---

##### 14\. Object-Oriented Programming (OOP) With JavaScript | 207\. What is Object-Oriented Programming? | 0:48

* Paradigm means the style of the code or how we write and organise code.
* Object Oriented Programming or OPP is a programming paradigm based on the concept of objects
* We use objects to **model** (describe) real-world or abstract features
* Objects can contain data (**properties**) or code (**methods**)
* By using objects we can pack data and all corresponding behaviour into one block
* this makes it easy to act directly on the data
* In OOP, objects are self contained pieces of code or blocks of code like applications on their own
* We use Objects as **building blocks** of our **applications** and make objects **interact** with one another
* Interactions happen via a public interface or **API**
* This interface is a bunch of methods that a code outside the object can access to communicate with the object
* OOP was created with the goal of organising code to make it more flexible and easier to maintain (avoid spaghetti code)

---

##### 13\. Advanced DOM and Events | 204\. Efficient Script Loading: defer and async | 5:42

1. Using the **defer** tag  
   1. The script is fetched asynchronously but the execution of the script is deferred until the end of the HTML parsing.  
   2. Loading time is similar to async but HTML parsing is never interrupted  
   3. Should always be used when including **script in the head**, has no practical effect in the body  
   4. DOMContentLoaded fires **after** defer scripts are executed  
   5. defer guarantees scripts are executed in the order they where written  
   6. This is normally the best option for most scripts. and for any scripts in which the order of execution is important

---

##### 13\. Advanced DOM and Events | 204\. Efficient Script Loading: defer and async | 4:54

1. Using the **async** tag in the **head**  
   1. The script is fetched while the HTML is parsing but parsing is still blocked and has to wait until the script is executed.  
   2. The script is downloaded asynchronous but then is executed right away in a synchronous way so the HTML code has to wait to finish parsing  
   3. This still makes page loading shorter than any of the regular ways  
   4. Should always be used when including **script in the head**, has no practical effect in the body  
   5. DOM Loaded event will not wait for the script to be downloaded and executed. Usually this event only fires when all scripts are loaded and executed but async scripts are an exception.  
   6. Async scripts are not guaranteed to be executed in the order they are declared in the code  
   7. Async is better suited for third party scripts where the order doesn't matter like google analytics or an Ad script  
   8. For any code that your own code will not need to interact with async works fine

---

##### 13\. Advanced DOM and Events | 204\. Efficient Script Loading: defer and async | 0:38

There are three ways of loading Javascript:

1. The **regular** way, including JS in the HTML code, either in the **head** or the **end of the body tag**  
   1. **NEVER** include a script in the **head** **without an attribute** like async or defer as it blocks document rendering and can have a huge impact on performance  
   2. At the body end, first the HTML is parsed, then the script is fetched and once it's executed you get the DOMContentLoaded event. Still not ideal since the script could have been loaded before while the HTML was being parsed

---

##### 13\. Advanced DOM and Events | 203\. Lifecycle DOM Events | 8:40

Don't abuse this feature and only use this when extremely necessary.

---

##### 13\. Advanced DOM and Events | 203\. Lifecycle DOM Events | 6:41

The **Window before unload** event gets fired just before a user leaves the page. It can be used to ask users if they are sure they want to leave the page.

You need to pass `e.preventDefault();` and `e.returnValue = '';` for it to work.

---

##### 13\. Advanced DOM and Events | 203\. Lifecycle DOM Events | 4:47

The **Window Load** event is fired not only after the HTML and JavaScript is loaded but also after all images and external resources like CSS are also loaded. It's fired by the Window object

---

##### 13\. Advanced DOM and Events | 203\. Lifecycle DOM Events | 4:22

This is equivalent to the document.ready function in Jquery

---

##### 13\. Advanced DOM and Events | 203\. Lifecycle DOM Events | 3:43

We normally want our javascript to execute only when the DOM Content is Loaded but we don't need to wrap all our code in that event listener because:

By putting the HTML at the end of the Body tag, we are ensuring that it will only be parsed when all the HTML has always been parsed anyway

---

##### 13\. Advanced DOM and Events | 203\. Lifecycle DOM Events | 1:19

This event does not wait for images and other external resources to load

---

##### 13\. Advanced DOM and Events | 203\. Lifecycle DOM Events | 0:50

The **DOM Content Loaded** event is fired after all the HTML has been downloaded and parsed into the DOM Tree. Also, this event is only fired after all scripts have been downloaded and executed.

---

##### 13\. Advanced DOM and Events | 198\. A Better Way: The Intersection Observer API | 3:49

Here are a few important points to understand about the `**root**` option:

1. The `**root**` can be any valid DOM element that contains the target elements you want to observe.
2. The target elements are considered intersecting when they come into or go out of the specified `**root**` element's viewport.
3. If the `**root**` is not the browser viewport, it should be an ancestor of the target elements. If a target element is not a descendant of the `**root**`, it will not trigger intersections.
4. By default, the `**root**` element is the viewport, so setting `**root**` to `**null**` or `**undefined**` will use the viewport as the root.
5. You can select the `**root**` element using various methods such as `**document.querySelector()**` or `**document.getElementById()**`.

---

##### 13\. Advanced DOM and Events | 198\. A Better Way: The Intersection Observer API | 5:12

The callback function can be called with two arguments, the entries and the observer object itself. The entries are an array of the threshold entries

---

##### 13\. Advanced DOM and Events | 198\. A Better Way: The Intersection Observer API | 4:25

The callback function will be called, each time the observed element (our target element) is intersecting the root element at the threshold that we defined

---

##### 13\. Advanced DOM and Events | 197\. Implementing a Sticky Navigation: The Scroll Event | 2:24

Scroll event is not really efficient and should be avoided

---

##### 13\. Advanced DOM and Events | 197\. Implementing a Sticky Navigation: The Scroll Event | 1:58

The scroll event can be accessed on the window object not on the document

---

##### 13\. Advanced DOM and Events | 196\. Passing Arguments to Event Handlers | 2:56

'mouseenter' does not bubble and 'mouseover' does bubble

---

##### 13\. Advanced DOM and Events | 194\. DOM Traversing | 0:22

Dom traversing allows us to select elements based on another element, for example a direct child or direct parent

---

##### 13\. Advanced DOM and Events | 193\. Event Delegation: Implementing Page Navigation | 18:27

Event delegation is even more important when we need to interact with elements which still aren't on the webpage, elements that where added dynamically while the user interacted with the application since it's not possible to add event handlers to elements that do not exist.

But we can still handle events on elements that don't exist at the beginning by using event delegation

---

##### 13\. Advanced DOM and Events | 193\. Event Delegation: Implementing Page Navigation | 17:25

With event delegation we added one single event handler to the parent element and then we simply determined where the click came from. After that we need to filter the clicks into only the ones we are interest into (specific child elements)

---

##### 13\. Advanced DOM and Events | 193\. Event Delegation: Implementing Page Navigation | 11:57

In Event delegation we need three steps:

1. We add the event listener to the common parent of all the elements we are interested in
2. Determine what element originated the event
3. Have a matching strategy: Filter the results into only the elements we are interested in performing the action (the specific child elements)

---

##### 13\. Advanced DOM and Events | 192\. Event Propagation in Practice | 15:06

The addEventListener() function by default only listen for events in the bubbling phase but it's possible to change that behaviour to listening to events during the capture phase by setting a third parameter in the event listener.

---

##### 13\. Advanced DOM and Events | 192\. Event Propagation in Practice | 12:27

We can always stop the propagation using e.stopPropagation() inside the event handler function

---

##### 13\. Advanced DOM and Events | 192\. Event Propagation in Practice | 11:40

the **this** keyword and **event.currentTarget** will always be **the same**

---

##### 13\. Advanced DOM and Events | 192\. Event Propagation in Practice | 9:44

The event that every element in the parent tree receives is exactly the same event!

  
---

##### 13\. Advanced DOM and Events | 192\. Event Propagation in Practice | 4:33

On an event handler, the this keyword always points to the element on which the element is attached.

---

##### 13\. Advanced DOM and Events | 191\. Event Propagation: Bubbling and Capturing | 0:11

JavaScript events have two very important properties:

* Capturing phase  
   * When an event is captured, it travels all the way from the document element until it reaches the target element which is when the target phase starts
* Target Phase  
   * in The target phase is when any event listeners are triggered and callback functions are executed
* Bubbling phase (events bubble up from the target to the document root)  
   * Events pass through every single parent element (but not any sibling elements) all the way to the document in the root

This means that if an event happens on a child element, it is as if the event had happened on every parent element.

  
That means that if we attach event listeners into both a child and parent element, we can have the event happening and executing more than once

  
Not every event captures and bubbles but most of them do. Some of them only ever happen on the target element.

**Events propagate**

---

##### 13\. Advanced DOM and Events | 190\. Types of Events and Event Handlers | 9:54

You can hardcode event listeners into html elements but you really shouldn't 

---

##### 13\. Advanced DOM and Events | 190\. Types of Events and Event Handlers | 6:09

There are a few advantages to using addEventListener instead of "on" event methods. 

* We can add several events to the same element
* We can also remove an event listener if we don't need it anymore

---

##### 13\. Advanced DOM and Events | 190\. Types of Events and Event Handlers | 0:51

Events happen all the time and it doesn't matter if we are actually listening for them or not

---

##### 13\. Advanced DOM and Events | 187\. Selecting, Creating, and Deleting Elements | 16:22

When we insert an element created programatically into the DOM and saved it as a class name, we can't insert that element twice. The element can only exist once inside the DOM. If we want to insert it multiple times then we need to clone that element

---

##### 13\. Advanced DOM and Events | 187\. Selecting, Creating, and Deleting Elements | 7:56

.querySelector() and .querySelectorAll() are the more modern and mostly used selectors but .getElementbyTagName() and .getElementByClassName() are useful when we need a live HTML collection

---

##### 13\. Advanced DOM and Events | 187\. Selecting, Creating, and Deleting Elements | 6:09

A node list does not update itself after DOM manipulation

---

##### 13\. Advanced DOM and Events | 187\. Selecting, Creating, and Deleting Elements | 5:09

The difference between a collection and a node list is that in a collection, if the DOM changes, the collection is also updated immediately and automatically 

---

##### 13\. Advanced DOM and Events | 186\. How the DOM Really Works | 8:57

There is a special node called EventTarget which has the .addEventListener and .removeEventListener methods and it is a parent of the Node Type and the Window node type and so with this, thanks to inheritance, we can call these methods on every other node type.

---

##### 13\. Advanced DOM and Events | 186\. How the DOM Really Works | 7:54

the document Node Type is just another type of node and it contains important methods such as .querySelector, .createElement or .getElementByID

---

##### 13\. Advanced DOM and Events | 186\. How the DOM Really Works | 6:27

Inheritance of Methods and Properties

All child types will also have access to all the methods and properties of their parent node types.

  
---

##### 13\. Advanced DOM and Events | 186\. How the DOM Really Works | 2:51

The DOM consists of many different nodes. Some nodes are HTML tags but some nodes are for example just text. 

* Every Single node of the DOM tree is of the type Node. Each Node is represented in JavaScript by an Object. This object gets access to special node methods and properties such as .textContent, .childNodes, .parentNode, .cloneNode() etc.
* Node has a few child types. These are:  
   1. Element  
         * Properties:  
                  * .innerHTML  
                  * .classList  
                  * .children  
                  * .parentElement  
         * Methods  
                  * append()  
                  * remove()  
                  * ,insertAdjacentHTML()  
                  * .querySelector()  
                  * .closest()  
                  * .matches()  
                  * .scrollIntoView()  
                  * .setAttribute()  
                  * etc  
         * HTML Element Types  
                  * HTMLButtonElement  
                  * HTMLDivElement  
                  * etc  
   2. Text  
   3. Comment  
   4. Document

---

##### 13\. Advanced DOM and Events | 186\. How the DOM Really Works | 0:26

  
* The DOM allows us to make JavaScript interact with the Browser
* We can write JavaScript to create, modify and delete HTML elements; set styles, classes and attributes and listen and respond to events.
* The DOM Tree is generated from an HTML document which we can then interact with;
* The DOM is a very complex API that contains lots of methods and properties to interact with the DOM tree

---

##### 12\. Numbers, Dates, Intl and Timers | 181\. Timers: setTimeout and setInterval | 13:25

The set interval function schedules a callback function to execute every x milliseconds

---

##### 12\. Numbers, Dates, Intl and Timers | 181\. Timers: setTimeout and setInterval | 7:55

To cancel a timeout before it finishes running, we have to store the timeout into a variable and then call the clearTimeout() function with the timeout's name

---

##### 12\. Numbers, Dates, Intl and Timers | 181\. Timers: setTimeout and setInterval | 4:07

This mechanism is called Asynchronous JavaScript

---

##### 12\. Numbers, Dates, Intl and Timers | 181\. Timers: setTimeout and setInterval | 3:21

The set setTimeout() function receives as it's first argument a callback function. The second argument is the actual timeout in milliseconds

What this function actually does is to schedule the callback function call to an x amount of time later

The code keeps running after the function has been called so there's no waiting for the timeout to keep executing our code

---

##### 12\. Numbers, Dates, Intl and Timers | 180\. Internationalizing Numbers (Intl) | 1:12

So to create internationalisation we use the new constructor:

`new Into.NumberFormat('en-US').format(number);` 

---

##### 12\. Numbers, Dates, Intl and Timers | 176\. Creating Dates | 7:11

Dates are just another type of object and they also have methods

---

##### 12\. Numbers, Dates, Intl and Timers | 176\. Creating Dates | 0:48

There are 4 ways to create a date in javascript and they all use the new date constructor

---

##### 12\. Numbers, Dates, Intl and Timers | 171\. Converting and Checking Numbers | 5:05

You cannot do really precise financial or scientific calculations with javascript because of this number base problem

---

##### 12\. Numbers, Dates, Intl and Timers | 171\. Converting and Checking Numbers | 2:55

Numbers are stored internally in Base64 binary. it means its hard to represent fractions that are easy to represent in base 10

---

##### 12\. Numbers, Dates, Intl and Timers | 171\. Converting and Checking Numbers | 1:59

Numbers in Javascript are also integer numbers no matter if we write them as decimals or not

---

##### 11\. Working With Arrays | 167\. Array Methods Practice | 20:36

Creating an object using the reduce method

---

##### 11\. Working With Arrays | 167\. Array Methods Practice | 20:14

You can use the object brackets notation to access a property using variables (which you can't using the dot notation.

  
```javaScript
 const obj = { deposits: 0, withdrawals: 0 };
const temp = 'deposits'
obj[temp] = 2;
```

---

##### 11\. Working With Arrays | 167\. Array Methods Practice | 11:49

The ++ operator does increment a value but it returns the previous value. 

```javaScript
let a= 10
console.log(a++) //It does increment `a` but it returns `a=10`, the previous val
console.log(a) // Now does return `11`
```

To solve that we can use the prefixed ++ operator

```javaScript
let a= 10
console.log(++a) // Now it increments `a` and returns the incremented value
console.log(a) // Now does return `11`
```

---

##### 11\. Working With Arrays | 165\. More Ways of Creating and Filling Arrays | 11:02

This function was created to create arrays from "array like" data structures like other iterables like strings, maps or sets

---

##### 11\. Working With Arrays | 164\. Sorting Arrays | 21:11

neat trick for toggling a click function

---

##### 11\. Working With Arrays | 164\. Sorting Arrays | 4:00

The callback function takes 2 parameters, the current value and the next value.

---

##### 11\. Working With Arrays | 162\. some and every | 1:00

The some methods is very similar to the .includes() method. It loops through an array to checking for a condition but in this case, the some() method executes a callback function that can have a complex set of conditions instead of just looking for equality which is what the includes() method does.

---

##### 11\. Working With Arrays | 162\. some and every | 1:42

The some method loops through the array to check if any items meet the logic condition specified

---

##### 11\. Working With Arrays | 159\. Implementing Login | 19:18

To clear the focus on login fields we use the .blur() function on the input field

---

##### 11\. Working With Arrays | 159\. Implementing Login | 9:56

optional chaining allows us to avoid doing multiple && if statement checks

---

##### 11\. Working With Arrays | 159\. Implementing Login | 4:06

in a form we need to deactivate the default behaviour of the HTML which is to submit the form and reload the page we can do that by using the preventDefault() function. 

  
```javaScript
btnLogin.addEventListener('click', function (e) {
  //Prevent form from submitting
  e.preventDefault();
}); 
```

  
Another great thing about forms is that they already have a keypress event so whenever a user presses enter it's the same as a click event

---

##### 11\. Working With Arrays | 158\. The find Method | 2:48

Main differences between find() and filter()

* Find returns the first value that meets the callback functions condition while the filter method returns an array with all matching values
* Filter method returns an array while find returns the element itself, not an array

---

##### 11\. Working With Arrays | 156\. The Magic of Chaining Methods | 18:46

Don't overuse chaining as it can cause big performance issues with big arrays.

it's a bad practice to chain methods that mutate the original array

---

##### 11\. Working With Arrays | 156\. The Magic of Chaining Methods | 13:04

Math.abs() removes the positive/negative sign of a number and only shows the positive value

---

##### 11\. Working With Arrays | 156\. The Magic of Chaining Methods | 6:27

one of the great uses of getting access to the current array on the map(), filter() and reduce() methods is that we can use it to debug the previous step when chaining multiple operations

---

##### 11\. Working With Arrays | 156\. The Magic of Chaining Methods | 6:27

one of the great uses of getting access to the current array on the map(), filter() and reduce() methods is that we can use it to debug the previous step when chaining multiple operations

---

##### 11\. Working With Arrays | 155\. Coding Challenge #2 | 9:47

Another way of calculating averages is by adding to an accumulator variable each individual number divided by the total length of the array

Something like this:

```javaScript
let average = 0;
average+= value/array.lenght;
//repeat the last operation for each value
```

---

##### 11\. Working With Arrays | 154\. The reduce Method | 19:00

Don't put zero as the initial value of the accumulator when trying to calculate the maximum or minimum value. always go with the first value of the array in case for example that all numbers in an array are negative.

---

##### 11\. Working With Arrays | 154\. The reduce Method | 7:12

The reduce method takes 4 parameters in the callback function and one extra parameter after the callback.

They are for the callback function:

1. **accumulator**
2. **current value**
3. **index number**
4. **whole array**

The extra value after the callback function is the **initial value** for the **accumulator** variable

---

##### 11\. Working With Arrays | 154\. The reduce Method | 7:12

The reduce method takes 4 parameters in the callback function and one extra parameter after the callback.

They are for the callback function:

1. **accumulator**
2. **current value**
3. **index number**
4. **whole array**

The extra value after the callback function is the **initial value** for the **accumulator** variable

---

##### 11\. Working With Arrays | 153\. The filter Method | 0:23

The filter array returns a new array with values from the original array filtered by a certain condition.

The method does that by execution a callback function as well.

---

##### 11\. Working With Arrays | 152\. Computing Usernames | 10:28

We don't return anything in this function, instead we are getting a **side effect** we are doing something to the account object

---

##### 11\. Working With Arrays | 151\. The map Method | 6:21

Functional programming is getting more and more traction in javascript. Using a function to map an array would be the way to go following that trend instead of using a for of loop

---

##### 11\. Working With Arrays | 150\. Data Transformations: map, filter, reduce | 0:18

These are methods used to create new arrays based on transforming data from other arrays:

* Map  
   * Map method takes an array, loops over it and as it loops it applies a callback function to the current element.  
   * It maps the values of the original array into a new array.  
   * It creates a brand new array by applying an operation to the original array
* Filter  
   * Filters the elements on the original array that satisfy the current condition\\  
   * it returns a new a filtered array  
   * Elements for which the condition is true will be returned into the new array. All other elements will get filtered out.
* Reduce  
   * Used to boil down all the values of the original array into one single value. An example can be to add all the elements of an array together but we can do other things  
   * We say that this whole process has reduced the original array into one single value  
   * It has an accumulator variable  
   * This method only returns a value, not an array.

---

##### 11\. Working With Arrays | 148\. Creating DOM Elements | 12:13

to insert an html item we will use the `.insertAdjacentHTML` method and we need to pass two parameters. the position and the html to insert.

The position can be one of four options:

* beforebegin
* afterbegin
* beforeend
* afterend

---

##### 11\. Working With Arrays | 148\. Creating DOM Elements | 15:57

to empty an html container we can simply use the .innerHTML property and set it to an empty string like: `containerMovements.innerHTML = '';` 

---

##### 11\. Working With Arrays | 146\. forEach With Maps and Sets | 5:23

in JavaScript a variable simply called `_` conventionaly is a value that we will trow away later

---

##### 11\. Working With Arrays | 146\. forEach With Maps and Sets | 3:59

A set doesn't have keys and it doesn't have indexes either so the first two parameters are the same, the **value**

---

##### 11\. Working With Arrays | 146\. forEach With Maps and Sets | 0:34

`**forEach()** `method also works with maps and sets. For maps, callback function has 3 parameters you can pass: **Value**, **Key** and the **Map** itself

---

##### 11\. Working With Arrays | 145\. Looping Arrays: forEach | 11:47

**You can not break out** of a **forEach loop** so the continue and break statement do not work

---

##### 11\. Working With Arrays | 145\. Looping Arrays: forEach | 11:17

The forEach() method can pass into the function the current item, the index and the entire array and we can define them in the callback function with whatever variable name we want:

```javaScript
array.forEach(function (item, index, array){
})
```

---

##### 11\. Working With Arrays | 145\. Looping Arrays: forEach | 5:57

We give the forEach() method **instructions** by giving it a **callback function** that **contains these instructions**

---

##### 11\. Working With Arrays | 145\. Looping Arrays: forEach | 4:56

When you pass an argument into the function of the forEach() method, that value becomes each iteration item of the array

---

##### 11\. Working With Arrays | 145\. Looping Arrays: forEach | 2:56

For each is a higher order function which requires a callback function to tell it what to do.

---

##### 11\. Working With Arrays | 145\. Looping Arrays: forEach | 2:15

`Math.abs() `shows the absolute value of a number 5 for -5 for example

---

##### 11\. Working With Arrays | 144\. The new at Method | 5:41

The at() method also works on strings

---

##### 11\. Working With Arrays | 144\. The new at Method | 1:44

The at() method shows you the value of an array at a specific position

---

##### 11\. Working With Arrays | 143\. Simple Array Methods | 13:57

The concat method concatenates multiple arrays, it has to be called on top of one array and then we define which other arrays to concatenate to it

---

##### 11\. Working With Arrays | 143\. Simple Array Methods | 13:39

The reverse method does actually mutate the original array

---

##### 11\. Working With Arrays | 143\. Simple Array Methods | 13:39

The reverse method does actually mutate the original array

---

##### 11\. Working With Arrays | 143\. Simple Array Methods | 11:41

The second paramete in the splice method is actually a delete count so different from the slice method.

---

##### 11\. Working With Arrays | 143\. Simple Array Methods | 9:37

A common use of the splice method is to remove the last element of an array

---

##### 11\. Working With Arrays | 143\. Simple Array Methods | 7:56

The **splice** method works very similarly to **slice** but it does **actually change the original array**

---

##### 11\. Working With Arrays | 143\. Simple Array Methods | 7:36

The advantage of the slice method is that because it returns an array, you can chain other methods after it

---

##### 11\. Working With Arrays | 143\. Simple Array Methods | 6:53

We can also get a shallow copy using the spread operator

---

##### 11\. Working With Arrays | 143\. Simple Array Methods | 6:44

We can use the slice method to create a shallow copy of any array without giving it any arguments

---

##### 11\. Working With Arrays | 143\. Simple Array Methods | 5:34

With negative values the slice parameter will start counting at the end with -1 being only the last element

---

##### 11\. Working With Arrays | 143\. Simple Array Methods | 5:13

The length with slice is always the end parameter minus the beginning parameter

---

##### 11\. Working With Arrays | 143\. Simple Array Methods | 4:44

In the slice method the end paramenter is not included in the output

---

##### 11\. Working With Arrays | 143\. Simple Array Methods | 3:32

Slice method, returns a rew array that is a slice of the original array without altering the original

---

##### 11\. Working With Arrays | 143\. Simple Array Methods | 1:31

**Methods** are simply **functions attached to objects**.

If we have array methods that means that **arrays are also objects.**

Array methods are simply functions attached to all arrays that we create in javascript

---

##### 10\. A Closer Look at Functions | 139\. More Closure Examples | 14:00

The **closure** has **priority over the scope chain**, even priority over the global scope as this example shows

---

##### 10\. A Closer Look at Functions | 139\. More Closure Examples | 12:44

  
_//The callback function was executed completely independent of the boardPassengers function but it stored the arguments that where passeed in the parent function at the time of creation_

---

##### 10\. A Closer Look at Functions | 139\. More Closure Examples | 2:32

In this exasmple we create a closure with a function stored in a variable that wasn't even created inside the original function.

---

##### 10\. A Closer Look at Functions | 139\. More Closure Examples | 2:14

We don't need to return if function from another function in order to create a closure.

---

##### 10\. A Closer Look at Functions | 138\. Closures | 16:49

We do not have to create closures manually. Javascript does this automatically. 

We also can't explicitly access variables in closures.

---

##### 10\. A Closer Look at Functions | 138\. Closures | 14:15

Definitions of closure:

* A closure is the closed-over **variable environment** of the execution context **in which a function was created**, even **after** that execution context is gone
* A closure gives a function access to all the variables **of its parent function**, even **after** that parent function has returned. The function keeps a **reference** to its outer scope, which **preserves** the scope chain throughout time.
* A closure makes sure that a function never looses access to the **variables that existed at the function's birth place**.
* A closure is like a **backpack** that a function carries around wherever it goes. This backpack has all the **variables that were present in the environment where the function was created.**

---

##### 10\. A Closer Look at Functions | 138\. Closures | 13:38

The closure has priority over the scope chain.

  
---

##### 10\. A Closer Look at Functions | 138\. Closures | 12:48

Thanks to the closure, a function never looses access to the variable environment of when it was created.

---

##### 10\. A Closer Look at Functions | 138\. Closures | 11:20

So the closure is basically this variable environment that gets attached to the function, exactly as it was at the time and context that the variable was created.

---

##### 10\. A Closer Look at Functions | 138\. Closures | 10:12

Any function always has access to the variable environment of the execution context in which the function was created.

Even after that execution context is gone.

This is what is called a **closure**.

---

##### 10\. A Closer Look at Functions | 138\. Closures | 8:06

A closure makes a function **remember** all the variables that **existed** at the functions **birthplace**

---

##### 10\. A Closer Look at Functions | 138\. Closures | 1:14

A closure is not a feature that we explicitly use.

We don't create closures manually like we create a new array or a new function.

Closures simply happen automatically in certain situations, we just need to recognise those situations.

---

##### 10\. A Closer Look at Functions | 137\. Immediately Invoked Function Expressions (IIFE) | 5:07

This is called data encapsulation or data privacy

---

##### 10\. A Closer Look at Functions | 137\. Immediately Invoked Function Expressions (IIFE) | 5:04

When we create an IIFE, everything inside the scope of that function is inaccessible in the Global scope, thus it's private.

---

##### 10\. A Closer Look at Functions | 137\. Immediately Invoked Function Expressions (IIFE) | 0:38

A function that is executed once and then disapears.

We have to not name the function or store it in a variable. we have to wrap it in parenthesis and execute it right after with another set of () like this

```javaScript
(function () {
  console.log(`This function will never run again`);
})();
```

---

##### 10\. A Closer Look at Functions | 135\. The bind Method | 10:31

On an event handler function, the this keyword always points to the element to which the event is attached to

---

##### 10\. A Closer Look at Functions | 134\. The call and apply Methods | 10:14

We **didn't call** the book function ourselves. We called the **call() method** which then calls the book function **with the this keyword set to eurowings**

---

##### 10\. A Closer Look at Functions | 134\. The call and apply Methods | 9:09

Functions are just objects so that means they can have methods.

The **call()** method is a function method.

---

##### 10\. A Closer Look at Functions | 134\. The call and apply Methods | 8:22

```javaScript
//This doesn't work because in strict mode the this keyword in a function points to undefined
```

---

##### 10\. A Closer Look at Functions | 132\. Functions Accepting Callback Functions | 11:11

**Callback functions** allows us to create **abstraction**

We abstract the code of the callback function away into other functions. We create a new level of abstraction.

A Higher-order function operates at a higher order of abstraction then the callback function

---

##### 10\. A Closer Look at Functions | 131\. First-Class and Higher-Order Functions | 4:03

Functions that return a new function:

```javaScript
function count() {
let counter = 0;
return function (){
  counter++;
};
```

In this case the count function is the **Higher-order** function who returns the **returned function**

---

##### 10\. A Closer Look at Functions | 131\. First-Class and Higher-Order Functions | 3:29

Function that **receives** another function like an event listener: 

```javaScript
const greet = ( => console.log('Hey Theo');
btnClose.addEventListener('click', greet);
```

Here the `addEventListener` function is the **Higher-order** function and the `greet` function is the **callback** function.

The **callback** function will be called later by the **Higher-order** function.

It's like the greet function saying 'hey, don't greet me yet, but call me back once you are ready', and that will only happen when the click event happens.

---

##### 10\. A Closer Look at Functions | 131\. First-Class and Higher-Order Functions | 2:50

Higher Order functions:

* A function that **receives** another function as an argument or a function that **returns** a new function or **both**
* This is only possible because of first-class functions

---

##### 10\. A Closer Look at Functions | 131\. First-Class and Higher-Order Functions | 1:10

since functions are values there are many more things we can do with them like:

  
* Storing functions inside variables (function expressions)
* Storing functions inside objects (object methods)
* We can also pass functions as arguments to other functions
* We can also return a function from another function
* There are also function methods (methods we can call on functions)

---

##### 10\. A Closer Look at Functions | 131\. First-Class and Higher-Order Functions | 0:39

First-Class Functions

* JavaScript treats functions as **first-class citizens**
* This means that functions are **simply values**
* Functions are just another **"type" of object**

since objects are values, functions are values (since they are objects)

---

##### 10\. A Closer Look at Functions | 130\. How Passing Arguments Works: Value vs. Reference | 12:02

in programming there are two terms commonly used:

**passing by values**

**passing by reference**

In Javascript there is actually no pass by reference. It only pass by values even though with objects it seems like we pass by reference, we still pass a value. The only thing is that value contains a memory object which references to the original object in memory 

---

##### 10\. A Closer Look at Functions | 130\. How Passing Arguments Works: Value vs. Reference | 6:44

When we pass a reference type to a function we are merely passing a the memory address of where that function actually is, we are not passing a new object into the function.

When we pass a primitive to the function on the other hand, it becomes it's own new copy with different memory address inside the function.

So if we change an object inside a function it will change the original object itself.

---

##### 10\. A Closer Look at Functions | 130\. How Passing Arguments Works: Value vs. Reference | 2:36

Normally it's not good practice to change the parameters of a function

---

##### 10\. A Closer Look at Functions | 130\. How Passing Arguments Works: Value vs. Reference | 0:19

Primitives: **Primitive Types**

Objects: **Reference Types**

  
---

##### 10\. A Closer Look at Functions | 129\. Default Parameters | 7:57

you can't skip arguments when calling a function, unless you actually set the parameter to undefined when calling the function

---

##### 10\. A Closer Look at Functions | 129\. Default Parameters | 7:32

when setting default parameters to functions, you can even use previously defined parameters as part of the default calculation like 

```javaScript
const createBooking = function (
  flightNum,
  passengerNum = 1,
  price = 199 * passengerNum
)
```

They have to have been defined before so if price in this case was before passengerNum it wouldn't work.

---

##### 9\. Data Structures, Modern Operators and Strings | 124\. Working With Strings - Part 3 | 0:20

Split allows us to split a string into multiple parts based on a divider string.

---

##### 9\. Data Structures, Modern Operators and Strings | 122\. Working With Strings - Part 1 | 14:51

Whenever we call a method on a string, JavaScript will behind the scenes convert a **string** **primitive** into a **string object**, and it's on that object where the method is called. This method is called **boxing**.

What javascript does is call the `String()` function on the string which makes it look like an array like object.

---

##### 9\. Data Structures, Modern Operators and Strings | 122\. Working With Strings - Part 1 | 1:35

```javaScript
// We can access each character of a string just like in an array
console.log(plane[0]);
```

---

##### 9\. Data Structures, Modern Operators and Strings | 120\. Summary: Which Data Structure to Use? | 8:18

When to use:

Arrays:

* When you need **ordered** list of values (might contain duplicate)
* Use when you need to **manipulate** data

vs.

Sets:

* Use when you need to work with **unique** values
* Use when **high-performance** is really important
* Use to **remove duplicates** from arrays

  
Objects:

* More "traditional" key/value store ("abused" objects)
* easier to write and access values with `.` and `[]`
* Use when you need to include **functions** (methods)
* Use when working with JSON (can convert to map)

v.s

Maps:

* Better performance
* keys can have any data type
* Easy to iterate
* Easy to compute size
* Use when you simply need to map key to value
* Use when you need keys that are **not strings**

---

##### 9\. Data Structures, Modern Operators and Strings | 117\. Sets | 0:00

**Other Types of Data Structure** not covered here**:**

* Built into JavaScript  
   1. WeakMap  
   2. WeakSet
* Not-Built In:  
   1. Stacks  
   2. Queues  
   3. Linked Lists  
   4. Trees  
   5. Hash tables

---

##### 9\. Data Structures, Modern Operators and Strings | 120\. Summary: Which Data Structure to Use? | 2:39

1. Simple list? **Array** or **Set** ( here we simply have values without description)  
   1. Whenever we need Values in Order or when values may contain duplicates or when that data needs to be manipulated: **Array**  
   2. When we need unique values, when high performance is really important, to remove duplicate in arrays: **Set**
2. Key Value Pairs? **Object** or **Map** (do we need to describe the values with a key?)

---

##### 9\. Data Structures, Modern Operators and Strings | 120\. Summary: Which Data Structure to Use? | 2:18

From those 3 sources, we normally get a collection of data. How do we store it? We use data structures:

1. Arrays
2. Objects
3. Sets
4. Maps

---

##### 9\. Data Structures, Modern Operators and Strings | 120\. Summary: Which Data Structure to Use? | 0:55

**Three sources of data**:

1. **From the program itself**: data written directly in the source code
2. **From the UI:** Data input from the user or data written in DOM
3. **From external sources:**  Data fetched for example from web APIs

---

##### 9\. Data Structures, Modern Operators and Strings | 119\. Maps: Iteration | 3:14

You can create Maps using the array notation so one array that contains multiple arrays. each of the sub arrays is a key, value pair. This structure is very similar to what we get as a result when we use the `Object.entries()` method

---

##### 9\. Data Structures, Modern Operators and Strings | 118\. Maps: Fundamentals | 12:34

If you use an array or an object as a key, to retrieve it later you have to first store it in a variable to get it's unique memory location and then call that variable on the .get() method, otherwise the get method will be trying to get a different array with the same values

---

##### 9\. Data Structures, Modern Operators and Strings | 118\. Maps: Fundamentals | 5:40

The type of the key matters when retrieving data from a set

---

##### 9\. Data Structures, Modern Operators and Strings | 118\. Maps: Fundamentals | 3:37

when you use the `.set()` method on a map, it adds an element and also returns the map so it means you can chain the set method

---

##### 9\. Data Structures, Modern Operators and Strings | 118\. Maps: Fundamentals | 3:37

when you use the `.set()` method on a map, it adds an element and also returns the map so it means you can chain the set method

---

##### 9\. Data Structures, Modern Operators and Strings | 118\. Maps: Fundamentals | 0:23

in Javascript a map is a data structure that we can use to map values to keys.

So the difference between an object and a map is that in an object, a key is necessarily a string. On a map a key can have be of any type, including objects.

---

##### 9\. Data Structures, Modern Operators and Strings | 117\. Sets | 8:44

Main use of sets is to remove duplicate values of arrays

---

##### 9\. Data Structures, Modern Operators and Strings | 117\. Sets | 6:54

In sets there are no indexes, and there is no order. There is no way to get values out of a set, you can only check if a value exists on a set.

---

##### 9\. Data Structures, Modern Operators and Strings | 117\. Sets | 3:20

If you pass a single string onto a set it will record every single letter as a separate element

---

##### 9\. Data Structures, Modern Operators and Strings | 117\. Sets | 2:44

Sets are very different from arrays because each value is unique and the order of elements in a set is irrelevant

---

##### 9\. Data Structures, Modern Operators and Strings | 117\. Sets | 2:32

Just like arrays, sets are also iterables.

---

##### 9\. Data Structures, Modern Operators and Strings | 117\. Sets | 0:45

As set is a collection of unique values, there can't be any duplicates

---

##### 9\. Data Structures, Modern Operators and Strings | 117\. Sets | 0:27

Before javascript only had two data structures, Arrays and Objects, now there are two more types, Sets and Maps which are pretty common in other programming languages.

---

##### 9\. Data Structures, Modern Operators and Strings | 115\. Looping Objects: Object Keys, Values, and Entries | 8:54

Looping over an object while destructuring its key and content into separate variables

---

##### 9\. Data Structures, Modern Operators and Strings | 115\. Looping Objects: Object Keys, Values, and Entries | 6:15

To loop over the entire object we use the `Object.entries(objectName)` method. it's different from an array in which we use the array name and then call of its entries `arrayName.entries()` 

---

##### 9\. Data Structures, Modern Operators and Strings | 115\. Looping Objects: Object Keys, Values, and Entries | 0:38

Object **property names**, also called **keys**

---

##### 9\. Data Structures, Modern Operators and Strings | 115\. Looping Objects: Object Keys, Values, and Entries | 0:14

We can easily loop over arrays which are Iterable but we can also loop over objects which are not iterable but in an indirect way.

---

##### 9\. Data Structures, Modern Operators and Strings | 114\. Optional Chaining (?.) | 15:53

We almost always use the options chaining operator together with the Nullish Coalescing Operator to set a default value in case the result of the optional chaining was undefined or null

---

##### 9\. Data Structures, Modern Operators and Strings | 114\. Optional Chaining (?.) | 15:13

Optional chaining also works for calling a property on an array

---

##### 9\. Data Structures, Modern Operators and Strings | 114\. Optional Chaining (?.) | 11:48

optional chaining also works for calling methods! We can check if a method exists before we call it 

---

##### 9\. Data Structures, Modern Operators and Strings | 114\. Optional Chaining (?.) | 11:25

Optional chaining as well as the Nullish Coalescing Operator work well together and they both really on the concept of Nullish values 

---

##### 9\. Data Structures, Modern Operators and Strings | 114\. Optional Chaining (?.) | 8:33

to use a variable name as a property name when calling an object property we need to put it in brackets like

```javaScript
const day = thu;
restaurant.openingHours[day];
//instead of writing it with a dot because it would not work.
restaurant.openingHours.day
```

---

##### 9\. Data Structures, Modern Operators and Strings | 114\. Optional Chaining (?.) | 5:31

With optional chaining, it checks if all of the previous properties exist and will return undefined if any of them don't exist, saving you writing multiple IF statements like: 

```javaScript
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);
 
//You can instead write: 
console.log(restaurant.openingHours?.mon?.open);
```

---

##### 9\. Data Structures, Modern Operators and Strings | 114\. Optional Chaining (?.) | 4:30

optional chaining will check if the property before `?. ` exists and only then it will try and fetch the next variable and if it doesn't exist it will immediately return undefined.

---

##### 9\. Data Structures, Modern Operators and Strings | 113\. Enhanced Object Literals | 6:11

if we write an object property between brackets we can do any kind of computation.

---

##### 9\. Data Structures, Modern Operators and Strings | 113\. Enhanced Object Literals | 3:54

in ES6 we can write methods directly inside the object with an easier syntax: `methodName(){},` instead of `methodName: function(){},` 

---

##### 9\. Data Structures, Modern Operators and Strings | 113\. Enhanced Object Literals | 2:35

If we have an object outside an object that we want to include in it, all we need to do is write it's name with a comma and it will be included inside the object.

---

##### 9\. Data Structures, Modern Operators and Strings | 113\. Enhanced Object Literals | 0:39

when we literally write an object and it's contents using the curly braces syntax we have an **Object Literal**

---

##### 9\. Data Structures, Modern Operators and Strings | 112\. Looping Arrays: The for-of Loop | 7:09

We can use the restructuring assignment on for of arrays together with the .entries() method to get both the item and the index in separate variables.

  
```javaScript
 for (const [i, element] of menu.entries()) {
  console.log(element);
  console.log(i);
} 
```

---

##### 9\. Data Structures, Modern Operators and Strings | 110\. Logical Assignment Operators | 11:04

The AND Assignment operator assigns a value to a variable if it is currently truthy

---

##### 9\. Data Structures, Modern Operators and Strings | 110\. Logical Assignment Operators | 5:57

The next coalescing logical operator is ??= which short circuits if the value is nullish instead of falsy

---

##### 9\. Data Structures, Modern Operators and Strings | 110\. Logical Assignment Operators | 4:58

The ||= assignment operator assigns a value to a variable if that variable is currently falsy

---

##### 9\. Data Structures, Modern Operators and Strings | 109\. The Nullish Coalescing Operator (??) | 2:01

The bullish coalescent operator works with the idea of Nullish values instead of Falsy values.

Nullish values are: null, undefined it does not shortcut with 0, with empty strings or NaN

---

##### 9\. Data Structures, Modern Operators and Strings | 108\. Short Circuiting (&& and ||) | 15:28

short circuiting can make the code hard to read even if it's easy to write 

---

##### 9\. Data Structures, Modern Operators and Strings | 108\. Short Circuiting (&& and ||) | 8:54

short circuiting the || operator is great for checking if a value exists and if not setting a default value in it's place

---

##### 9\. Data Structures, Modern Operators and Strings | 108\. Short Circuiting (&& and ||) | 3:28

the result of the OR operator doesn't have to be a boolean, it will simply return the next truthy value

---

##### 9\. Data Structures, Modern Operators and Strings | 108\. Short Circuiting (&& and ||) | 2:02

Short circuiting means that if the first value is a truthy value it will immediately return that first value.

---

##### 9\. Data Structures, Modern Operators and Strings | 108\. Short Circuiting (&& and ||) | 1:21

Logical operators can use any data type. They can return any data type and they do something called short circuiting.

  
---

##### 9\. Data Structures, Modern Operators and Strings | 107\. Rest Pattern and Parameters | 6:29

The rest pattern should always be the last in the destructuring assignment. Also there can only ever be one rest element in any restructuring assignment.

---

##### 9\. Data Structures, Modern Operators and Strings | 107\. Rest Pattern and Parameters | 1:56

The spread operator is always on the right side of the assignment operator \`=\` sign.

---

##### 9\. Data Structures, Modern Operators and Strings | 107\. Rest Pattern and Parameters | 0:54

The Rest Pattern uses the same syntax to do the opposite, to collect multiple values and put them into an array so it's the opposite of the spread operator.

---

##### 9\. Data Structures, Modern Operators and Strings | 107\. Rest Pattern and Parameters | 0:38

We use the spread operator to build new arrays or pass multiple values into a function. In both cases we use the spread operator to spread an array into individual elements.

---

##### 9\. Data Structures, Modern Operators and Strings | 106\. The Spread Operator (...) | 12:16

Again, you can only use where you would use multiple values separated by comma

---

##### 9\. Data Structures, Modern Operators and Strings | 106\. The Spread Operator (...) | 11:09

We can only use the spread operator when building an array or when passing values into a function 

---

##### 9\. Data Structures, Modern Operators and Strings | 106\. The Spread Operator (...) | 11:09

We can only use the spread operator when building an array or when passing values into a function 

---

##### 9\. Data Structures, Modern Operators and Strings | 106\. The Spread Operator (...) | 11:09

We can only use the spread operator when building an array or when passing values into a function 

---

##### 9\. Data Structures, Modern Operators and Strings | 106\. The Spread Operator (...) | 11:09

We can only use the spread operator when building an array or when passing values into a function 

---

##### 9\. Data Structures, Modern Operators and Strings | 106\. The Spread Operator (...) | 11:09

We can only use the spread operator when building an array or when passing values into a function 

---

##### 9\. Data Structures, Modern Operators and Strings | 106\. The Spread Operator (...) | 11:09

We can only use the spread operator when building an array or when passing values into a function 

---

##### 9\. Data Structures, Modern Operators and Strings | 106\. The Spread Operator (...) | 9:28

Spread operator works on all iterables like string,array, map or set

---

##### 9\. Data Structures, Modern Operators and Strings | 106\. The Spread Operator (...) | 6:40

The difference between deconstructing and the spread operator is that the spread operator doesn’t create new variables, it should be used somewhere where you would write values separated by a comma 

---

##### 9\. Data Structures, Modern Operators and Strings | 106\. The Spread Operator (...) | 6:40

The difference between deconstructing and the spread operator is that the spread operator doesn’t create new variables, it should be used somewhere where you would write values separated by a comma 

---

##### 9\. Data Structures, Modern Operators and Strings | 105\. Destructuring Objects | 2:36

To restructure objects we use curly braces and we need to call the properties by their exact name

---

##### 9\. Data Structures, Modern Operators and Strings | 103\. Destructuring Arrays | 2:07

Destructuring is a ES6 way of unpacking the values of an array into separate variables

---

##### 8\. How JavaScript Works Behind the Scenes | 100\. Primitives vs. Objects in Practice | 14:23

Every object has it's own unique address in the heap, including objects within objects which get their own individual address separate to their parent object.

---

##### 8\. How JavaScript Works Behind the Scenes | 100\. Primitives vs. Objects in Practice | 10:14

A deep clone of a object is difficult to achieve. and there is no easy way of doing it

---

##### 8\. How JavaScript Works Behind the Scenes | 100\. Primitives vs. Objects in Practice | 8:40

To actually copy an object and be able to change it independently from the original object we can use the `Object.assign()` function.

But that only works for shallow objects, if there is another object within an object this method will not work.

---

##### 8\. How JavaScript Works Behind the Scenes | 99\. Primitives vs. Objects (Primitive vs. Reference Types) | 13:57

Whenever you think you are copying an object, you are only creating a new variable that points to the exact same object.

---

##### 8\. How JavaScript Works Behind the Scenes | 99\. Primitives vs. Objects (Primitive vs. Reference Types) | 12:34

Variables declared with const are only immutable for primitive values but not for reference values.

---

##### 8\. How JavaScript Works Behind the Scenes | 99\. Primitives vs. Objects (Primitive vs. Reference Types) | 7:38

When we reference a variable, we actually end up referencing a memory address in the call stack which happens to have a certain value stored.

  
---

##### 8\. How JavaScript Works Behind the Scenes | 99\. Primitives vs. Objects (Primitive vs. Reference Types) | 5:37

**Primitive Types** are stored in the **Call Stack**. 

**Reference Types** are stored in the **Heap**

---

##### 8\. How JavaScript Works Behind the Scenes | 99\. Primitives vs. Objects (Primitive vs. Reference Types) | 4:54

When talking about memory management, it's usual to call primitives **Primitive Types,** and objects **Reference Types**

---

##### 8\. How JavaScript Works Behind the Scenes | 99\. Primitives vs. Objects (Primitive vs. Reference Types) | 0:52

**JavaScript Primitive** data types (Primitive Types):

* Number
* String
* Boolean
* Undefined
* Null
* Symbol
* BigInt

**JavaScript Object** data types (Reference Types):

* Object Literal
* Arrays
* Functions
* Many more

---

##### 8\. How JavaScript Works Behind the Scenes | 98\. Regular Functions vs. Arrow Functions | 12:58

for a function inside a method (just a function expression inside an object), to access the this keyword we either have to save it as a separate variable outside the function like: `self=this` and use `self` instead of `this` or we can use an arrow function since the arrow function inherits the this keyword from the parent scope. even nested arrow functions will inherit the parent object calling the initial method. 

---

##### 8\. How JavaScript Works Behind the Scenes | 98\. Regular Functions vs. Arrow Functions | 5:33

You should never ever use an arrow function as a method. Even if you are not using the this keyword, don't use an arrow function.

---

##### 8\. How JavaScript Works Behind the Scenes | 98\. Regular Functions vs. Arrow Functions | 2:13

the brackets that define an object do not create a code block! they are an object literal.

---

##### 8\. How JavaScript Works Behind the Scenes | 97\. The this Keyword in Practice | 9:43

the **this** keyword really points to the object calling it, not to the object in which the method was written

---

##### 8\. How JavaScript Works Behind the Scenes | 97\. The this Keyword in Practice | 3:21

Arrow function does not get the this keyword, It uses the lexical this keyword of the parent scope which in this case is the window object 

---

##### 8\. How JavaScript Works Behind the Scenes | 96\. The this Keyword | 5:39

What the this keyword is **NOT**:

1. this will never point to the function in which we are using it
2. this will never point to the variable environment of the function

---

##### 8\. How JavaScript Works Behind the Scenes | 96\. The this Keyword | 2:05

1. **Method** \-> this = <object that is calling the method>
2. **Simple function call** \-> this = undefined (this is only valid for strict mode, otherwise it points to the global object (the window object)
3. **Arrow functions** \-> this = <this of surrounding function (lexical this)> They do not get a this keyword
4. **Event listener** \-> this = <DOM element that the handler function is attached to>

**new, call, apply, bind** we will talk about later

---

##### 8\. How JavaScript Works Behind the Scenes | 96\. The this Keyword | 1:11

The value of the **this** keyword is not static. it depends on how the function is called, and it's value is only assigned when the function is **actually called**.

---

##### 8\. How JavaScript Works Behind the Scenes | 96\. The this Keyword | 0:30

the **this** keyword is a special variable created for every execution context (every function).

It takes the value (or points to) the "owner of the function in which the this keyword is used.

  
---

##### 8\. How JavaScript Works Behind the Scenes | 95\. Hoisting and TDZ in Practice | 13:10

if you type `window` in the console you get the global object of javascript in the browser. With all functions as well as var variables which appear in the window object (const and let don't appear there).
  
  
---

##### 8\. How JavaScript Works Behind the Scenes | 95\. Hoisting and TDZ in Practice | 10:46

Best Practices:

1. don't use var for variables, use const most of the time and let only if you really need to change them later
2. declare all variables at the top of the scope
3. always declare all functions first and only call them after declaration.

---

##### 8\. How JavaScript Works Behind the Scenes | 94\. Variable Environment: Hoisting and The TDZ | 9:47

**Why hoisting?**

it was there so that function declarations could be used before declaration **var** was then hoisted to be able to make this work and it was a byproduct of that.

---

##### 8\. How JavaScript Works Behind the Scenes | 94\. Variable Environment: Hoisting and The TDZ | 6:47

the **temporal dead zone** is everything before the variable was declared in the code. In all of that space, it is as if the variable didn't exist. When execution reaches the line where the variable is declared, it is included in the variable environment and is ready to be used.

  
**Why TDZ**: makes it easier to catch and avoid errors, accessing variables before declaration is bad practice and should be avoided. A good reason to use function expressions as we will always catch the errors.

The second reason for the TDZ is to make const variables work as they are supposed to. they'd have to have been logged to the environment so the system knows they can't be redefined.

---

##### 8\. How JavaScript Works Behind the Scenes | 94\. Variable Environment: Hoisting and The TDZ | 1:14

**Hoisting:** Makes some types of variables accessible/usable in the code before they are actually declared. "Variables lifted to the top of their scope"

The code is scanned for variable declarations **before execution** and for each variable, a new property is created in **the variable environment object.**

* Hoisting does not work the same for all variable types, will be different for each one:  
   1. **function** declarations: **are hoisted**  
   2. **var** variables: **are hoisted** but are undefined!!!!  
   3. **let** and **const** variables: **are not hoisted!** Technically they are but they are held in the temporal death zone (TDZ)  
   4. **function expressions** and **arrow functions**: depends if they where created using var const or let. technically they are not usable as even with let they are undefined.

---

##### 8\. How JavaScript Works Behind the Scenes | 93\. Scoping in Practice | 19:44

so you can redefine a variable with the same name in a different scope it would only be accessible there but if you change a variable from a scope that is up the chain it will feed the change up the chain as long as it's in the code order of business (if you redefine the variable and call the variable after you called the function in which it was redefined for example it will change the content of that variable but not if you call the variable before the function is called.

---

##### 8\. How JavaScript Works Behind the Scenes | 93\. Scoping in Practice | 19:15

manipulating an existing variable inside of a child scope will change the variable up chain in the order that things appear in the code.

---

##### 8\. How JavaScript Works Behind the Scenes | 93\. Scoping in Practice | 6:54

for scoping, the parameter of a function works just like local variables.

---

##### 8\. How JavaScript Works Behind the Scenes | 92\. Scope and The Scope Chain | 25:19

The scope chain has nothing to do with the order in which functions where called.

---

##### 8\. How JavaScript Works Behind the Scenes | 92\. Scope and The Scope Chain | 24:12

Lexical scoping means that the rules of where we can access variables is based exactly on where in the code functions and blocks are written.

---

##### 8\. How JavaScript Works Behind the Scenes | 92\. Scope and The Scope Chain | 24:12

Lexical scoping means that the rules of where we can access variables is based exactly on where in the code functions and blocks are written.

---

##### 8\. How JavaScript Works Behind the Scenes | 92\. Scope and The Scope Chain | 24:10

variables declared with var, always end up in the closest function scope or global scope as they are not block based.

---

##### 8\. How JavaScript Works Behind the Scenes | 92\. Scope and The Scope Chain | 20:57

We can say that the scope chain in a certain scope is equal to adding up all the variables of the parent scopes with the ones declared on this scope

---

##### 8\. How JavaScript Works Behind the Scenes | 92\. Scope and The Scope Chain | 20:24

The order of execution is not relevant to the scope chain at all. The only relevant thing is in which order functions and variables are written in the code not the order in which functions where called.

---

##### 8\. How JavaScript Works Behind the Scenes | 92\. Scope and The Scope Chain | 16:34

two sibling scopes inside a function for example do not have access to each other's variables, only access to the scopes above them on the scope chain.

---

##### 8\. How JavaScript Works Behind the Scenes | 92\. Scope and The Scope Chain | 9:09

1. Global scope:  
   1. **myName**  \= "Jonas
2. Function first()  
   1. const age = 30  
   2. var millennial = true  
   3. If (age>=30 Scope)  
         1. **const** decade = 3  
   4. function second()  
         1. const job - 'teacher'

Variable lookup is the process in which variables are searched for first within the current scope and then outside on each subsequent parent scope. 

The opposite is not true. A certain scope will never have access to variables nested inside it on another scope.

We call variables in the global scope, Global Variables

---

##### 8\. How JavaScript Works Behind the Scenes | 92\. Scope and The Scope Chain | 9:06

**let** and **const** variables are block scoped. **var** variables are function scoped (they don't care about blocks and will be available globally or inside the function where the block was declared).

---

##### 8\. How JavaScript Works Behind the Scenes | 92\. Scope and The Scope Chain | 4:09

1. **Global Scope**:  
   1. For variables declared outside **any** function block.  
   2. Variables declared in a global score are accessible **everywhere**  
   3. Functions are also variables (they are eventually only values stored in a special variable)
2. **Function Scope:**  
   1. each and every function creates a scope and the variables declared there are only accessible **inside the function, NOT** outside.  
   2. Also called local scope, local variables live in the function.
3. **Block Scope:**  
   1. Blocks are everything inside curly braces, such as IF statements or a for loop.  
   2. Blocks since ES6 also create their own scopes (only **const** and **let** variables)  
   3. functions are **also block scoped** (only in strict mode). That means in strict mode, functions declared inside of a block are only accessible inside of that block.

---

##### 8\. How JavaScript Works Behind the Scenes | 92\. Scope and The Scope Chain | 3:14

Scope is not the same as scope of a variable

---

##### 8\. How JavaScript Works Behind the Scenes | 92\. Scope and The Scope Chain | 1:22

Javascript has Lexical scoping

The location and access to function is determined by where we write our functions or code blocks in our program.

\- A function written inside another function has access to the variables of the parent function

  
**Scope**: is the space or environment in which a certain variable is declared (variable environment in case of functions). There is **global** scope, **function** scope, and **block** scope.

**Scope of a Variable**: is the entire region of code where a certain variable can be **accessed**.

---

##### 8\. How JavaScript Works Behind the Scenes | 92\. Scope and The Scope Chain | 1:13

scoping is how our program's variables are organised and accessed.

Scope chain asks the question: "Where do variables live?" or "Where can we access a certain variable, and where we can't access it?"

---

##### 8\. How JavaScript Works Behind the Scenes | 92\. Scope and The Scope Chain | 0:41

Each execution context has a 

1. Variable environment
2. Scope Chain
3. `this` keyword

---

##### 8\. How JavaScript Works Behind the Scenes | 91\. Execution Contexts and The Call Stack | 17:28

code runs inside execution contexts that are in the stack

---

##### 8\. How JavaScript Works Behind the Scenes | 91\. Execution Contexts and The Call Stack | 17:05

As each function finishes executing, they get popped off the stack until we reach and finish executing the global execution context.

  
This one doesn't get popped off, it stays there until the browser window is closed or a new page is loaded.

---

##### 8\. How JavaScript Works Behind the Scenes | 91\. Execution Contexts and The Call Stack | 10:29

it's in the call stack that the engine keeps track of the order of things like which functions where called first.

  
A call stack is a place where executions contexts get stacked up on top of each other in order to keep track of where we are in the program's execution.

---

##### 8\. How JavaScript Works Behind the Scenes | 91\. Execution Contexts and The Call Stack | 5:28

1\. Variable Environment

The first thing that is inside an execution context is called a variable environment. In this environment all our variables and function declarations are stored and there's also an arguments object. It contains all the arguments that where passed into the functions inside the current execution context.

  
2\. Scope Chain

references to variables located outside the current function

  
3\. this Keyword

  
The content of all of these items is generated during the "creation phase" which happens just before execution

NOTE, execution contexts belonging to arrow functions do not get the arguments object in the variable environment nor the this keyword.

---

##### 8\. How JavaScript Works Behind the Scenes | 91\. Execution Contexts and The Call Stack | 0:48

when the code is compiled it goes into an environment called the global execution context where only top-level code will be executed. That is code outside any functions (can include calling a function).

  
it's like a box that stores every necessary information for code to be executed.

  
The code inside a function will only be executed when the function is called.

  
In any javascript there is only ever one Global Execution Context (EC).

  
Once the top level code is finished executing in the cpu, functions start to be executed as well 

for every function that has been created, a new execution context is created containing all the necessary parts for that function to be executed, variables, etc. The same goes for methods (they are functions attached to objects).

  
When all the functions have been executed, the engine will keep waiting for callback functions to arrive, for example, a callback function associated with a click event. It's the event loop that provides this callback functions

  
---

##### 8\. How JavaScript Works Behind the Scenes | 90\. The JavaScript Engine and Runtime | 5:35

When the javascript engine receives a block of code, the first step is **Parsing.** The engine goes through the code line by line looking for meaningful features like const, function. It then creates an organised tree with all the information in a structured way. The **AST.** In this process the engine also looks for errors

The next step is compilation where the AST is taken and transformed into zeros and ones (binary)

Then it gets executed immediately.

Execution happens in the javascript engine's call stack

In JS, it first compiles a quick non optimised code. Then that code starts being executed and in the background javascript optimises the code and compiles it again. This can happen multiple times and every time it replaces the initial binary code with a faster more optimised version until it completely replaces the crude one in the call stack 

---

##### 8\. How JavaScript Works Behind the Scenes | 90\. The JavaScript Engine and Runtime | 2:15

Compilation vs Interpretation:

**Compilation:** The entire code is converted into machine code at once, and written into a binary file that can be executed by a computer.

There are two steps, COMPILATION and EXECUTION and the execution can happen way after compilation of course.

**Interpretation:**  There is an interpreter that runs through the source code and executes it line by line. The source code is converted into machine code just before it's executed and not ahead of time.

**Called Just-in-Time (JIT) compilation:** The entire code is converted into machine code at once, then executed immediately.

This still have the two steps of compilation and then execution but there is no portable file to execute. The execution happens immediately after compilation.

---

##### 8\. How JavaScript Works Behind the Scenes | 90\. The JavaScript Engine and Runtime | 1:32

a JS engine contains a: Call Stack and a Heap

The call stack is where the code is actually executed.

The Hep is where objects are stored (in memory)

  
---

##### 8\. How JavaScript Works Behind the Scenes | 90\. The JavaScript Engine and Runtime | 0:31

JavaScript Engine is a computer program that executes javascript code.

Most famous engine is google's V8, it powers node.js and each browser has their own.

---

##### 8\. How JavaScript Works Behind the Scenes | 89\. An High-Level Overview of JavaScript | 11:57

Non-blocking event loop:

Event Loop takes long running tasks, executes them in the background and then, puts them back in the main thread once they are finished.

---

##### 8\. How JavaScript Works Behind the Scenes | 89\. An High-Level Overview of JavaScript | 9:56

Single-threaded concurrency model:

A concurrency model is how javascript engine handles multiple tasks at the same time.

Javascript runs in one single thread. Which means it can only do one thing at a time.

So what about a ling running task? Will it block the thread? We want a non-blocking behaviour.

Javascript achieves that by using an event loop

Event Loop takes long running tasks, executes them in the background and then, puts them back in the main thread once they are finished.

  
---

##### 8\. How JavaScript Works Behind the Scenes | 89\. An High-Level Overview of JavaScript | 8:44

Dynamic: this means dynamically typed.

We don't assign data types to variables.

No data type definitions are used. Data types become known at runtime.

Data types can easily be changed in a variable.

---

##### 8\. How JavaScript Works Behind the Scenes | 89\. An High-Level Overview of JavaScript | 7:38

First-class functions, simply means that functions are treated just like variables.

We can pass them into other functions and return them from functions.

  
This is extremely powerful.

---

##### 8\. How JavaScript Works Behind the Scenes | 89\. An High-Level Overview of JavaScript | 6:16

Prototype-based object-oriented approach:

almost everything in javascript is an object, except for primitive values such as numbers, strings, etc.

  
Objects in javascript are build using a prototype. The prototype has a structure several methods. 

When you use an Array for example it follows the prototype of the array and it inherits it's methods

---

##### 8\. How JavaScript Works Behind the Scenes | 89\. An High-Level Overview of JavaScript | 4:49

Multi-paradigm: 

It does all of the below:

  
in programming, a Paradigm is an approach and mindset of structuring code, which will direct your coding style and technique.

3 Popular paradigms:

1. procedural programming
2. object-oriented programming (OOP)
3. Functional programming (FP)

Paradigms can be Imperative or Declarative

---

##### 8\. How JavaScript Works Behind the Scenes | 89\. An High-Level Overview of JavaScript | 3:46

Interpreted or just-in-time compiled language:

every computer ultimately uses Zeros and Ones. Any programming has to be either compiled or interpreted in order to transform it into zeros and ones.

In javascript it happens inside the Javascript Engine

---

##### 8\. How JavaScript Works Behind the Scenes | 89\. An High-Level Overview of JavaScript | 3:28

Garbage-collection is a mechanism in which the computer cleans the memory of any unused stuff in order not to clog it and to make space for the things that we are using. It has an automatic cleaning system.

---

##### 8\. How JavaScript Works Behind the Scenes | 89\. An High-Level Overview of JavaScript | 2:35

High-level - all resource allocation happen automatically behind the scenes. Downside is that programs will never be as fast or optimised as a good low-level program.

  
Low-level - languages you need to manually manage the computer resources

---

##### 8\. How JavaScript Works Behind the Scenes | 89\. An High-Level Overview of JavaScript | 1:32

Javascript is. a High-level, Prototype-based, object-oriented, multi-paradigm, interpreted or just-in-time compiled, dynamic, single-threaded, garbage-collected, programming language with first-class functions and a non-blocking event loop concurrency model.

---

##### 7\. JavaScript in the Browser: DOM and Events Fundamentals | 82\. PROJECT #3: Pig Game | 6:38

https://diagrams.net to design the flow chart

---

##### 7\. JavaScript in the Browser: DOM and Events Fundamentals | 81\. Handling an "Esc" Keypress Event | 14:05

to access an object value all we need to do is write the object name and the key separated by a dot like

 object.key

---

##### 7\. JavaScript in the Browser: DOM and Events Fundamentals | 81\. Handling an "Esc" Keypress Event | 7:38

when we call an anonymous function into an event listener, if we pass a parameter with any name, in this case \`e\`, that variable will now contain the whole event that was listened.

---

##### 7\. JavaScript in the Browser: DOM and Events Fundamentals | 81\. Handling an "Esc" Keypress Event | 2:05

there are three different keypress events, keydown, keyup and keypress. Keypress keeps firing as long as the key is pressed. keydown activates just as soon as the key is pressed and key up only after the key is released. Normally we mean keydown when we are talking about keypresses. 

---

##### 7\. JavaScript in the Browser: DOM and Events Fundamentals | 81\. Handling an "Esc" Keypress Event | 1:15

for keyboard events, we normally add them to the document because they are global, they don't happen in a specific element.

---

##### 7\. JavaScript in the Browser: DOM and Events Fundamentals | 80\. Working With Classes | 15:06

in a for loop, if there is only one line to be executed we don't need the {}

---

##### 7\. JavaScript in the Browser: DOM and Events Fundamentals | 80\. Working With Classes | 12:56

to call an external function inside an event listener, we can write just the name of the function without the () and not have to use the default anonymous function and the function inside it.

---

##### 7\. JavaScript in the Browser: DOM and Events Fundamentals | 79\. PROJECT #2: Modal Window | 10:16

using .querySelector only selects the first element of a type. if you want to select all of them you need to use querySelectorAll

---

##### 7\. JavaScript in the Browser: DOM and Events Fundamentals | 74\. Implementing the Game Logic | 2:22

Math.random() always generates a number between 0 and 1 so if we want a random number between 0 and 20 we just multiply that by 20.

---

##### 7\. JavaScript in the Browser: DOM and Events Fundamentals | 74\. Implementing the Game Logic | 2:22

Math.random() always generates a number between 0 and 1 so if we want a random number between 0 and 20 we just multiply that by 20.

---

##### 7\. JavaScript in the Browser: DOM and Events Fundamentals | 74\. Implementing the Game Logic | 2:22

Math.random() always generates a number between 0 and 1 so if we want a random number between 0 and 20 we just multiply that by 20.

---

##### 7\. JavaScript in the Browser: DOM and Events Fundamentals | 74\. Implementing the Game Logic | 2:22

Math.random() always generates a number between 0 and 1 so if we want a random number between 0 and 20 we just multiply that by 20.

---

##### 7\. JavaScript in the Browser: DOM and Events Fundamentals | 74\. Implementing the Game Logic | 2:22

Math.random() always generates a number between 0 and 1 so if we want a random number between 0 and 20 we just multiply that by 20.

---

##### 7\. JavaScript in the Browser: DOM and Events Fundamentals | 74\. Implementing the Game Logic | 2:22

Math.random() always generates a number between 0 and 1 so if we want a random number between 0 and 20 we just multiply that by 20.

---

##### 7\. JavaScript in the Browser: DOM and Events Fundamentals | 74\. Implementing the Game Logic | 2:22

Math.random() always generates a number between 0 and 1 so if we want a random number between 0 and 20 we just multiply that by 20.

---

##### 7\. JavaScript in the Browser: DOM and Events Fundamentals | 74\. Implementing the Game Logic | 2:22

Math.random() always generates a number between 0 and 1 so if we want a random number between 0 and 20 we just multiply that by 20.

---

##### 7\. JavaScript in the Browser: DOM and Events Fundamentals | 74\. Implementing the Game Logic | 2:22

Math.random() always generates a number between 0 and 1 so if we want a random number between 0 and 20 we just multiply that by 20.

---

##### 7\. JavaScript in the Browser: DOM and Events Fundamentals | 74\. Implementing the Game Logic | 2:22

Math.random() always generates a number between 0 and 1 so if we want a random number between 0 and 20 we just multiply that by 20.

---

##### 7\. JavaScript in the Browser: DOM and Events Fundamentals | 74\. Implementing the Game Logic | 2:22

Math.random() always generates a number between 0 and 1 so if we want a random number between 0 and 20 we just multiply that by 20.

---

##### 7\. JavaScript in the Browser: DOM and Events Fundamentals | 74\. Implementing the Game Logic | 2:22

Math.random() always generates a number between 0 and 1 so if we want a random number between 0 and 20 we just multiply that by 20.

---

##### 7\. JavaScript in the Browser: DOM and Events Fundamentals | 74\. Implementing the Game Logic | 2:22

Math.random() always generates a number between 0 and 1 so if we want a random number between 0 and 20 we just multiply that by 20.

---

##### 7\. JavaScript in the Browser: DOM and Events Fundamentals | 74\. Implementing the Game Logic | 2:22

Math.random() always generates a number between 0 and 1 so if we want a random number between 0 and 20 we just multiply that by 20.

---

##### 7\. JavaScript in the Browser: DOM and Events Fundamentals | 74\. Implementing the Game Logic | 2:22

Math.random() always generates a number between 0 and 1 so if we want a random number between 0 and 20 we just multiply that by 20.

---

##### 7\. JavaScript in the Browser: DOM and Events Fundamentals | 74\. Implementing the Game Logic | 2:22

Math.random() always generates a number between 0 and 1 so if we want a random number between 0 and 20 we just multiply that by 20.

---

##### 7\. JavaScript in the Browser: DOM and Events Fundamentals | 74\. Implementing the Game Logic | 2:22

Math.random() always generates a number between 0 and 1 so if we want a random number between 0 and 20 we just multiply that by 20.

---

##### 7\. JavaScript in the Browser: DOM and Events Fundamentals | 73\. Handling Click Events | 10:47

The number zero is a false value so in an if statement evaluation zero is false

---

##### 7\. JavaScript in the Browser: DOM and Events Fundamentals | 73\. Handling Click Events | 10:47

The number zero is a false value so in an if statement evaluation zero is false

---

##### 7\. JavaScript in the Browser: DOM and Events Fundamentals | 73\. Handling Click Events | 10:47

The number zero is a false value so in an if statement evaluation zero is false

---

##### 7\. JavaScript in the Browser: DOM and Events Fundamentals | 73\. Handling Click Events | 9:10

When we get something from an input field it’s almost always a string. Do that string needs to be converted to whatever type we want.  

---

##### 7\. JavaScript in the Browser: DOM and Events Fundamentals | 73\. Handling Click Events | 9:10

When we get something from an input field it’s almost always a string. Do that string needs to be converted to whatever type we want.  

---

##### 7\. JavaScript in the Browser: DOM and Events Fundamentals | 73\. Handling Click Events | 9:10

When we get something from an input field it’s almost always a string. Do that string needs to be converted to whatever type we want.  

---

##### 7\. JavaScript in the Browser: DOM and Events Fundamentals | 73\. Handling Click Events | 9:10

When we get something from an input field it’s almost always a string. Do that string needs to be converted to whatever type we want.  

---

##### 7\. JavaScript in the Browser: DOM and Events Fundamentals | 73\. Handling Click Events | 9:10

When we get something from an input field it’s almost always a string. Do that string needs to be converted to whatever type we want.  

---

##### 7\. JavaScript in the Browser: DOM and Events Fundamentals | 73\. Handling Click Events | 9:10

When we get something from an input field it’s almost always a string. Do that string needs to be converted to whatever type we want.  

---

##### 7\. JavaScript in the Browser: DOM and Events Fundamentals | 73\. Handling Click Events | 6:45

The function which is the event handler will not be called anywhere in the code but will be called automatically by the browser when the event happens 

---

##### 7\. JavaScript in the Browser: DOM and Events Fundamentals | 73\. Handling Click Events | 6:45

The function which is the event handler will not be called anywhere in the code but will be called automatically by the browser when the event happens 

---

##### 7\. JavaScript in the Browser: DOM and Events Fundamentals | 73\. Handling Click Events | 6:45

The function which is the event handler will not be called anywhere in the code but will be called automatically by the browser when the event happens 

---

##### 7\. JavaScript in the Browser: DOM and Events Fundamentals | 73\. Handling Click Events | 3:16

The function you specify at an event listener is called the handler

---

##### 7\. JavaScript in the Browser: DOM and Events Fundamentals | 73\. Handling Click Events | 3:16

The function you specify at an event listener is called the handler

---

##### 7\. JavaScript in the Browser: DOM and Events Fundamentals | 73\. Handling Click Events | 3:16

The function you specify at an event listener is called the handler

---

##### 7\. JavaScript in the Browser: DOM and Events Fundamentals | 73\. Handling Click Events | 3:16

The function you specify at an event listener is called the handler

---

##### 7\. JavaScript in the Browser: DOM and Events Fundamentals | 73\. Handling Click Events | 3:16

The function you specify at an event listener is called the handler

---

##### 7\. JavaScript in the Browser: DOM and Events Fundamentals | 73\. Handling Click Events | 3:16

The function you specify at an event listener is called the handler

---

##### 7\. JavaScript in the Browser: DOM and Events Fundamentals | 73\. Handling Click Events | 3:16

The function you specify at an event listener is called the handler

---

##### 5\. Developer Skills & Editor Setup | 61\. Debugging with the Console and Breakpoints | 12:28

on my google chrome I need to add `debugger;` to my code before the problem function otherwise the debugger doesn't work in chrome

---

##### 5\. Developer Skills & Editor Setup | 60\. Debugging (Fixing Errors) | 4:00

1. Identify
2. Find
3. Fix
4. Prevent (search for similar mistakes in the code and write tests using testing software).

---

##### 5\. Developer Skills & Editor Setup | 60\. Debugging (Fixing Errors) | 0:36

Any unexpected or unintended behaviour of a program is a software bug.

---

##### 5\. Developer Skills & Editor Setup | 57\. Learning How to Code | 4:43

1. Make sure you 100% understand the problem. Ask the right questions to get a clear picture of the problems.
2. Divide and conquer: break a big problem into smaller sub-problems.
3. Research, don't be afraid to do as much research as you have to.
4. Write pseudo-code before writing the actual code

---

##### 3\. JavaScript Fundamentals – Part 2 | 49\. The while Loop | 1:46

the four loop has initialisation, condition and iteration defined. the while loop only has the condition defined in the parenthesis, the initialisation has to be done outside of the while loop and the iteration defined inside the brackets

---

##### 3\. JavaScript Fundamentals – Part 2 | 48\. Looping Backwards and Loops in Loops | 3:36

the construction of the for loop is:

```javaScript
for(initialization; condition; iteration) {
codeblock;
}
```

  
---

##### 3\. JavaScript Fundamentals – Part 2 | 47\. Looping Arrays, Breaking and Continuing | 20:03

the continue statement on a loop, skips the current iteration of the loop and then continues. (used on an IF statement

the break statement completely stops the loop if a condition is met.

---

##### 3\. JavaScript Fundamentals – Part 2 | 47\. Looping Arrays, Breaking and Continuing | 12:07

Two methods of building array with a for loop. using 

\`types\[I\] = typeof Jonas\[I\];\` for example or \`types.push(typeof Jonas\[I\]\`)

---

##### 3\. JavaScript Fundamentals – Part 2 | 47\. Looping Arrays, Breaking and Continuing | 9:27

to fill an array with the results of a loop, we first need to create the empty array and then we use the loop to fill it up using the array\[\] notation.

---

##### 3\. JavaScript Fundamentals – Part 2 | 47\. Looping Arrays, Breaking and Continuing | 1:19

i is a traditional name for a counter variable in javascript

---

##### 3\. JavaScript Fundamentals – Part 2 | 46\. Iteration: The for Loop | 10:27

what the loop does is to verify before each repetition if the condition still holds true and only if it does it will keep running the loop

---

##### 3\. JavaScript Fundamentals – Part 2 | 46\. Iteration: The for Loop | 4:42

```javaScript
For loop keeps running while condition is true
```

---

##### 3\. JavaScript Fundamentals – Part 2 | 46\. Iteration: The for Loop | 0:36

Loops allow us to automate repetitive tasks

---

##### 3\. JavaScript Fundamentals – Part 2 | 46\. Iteration: The for Loop | 0:16

Loop is another Control Structure, just like an IF ELSE statement

---

##### 3\. JavaScript Fundamentals – Part 2 | 44\. Object Methods | 22:18

Arrays are also an Object, just a special type of object and you can also call all it's own built in methods on it.

---

##### 3\. JavaScript Fundamentals – Part 2 | 44\. Object Methods | 8:10

The this keyword is basically equal to the object in which the method is called.

It's equal to the object calling the method.

---

##### 3\. JavaScript Fundamentals – Part 2 | 44\. Object Methods | 3:08

any function that is attached to an object is called a method.

---

##### 3\. JavaScript Fundamentals – Part 2 | 43\. Dot vs. Bracket Notation | 8:14

undefined is what we get when we try to access a property on an object which does not exist

---

##### 3\. JavaScript Fundamentals – Part 2 | 43\. Dot vs. Bracket Notation | 2:50

the difference between calling an object property using the dot and the brackets notation is that with the brackets you can use expressions to return the value of the key or label

---

##### 3\. JavaScript Fundamentals – Part 2 | 43\. Dot vs. Bracket Notation | 0:57

in object, the order of properties does not matter.

---

##### 3\. JavaScript Fundamentals – Part 2 | 42\. Introduction to Objects | 5:01

The object literal syntax is when we literally write down the entire object content.

---

##### 3\. JavaScript Fundamentals – Part 2 | 42\. Introduction to Objects | 4:23

Object keys are called properties so for example property firstName for a first name fields

---

##### 3\. JavaScript Fundamentals – Part 2 | 40\. Basic Array Operations (Methods) | 10:59

the includes function works in strict mode and does not do type coercion

---

##### 3\. JavaScript Fundamentals – Part 2 | 40\. Basic Array Operations (Methods) | 9:17

if we try indexOf in a value that doesn't exist in an array we get -1 in return

---

##### 3\. JavaScript Fundamentals – Part 2 | 40\. Basic Array Operations (Methods) | 3:38

the push function also returns a value and that value is the new number of items inside the array.

---

##### 3\. JavaScript Fundamentals – Part 2 | 40\. Basic Array Operations (Methods) | 0:13

javascript built-in functions that we can directly apply to arrays are called methods 

---

##### 3\. JavaScript Fundamentals – Part 2 | 39\. Introduction to Arrays | 13:27

expressions are always something that produce a value

---

##### 3\. JavaScript Fundamentals – Part 2 | 39\. Introduction to Arrays | 10:50

You can change values inside an array even when it's declared as a const on a variable. const is only immutable for primitive values but an array is not a primitive value.

---

##### 3\. JavaScript Fundamentals – Part 2 | 39\. Introduction to Arrays | 6:07

.length is a property of an Array

---

##### 3\. JavaScript Fundamentals – Part 2 | 39\. Introduction to Arrays | 5:06

Arrays are 0 based.

To pull subitems of an array we use brackets after the variable name for example friends\[0\]

---

##### 3\. JavaScript Fundamentals – Part 2 | 39\. Introduction to Arrays | 1:18

Data Structures in Javascript. Arrays are a Data Structure

---

##### 3\. JavaScript Fundamentals – Part 2 | 37\. Reviewing Functions | 13:01

The return statement imediadly terminates the execution of a function or returns the function.

---

##### 3\. JavaScript Fundamentals – Part 2 | 37\. Reviewing Functions | 11:38

functions receive **input** data, **transform** data and then **output** data.

---

##### 3\. JavaScript Fundamentals – Part 2 | 37\. Reviewing Functions | 11:13

Arrow functions have no \`this\` keyword.

---

##### 3\. JavaScript Fundamentals – Part 2 | 35\. Arrow Functions | 2:13

on an arrow function, the return of the function is implicit if it's written in only one line and in that case it also doesn't need parenthesis or curly braces.

It's perfect for simple one line functions

  
If the arrow function has more than one line then it needs curly braces and a return statement. Also if it has more than one parameter then they need to be enclosed in parenthesis and separated by commas.

---

##### 3\. JavaScript Fundamentals – Part 2 | 34\. Function Declarations vs. Expressions | 8:39

Function declarations can be called in the code before they are defined and they still work. Function expressions on the other hand, had to be called after they where defined.

---

##### 3\. JavaScript Fundamentals – Part 2 | 34\. Function Declarations vs. Expressions | 7:50

Functions are at the end of a it all a value, they all return a value.

---

##### 3\. JavaScript Fundamentals – Part 2 | 33\. Functions | 2:42

calling running or invoking a function are one and the same thing.

  
---

##### 2\. JavaScript Fundamentals – Part 1 | 28\. The Conditional (Ternary) Operator | 8:12

Conditional (Ternary) Operators can be used inside Template Literals because they are an expressions since they return a value

---

##### 2\. JavaScript Fundamentals – Part 1 | 28\. The Conditional (Ternary) Operator | 0:09

So far we have seen 2 ways of using conditionals the IF ELSE statement and the SWITCH statement.

The third one is the conditional Operator.

---

##### 2\. JavaScript Fundamentals – Part 1 | 27\. Statements and Expressions | 0:40

an expression is something that produces a value, even if it's just a simple value.

and statements are full sentences that produce actions (expressions would be the words in a sentence) 

---

##### 2\. JavaScript Fundamentals – Part 1 | 24\. Logical Operators | 3:08

Basic Logical Operators

AND = &&

OR = ||

NOT = !

---

##### 2\. JavaScript Fundamentals – Part 1 | 23\. Boolean Logic | 7:36

The ! (not) operator has precedence over OR and AND

---

##### 2\. JavaScript Fundamentals – Part 1 | 22\. Equality Operators: == vs. === | 14:18

The different operator !== also has a strict and loose version (the loos being !=) but we always prefer the strict

---

##### 2\. JavaScript Fundamentals – Part 1 | 22\. Equality Operators: == vs. === | 5:54

The loose equality operator == has many weird rules and can introduce a lot of unseen bugs onto your code so always prefer === instead.

---

##### 2\. JavaScript Fundamentals – Part 1 | 22\. Equality Operators: == vs. === | 1:04

Equality operators (comparison operator):

\=== only is true if one value is exactly like the same, it's a strict equality operator and doesn't perform type coercion.

\== A loose equality operator which does type coercion and after the conversion only returns true if the values are the same

  
---

##### 2\. JavaScript Fundamentals – Part 1 | 21\. Truthy and Falsy Values | 3:37

Type coercion to Boolean normally only happens behind the scene like checking if a variable has a value stored in an IF statement for example. An IF statement will always convert any logic to a Boolean

---

##### 2\. JavaScript Fundamentals – Part 1 | 20\. Type Conversion and Coercion | 6:51

to convert values the conversion function must be written with capital letters at the start like \`Number\` or \`String\`

---

##### 2\. JavaScript Fundamentals – Part 1 | 20\. Type Conversion and Coercion | 6:13

we get NaN (Not a Number) which is somehow a number type value which means it's invalid, we get this whenever a number operation fails to get a number.

---

##### 2\. JavaScript Fundamentals – Part 1 | 18\. Taking Decisions: if / else Statements | 10:49

Variables inside if else statements need to be created outside the statement if we intend to use them outside it, otherwise we will get an undefined variable error as they can't be read outside the scope of that statement.

---

##### 2\. JavaScript Fundamentals – Part 1 | 18\. Taking Decisions: if / else Statements | 7:12

if else statement is called a control structure

---

##### 2\. JavaScript Fundamentals – Part 1 | 14\. Operator Precedence | 1:41

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator\_precedence

---

##### 2\. JavaScript Fundamentals – Part 1 | 13\. Basic Operators | 8:57

\`=\` is also an operator so when defining a variable like:

\`let x = 10 + 5;\` we have two operators.

---

##### 2\. JavaScript Fundamentals – Part 1 | 13\. Basic Operators | 8:28

with \`console.log(typeof)\` typeof is also an operator

---

##### 2\. JavaScript Fundamentals – Part 1 | 12\. let, const and var | 1:09

\-\`let\` for variables that can change later (value "reassigned" or variable "mutated").

\-\`const\` are variables that cannot be changed.

\-\`var\` is the old way of declaring variables and should be avoided.

---

##### 2\. JavaScript Fundamentals – Part 1 | 11\. Data Types | 14:03

We use the keyword let before we first declare a variable but not when reassigning it's value.

---

##### 2\. JavaScript Fundamentals – Part 1 | 11\. Data Types | 4:40

Value has a type not variables. Variables simply store values that have a type.

A variable can have it's value type changed later on. 

This is called Dynamic typing;

---

##### 2\. JavaScript Fundamentals – Part 1 | 11\. Data Types | 3:48

Types of Primitive Values (as opposed to Object values)

1\. Number. Floating point number

2\. String: Sequence of characters

3\. Boolean: Logical type that can only be true or false

4\. Undefined: value taken by a variable that is not yet defined

5\. Null: Also means 'empty value'

6\. Symbol (ES2015): Value that is unique and cannot be changed

7\. BigInt (ES2020): Larger integers than the Number type can hold

---