##### 1\. Introduction | 7\. React Testing Library Philosophy | 0:49

React Testing Library

* Creates a virtual DOM for testing  
   * and utilities for interacting with the DOM
* Allows testing without a browser

---

##### 1\. Introduction | 7\. React Testing Library Philosophy | 1:19

Types of Test:

* **Unit Test**: Tests one unit of code in isolation
* **Integration Tests**: How multiple components work together
* **Functional Tests:** (behaviour not js functions)**:** tests a particular function of software
* **Acceptanse / End-to-end (E2E) Tests:** Use actual browser and server (Cypress, Selenium)

---

##### 1\. Introduction | 8\. Functional Testing vs Unit Testing | 2:12

**Unit Testing:**

* Isolated: mock dependencies, test internals
* Very easy to pinpoint failures
* Further from how users interact with software
* More likely to break with refactoring

**Functional Testing:**

* Include all relevant units, test behaviour
* Close to how users interact with software
* Robust tests, less likely to break with refactoring
* More difficult to debut failing tests

---

##### 5\. Simulating Server Response with Mock Service Worker | 53\. Tools for Debugging Tests | 6:12

Debugging Roles with logRoles:

```javaScript
import { logRoles } from '@testing-library/react';
 
const { container } = render(<App />);
 
logRoles(container);
```

---

##### 7\. Final Exam: Order Phases | 72\. Debugging Tips | 0:23

`screen.debug()` will always print what the dom looks like at that point

---

##### 8\. Optional Extra Practice | 78\. Standard Questions for New Tests and Introduction to Exercises | 2:52

* What to render?  
   * What is the smallest component that encompasses the test?
* Do we need to pass any props?
* Do we need to wrap the test in a Context Provider?  
   * Does the provider gets used? Is it already wrapped within the component?
* Where should the tests go?  
   * Which file? Is a new file needed?
* What to test?  
   * What is the behaviour that needs testing?
* How to test?  
   * What queries and events?
* Do we need to `await`?  
   * Is there anything `async` going on?

---

##### 8\. Optional Extra Practice | 80\. Disable Order Button if No Scoops Ordered | 3:42

If a component requires a prop enforced by Typescript, you can send in a jest mock function like

`render(<OrderEntry setOrderPhase={jest.fn()} />);` 

---