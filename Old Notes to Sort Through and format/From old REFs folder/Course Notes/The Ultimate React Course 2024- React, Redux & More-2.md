##### 5\. Working With Components, Props, and JSX | 42\. Passing and Receiving Props | 0:26

Props are kind of a communication channel between a child and a parent component

---

##### 5\. Working With Components, Props, and JSX | 43\. Props, Immutability, and One-Way Data Flow | 1:30

Props are like function arguments, you can pass anything into them:

* single values
* arrays
* objects
* functions
* other react components

---

##### 5\. Working With Components, Props, and JSX | 43\. Props, Immutability, and One-Way Data Flow | 2:45

State is **internal** data that can be updated by the **component's logic**

Props is data coming from **outside**, and can **only** be updated by the **parent component**

  
Props are **immutable** they cannot be changed, they are **read-only.**

If you need to mutate props, you actually **need state.**

  
A component should never mutate any data that lives outside of it's function scope

---

##### 5\. Working With Components, Props, and JSX | 43\. Props, Immutability, and One-Way Data Flow | 5:20

Data can only flow from parent to children but never the other way around.

React has a **one-way dataflow**

This makes applications easier to understand, predict and debug

---

##### 6\. State, Events, and Forms: Interactive Components | 59\. What is State in React? | 2:04

* State is data that a component **can hold over time**, necessary for information that it needs to **remember** throughout the app's lifecycle
* State is also the **component's memory**
* **State variable / "Piece of State"**: A single variable in a component (component state)
* Updating **component state** triggers React to **re-render the component**

State Allows developers to:

* Update the **Component's View** (by re-rendering it)
* Persist local variables between renders

---

##### 6\. State, Events, and Forms: Interactive Components | 60\. Creating a State Variable With useState | 6:59

All React functions that start with `use` are called **React** **hooks**

  
We can only call React Hooks at the top level of the component's function. Not within any if statements or blocks or inner functions

---

##### 6\. State, Events, and Forms: Interactive Components | 65\. Updating State Based on Current State | 3:31

  
If we want to update state based on the current value of the state, we should always update state using a callback function inside the setter function instead of using the setter directly:

```javaScript
setStep(s => s + 1); // Correct!
setStep(step + 1); // Incorrect
```

  
If we update using the setter and passing a value directly we may get bugs if we try for example to update state twice.

---

##### 6\. State, Events, and Forms: Interactive Components | 66\. More Thoughts About State + State Guidelines | 2:24

UI as a **function** of state

With State, we view the UI as a **reflection of data changing over time**

---

##### 6\. State, Events, and Forms: Interactive Components | 66\. More Thoughts About State + State Guidelines | 3:31

* Create a state variable for any data that the component should keep track of over time. **This is data that will change at some point.**
* Whenever you want something to be **dynamic**, create a piece of state related to that "thing", and update the state when the "thing" should change (aka "be dynamic")  
   * **Example**: A modal window can be opened or closed. So we create a state variable `isOpen` that tracks whether the modal is open or not. On `isOpen = true` we display the window, on `isOpen = false` we hide it.
* If you want to change the way a component looks, or the data it displays, **update its state.** This usually happens in an **event handler** function.
* When building a component, imagine its view as a **reflection of state changing over time**
* For data that should not trigger component re-renders, **don't use state.** Use regular variables instead. This is a common **beginner mistake.**

---

##### 6\. State, Events, and Forms: Interactive Components | 73\. Controlled Elements | 7:30

On forms, we bind the form data by creating a state for every input value using `useState()` and then we have to in the JSX, assign the `form` element a `value` property that is the state we just created and then on that element we need to set a` onChange()` event handler that sets the state to the input value. for example:

```javaScript
[description, setDescription] = useState('');
<input type="text" value={description} onChange(e=>setDescription(e.target.value)) />
```

This binds the data from the form with a react state.

This technique is called Controlled Elements

---

##### 6\. State, Events, and Forms: Interactive Components | 74\. State vs. Props | 2:58

Components that receive state as a prop are always re-rendered whenever the state changes

---

##### 7\. Thinking In React: State Management | 78\. What is "Thinking in React"? | 2:30

The "Thinking in React" Process:

1. Reak the desired UI into **components** and establish the **component tree**
2. Build a **static** version in react (without state)
3. Think about **state:**  
   1. When to use state  
   2. Types of state: local vs global  
   3. Where to place each piece of state
4. Establish **data flow:**  
   1. One way data flow  
   2. Child to parent communication  
   3. Accessing global state

---

##### 7\. Thinking In React: State Management | 78\. What is "Thinking in React"? | 3:26

When you can "Think in React" you will be able to answer:

* How to break up a UI design into components?
* How to make some components reusable?
* How to assemble UI from reusable components?
* What pieces of state do I need for interactivity?
* Where to place state? (What component should "own" each piece of state?
* What times of state can or should I use?
* How to make data flow through app?

---

##### 7\. Thinking In React: State Management | 79\. Fundamentals of State Management | 1:35

State management is "Giving each piece of state a **home** within our codebase"

---

##### 7\. Thinking In React: State Management | 79\. Fundamentals of State Management | 3:15

Local State:

* State only needed by **only** **one or few components**
* State that is defined in a component and **only that component and child components** have access to it (passing it via props)
* We should always start with local state and move to global if we truly need it

Global State:

* State that **many components** might need
* **Shared** state that is accessible to **every component** in the entire application
* **Context API** or libraries like **Redux**

---

##### 7\. Thinking In React: State Management | 80\. Thinking About State and Lifting State Up | 5:31

in React we can **never** mutate directly a piece of state, not even in the callback function to set this state, for example:

```javaScript
// WRONG
setItems(items => items.push(newItem));
```

Instead, we can recreate the state and pass an entirely new variable to is like:

```javaScript
// Correct
setItems(items => [...items, newItem]);
```

---

##### 10\. Thinking in React: Components, Composition, and Reusability | 107\. How to Split a UI Into Components | 6:54

Component size should take into consideration:

1. Logical separation of content/layout  
   1. Does the component contains pieces of code/layout that **don't belong together**?
2. Reusability  
   1. Is it possible to reuse part of the component?  
   2. Do you **want** or **need** to reuse it?
3. Responsibilities / Complexity  
   1. Is the component doing too **many different things?**  
   2. Does the component rely on **too many props**?  
   3. Does the component have **too many pieces of state** and or effects?  
   4. Is. the code, including JSX, too **complex/confusing?**
4. Personal coding style  
   1. Do you prefer **smaller components?**

If you answer yes to any of these questions, then split up into smaller components

---

##### 10\. Thinking in React: Components, Composition, and Reusability | 109\. Component Categories | 1:03

Most components will **naturally** fall into **one of three categories:**

1. Stateless/Presentational components  
   1. **No State**  
   2. Can receive props and simply present received data or other content  
   3. usually **small and reusable**
2. Stateful components  
   1. **Have State**  
   2. Can still be reusable
3. Structural components  
   1. "**Pages, Layouts**, or **"Screens" of the app**  
   2. Result of **composition**  
   3. Can be **huge and non-reusable** (but don't have to)

---

##### 11\. How React Works Behind the Scenes | 124\. Components, Instances, and Elements | 5:02

Component => Component Instance => React Element => DOM Element (HMTL)

---

##### 11\. How React Works Behind the Scenes | 126\. How Rendering Works: Overview | 4:38

1. Render is triggered (by updating state somewhere)
2. Render Phase (React **calls component functions** and figures out **how** DOM should be updated
3. Commit Phase (React **actually writes to the DOM**, updating, inserting and deleting elements.
4. Browser Paint

---

##### 11\. How React Works Behind the Scenes | 126\. How Rendering Works: Overview | 5:05

Two situations in which Render is triggered:

1. **Initial render** of the application
2. **State is updated** in one or more component instances (**re-render**)

**In practice**, it looks like React only re-renders the component where the state update happens but that's not how it **works behind the scenes**

Renders are **not** triggered immediately, but **scheduled** for when the JS engine has some "free time". There is also batching of multiple `setState` calls in event handlers

---

##### 11\. How React Works Behind the Scenes | 127\. How Rendering Works: The Render Phase | 2:37

Component instances that triggered re-render => React Elements => New Virtual DOM

---

##### 11\. How React Works Behind the Scenes | 129\. How Diffing Works | 3:24

* If the type of an element changes, it will be discarded and replaced by a new element and it's state will be reset.
* If an element position in the tree is intact, it will be preserved along with it's state

---

##### 11\. How React Works Behind the Scenes | 131\. The Key Prop | 1:10

Key Prop:

* Allows react to **distinguish** between multiple instances of the same component type
* When a **key stays the same across renders**, the element will be kept in the DOM (even if the position in the tree changes. It will also retain its state.  
   * Using Keys in lists
* When a key **changes between renders,** the element will be destroyed and a new one will be created (even if the position in the tree is the same as before)  
   * Using keys to **reset state**

---

##### 11\. How React Works Behind the Scenes | 134\. Rules for Render Logic: Pure Components | 1:45

The **Two Types** of logic in React compontents

**Render Logic**

* Code that lives at the **top level** of the component function
* Participates in **describing** how the component view looks like
* Executed **every time** the component renders

**Event Handler Functions**

* executed as a **consequence of the event** that the handler is listening for
* Code that actually **does things:** update state, perform an HTTP request, read an input field, navigate to another page, etc.

---

##### 11\. How React Works Behind the Scenes | 134\. Rules for Render Logic: Pure Components | 5:28

a function that creates a date or a unique hash is **inpure**. A function is only **pure** when it **always returns the same output** given the **same input.**

  
---

##### 11\. How React Works Behind the Scenes | 134\. Rules for Render Logic: Pure Components | 7:38

**Components must be pure when it comes to render logic:** given the same props (input), a component instance should always return the same JSX (output)

**Render logic must produce no side effects:** no interaction with the "outside world" is allowed. So, in render logic: 

* Do NOT perform **network requests** (API calls)
* Do NOT start **timers**
* Do NOT directly **use the DOM API**
* Do NOT **mutate objects or variables** outside of the function scope
* Do NOT **update state (or refs)**: this will create an infinite loop!

  
¿Generating random numbers seems to be ok.??

Side effects are allowed (and encouraged) in **event handler functions!**

There is also a special hook to **register side effects** (useEffect)

---

##### 11\. How React Works Behind the Scenes | 135\. State Update Batching | 2:48

React **Batches state updates**

All pieces of state inside an event handler are update in one go. They are **batched** and do not trigger several re-render events but just one re-render event.

Example - This will trigger only one re-render

```javaScript
const reset = function () {
  setAnswer('');
  console.log(answer);
  setBest(true);
  setSolved(false);
};
```

**Updating state in React is Asynchronous**

This is why a lot of console.log() calls will not display current state but **"stale state"**

---

##### 11\. How React Works Behind the Scenes | 135\. State Update Batching | 8:33

If state batching ever becomes problematic, we can **opt out** of automatic batching by wrapping a state update in a `ReactDOM.flushSync()` function (but you will never need this)

---

##### 11\. How React Works Behind the Scenes | 137\. How Events Work in React | 3:25

We can prevent **event bubling** by using the `e.stopPropagation()` method.

---

##### 11\. How React Works Behind the Scenes | 137\. How Events Work in React | 7:40

React registers all event handlers on the **root DOM container** This is where **all events are handled**.

Behind the scenes, React performs **event delegation** for all events in our application.

It only registers one event handler function per event type.

---

##### 11\. How React Works Behind the Scenes | 137\. How Events Work in React | 11:48

React uses synthetic events, which is a light wrapper around a normal browser event.

* Wrapper around the DOM's native event object
* Has **same interface** as native event objects, like `stopPropagation()` and `preventDefault()`
* Fixes browser inconsistencies, so that events work in the exact **same way in all browsers**
* **Most synthetic events bubble** (including focus, blur and change) exept for scroll

Event Handlers **React vs. Vanila JavaScript**:

* Attributes for event handles are named using **camelCase** (onClick instead of onclick or click)
* Default behaviour **cannot** be prevented by returning `false` (only by using `preventDefault())`
* Attach "Capture" if you need to handle during **capture phase** (example: `onClickCapture`

---

##### 12\. Effects and Data Fetching | 141\. The Component Lifecycle | 1:38

Component (instance) **Lifecycle**

1. **Mount / Initial Render**  
   1. Component instance is rendered for the **first time**  
   2. Fresh state and props are **created**
2. **Re-Render**  
   1. **State** changes  
   2. **Props** change  
   3. **Parent** re-renders  
   4. **Context** changes
3. **UNMOUNT**  
   1. Component instance is **destroyed** and **removed**  
   2. **State** and **Props** are **destroyed**

We can define code to run at these specific **points in time**

---

##### 12\. Effects and Data Fetching | 144\. A First Look at Effects | 2:16

A side effect is basically any "interaction between a React component and the world outside the component". We can actually thing of it as "code that actually does something". **Examples:** Data fetching, setting up subscriptions, setting up timers, manually accessing the DOM, etc.

**Side Effects** and React can only happen inside **event handlers** or inside **effects.**

Side effects are triggered by rendering. Effects allow us to write code that will run at **different moments:** mount, re-render, or unmount

---

##### 12\. Effects and Data Fetching | 144\. A First Look at Effects | 4:59

Effects have three parts:

1. The effect or function itself.
2. a returned cleanup function (that will be called before the component re-renders or unmount)
3. a dependency array (that determines when the effect runs)

---

##### 12\. Effects and Data Fetching | 144\. A First Look at Effects | 6:10

Event handlers are always the preferred way of creating side effects

---

##### 12\. Effects and Data Fetching | 148\. The useEffect Dependency Array | 0:29

The `useEffect()` dependency array:

* By default, effects run **after every render.** We can prevent that by passing a **dependency array** as a second argument
* Without the dependency array, React doesn't know **when** to run the effect
* **Each time one of the dependencies changes, the effect will be executed again**
* Every **state variable** and **prop** used inside the effect **MUST** be included in the dependency array

---

##### 12\. Effects and Data Fetching | 148\. The useEffect Dependency Array | 5:16

* `useEffect` is like an **event listener** that is listening for one or more dependencies to change. **Whenever a dependency changes, it will execute the effect again**
* Effects **react** to updates to state and props used inside the effect(the dependencies). So **effects are "reactive"** (like state updates re-rendering the UI)

---

##### 12\. Effects and Data Fetching | 148\. The useEffect Dependency Array | 8:17

* `useEffect(fn, [x,y,z]);` Effect runs on **mount** and **re-renders** triggered by updating x, y or z
* `useEffect(fn, []);` Effect runs on **mount**
* `useEffect(fn, []);` Effect runs on **every render** (usually very bad ⛔️)

---

##### 13\. Custom Hooks, Refs, and More State | 160\. React Hooks and Their Rules | 0:29

React hooks are:

* Special buil-in functions that allow us to **"hook" into some aspect of React's internal mechanism**  
   * Creating and accessing **state** from the Fibre tree  
   * Registering **side effects** in Fiber tree  
   * Manual **DOM selections**  
   * Many more...
* Always start with "**use**" (`useState`, `useEffect`, etc.)
* Enable easy **reusing of non-visual logic:** we can compose multiple hops into our own **custom hooks**
* Give **function components** the ability to own state and run side effects at different lifecycle points (before v16.8 only available in class **components)**

---

##### 13\. Custom Hooks, Refs, and More State | 160\. React Hooks and Their Rules | 3:40

Rules of hooks:

1. **Hooks can only be called at the top level**  
   1. Do **NOT** call hooks inside **conditionals, loops, nested functions**, or after an **early return**  
   2. This is necessary to ensure that hooks are always called in the **same order** (hooks rely on this)
2. **Only call hooks from React functions**  
   1. Only call hooks inside a **function component** or a **custom hook**

These rules are automatically enforced by React's ESLint rules

---

##### 13\. Custom Hooks, Refs, and More State | 164\. useState Summary | 1:15

Summary of Defining and Updating State

1. Creating State  
   1. Simple: `const[count, setCount] = useState(23);`  
   2. Based on a **function (lazy evaluation)** `const[count, setCount] = useState(()=> JSON.parse(localStorage.getItem('count));`  
         1. Function must be **pure** and accept **no arguments**. Called only on **initial render**
2. Updating State  
   1. Simple: `setCount(1000);`  
   2. Based on **Current State**: `setCount(count => count + 1000)`  
         1. Function must be **pure** and return next state

You should never mutate objects or arrays

---

##### 13\. Custom Hooks, Refs, and More State | 166\. Introducing Another Hook: useRef | 0:39

REF with useRef

* Ref are a "Box" (object) with a **mutable** `.current` property that is **persisted across renders** ("normal" variables are always reset)
* Two big use cases:  
   * **Creating a variable that stays the same between renders (e.g. previous state,** `setTimeout` id, etc.  
   * Selecting and storing DOM elements
* Refs are for **data that is NOT rendered:** usually only appear in event handlers or effects, not in JSX (otherwise use state)
* Do **NOT** read or write `.current` in render logic (like state), instead, we normally do that in `useEffect` hooks

---

##### 16\. The Advanced useReducer Hook | 189\. Managing State With useReducer | 1:42

State management with useState is not enough in certain situations:

1. When components have **a lot of state variables and state updates,** spread across many event handlers **all over the component**
2. When **multiple state updates** need to happen **at the same time** (as a reaction to the same event, like "starting a game"
3. When updating one piece of state **depends on one or multiple other pieces of state**

---

##### 16\. The Advanced useReducer Hook | 201\. Section Summary: useState vs. useReducer | 0:33

`useState`:

* Ideal for **single, independent pieces of state** (numbers, strings, single arrays, etc)
* Logic to update state is placed directly in event handlers or effects, **spread all over one or multiple components**
* State is updated by calling `setState`
* Imperative when comparing to dispatching an action `setGameStarted( true )`

  
`useReducer`:

* Ideal for multiple **related pieces of state**, and **complex state** (e.g. object with many values and nested objects or arrays)
* Logic to update state lives in **one central place, decoupled from components**: the reducer
* State is updated by **dispatching an action to the reducer**
* Declarative state updates: complex state transitions are mapped to actions e.g. `dispatch({ "type:'startGame" })`
* More **difficult** to understand and implement

---

##### 17\. React Router: Building Single-Page Applications (SPA) | 205\. Routing and Single-Page Applications (SPAs) | 0:29

Routing:

* With routing, we match **different URLs** to **different UI views** (React components): **routes**  
   * www.example.com**/**  
   * www.example.com**/login**  
   * www.example.com**/app**
* Keeps **UI in sync** with the current **browser url**
* Allows us to build **SPA**s (Single-Page Applications)

---

##### 19\. Performance Optimization and Advanced useEffect | 243\. Performance Optimization and Wasted Renders | 5:16

A **Wasted Render** is a render that din't produce any changes in the DOM

This is only a problem when we render too frequently or when the component is very slow.

---

##### 19\. Performance Optimization and Advanced useEffect | 246\. Understanding memo | 0:18

**Memoization:** Optimization technique that executes a pure function once, and saves the result in memory. If we try to execute the function again with the **same arguments as before,** the previously saved results will be returned, **without executing the function again.**

* Memoize **components** with `memo`
* Memoize **objects** with `useMemo`
* Memoize **functions** with `useCallback`

This will have the result of 

1. Prevent wasted renders
2. Improve app speed/responsiveness

---

##### 19\. Performance Optimization and Advanced useEffect | 246\. Understanding memo | 4:07

**Memo:**

* Used to create a component that will **not re-render when it's parent re-renders,** as long as the **props stay the same between renders**
* **Only affects props!** A memoized component will still re-render when it's **own state changes** or when a **context that it's subscribed to changes**

---

##### 19\. Performance Optimization and Advanced useEffect | 248\. Understanding useMemo and useCallback | 0:36

In React, everything inside a component **is re-created on every render** (including objects and functions)

---

##### 19\. Performance Optimization and Advanced useEffect | 255\. useEffect Rules and Best Practices | 3:23

Use effect Dependecy Array rules:

* You must include **all reactive values** that are used directly or indirectly inside the useEffect hook. That includes derived state, functions and variables that reference reactive values that the effect uses.
* Dependencies chose themselves: **Never** ignore the `exaustive-deps` ESLint rule!
* Do **NOT** use **objects** or **arrays** as dependencies (objects are recreated on every render and React sees new objects as **different**, `{} !== {}`

---

##### 28\. Advanced React Patterns | 365\. A Look at Higher-Order Components (HOC) | 7:33

Higher order components receive another component as a prop and what they return is a component. That returned component, wraps the component initially received as a prop and gives it whatever stateful logic the wrapping function devised for it.

---