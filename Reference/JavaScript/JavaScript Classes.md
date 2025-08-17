Tags: #javascript #classes #oop #inheritance #constructor #methods #getters #setters #static #private #public #prototype #programming

# JavaScript Classes

A comprehensive guide to JavaScript classes, covering class syntax, inheritance, access modifiers, static members, and prototype manipulation.

## Overview

JavaScript classes provide a cleaner, more intuitive syntax for creating objects and implementing inheritance. Introduced in ES6, classes are syntactic sugar over JavaScript's existing prototype-based inheritance system.

## Key Characteristics of Classes

1. **Classes are not hoisted** - Must be declared before use
2. **Classes are first-class citizens** - Can be passed as arguments, returned from functions, and assigned to variables
3. **Classes are executed in strict mode** - Automatic strict mode enforcement
4. **Class strict mode is independent** - Not affected by the strict mode of the containing module

## Basic Class Structure

### Simple Class Definition

```javascript
class Animal {
  constructor(type, genus) {
    this.type = type;
    this.genus = genus;
  }
  
  getType() {
    console.log("This Animal's type is " + this.type);
  }
}
```

### Adding Methods to Class Prototype

```javascript
// Adding methods to the prototype of Animal
Object.assign(Animal.prototype, {
  getGenus() {
    console.log("This Animal's genus is " + this.genus);
  },
});
```

## Advanced Class Features

### Class with All Features

```javascript
class Dog extends Animal {
  // Public field (available on created object)
  // Shared across all instances, created and initialised once
  kingdom = 'Animalia';

  // Private field (not accessible outside of class)
  // Prefixed with # symbol
  #caged = true;

  // Static public field (available only on class, not instances)
  static quantity = 10000;

  constructor(name, breed) {
    // Call to parent (super) class - required with extends
    // Must happen before accessing 'this'
    super('dog', 'canis');
    
    // Instance properties (available on created object)
    this.name = name;
    this.breed = breed;
    this.legs = 4;
  }

  // Public method
  // Stored in class prototype, not recreated for every instance
  introduce() {
    console.log(
      `This is ${this.name}, a ${this.breed} ${this.type} of the ${this.genus} genus.`
    );
  }

  // Private method (not accessible outside of class)
  #poke() {
    console.log('Ouch!');
  }

  // Method referencing private field and method
  showCagedStatus() {
    console.log(`Is ${this.name} caged? ${this.#caged}`);
    this.#poke();
  }

  // Getter method
  get legs() {
    return this._legs;
  }

  // Setter method
  // Must have exactly one parameter
  // Uses underscore convention to avoid naming conflicts
  set legs(legs) {
    this._legs = legs;
  }

  // Static method (available only on class, not instances)
  // Cannot access instance properties or methods, only static ones
  static printQuantity() {
    console.log('There are ' + Dog.quantity + ' dogs in the world.');
  }
}
```

## Field Types and Access Modifiers

### Public Fields

```javascript
class Example {
  // Public field - accessible from outside the class
  publicField = 'visible to all';
  
  constructor() {
    // Instance property
    this.instanceProperty = 'also public';
  }
}
```

**Characteristics:**
- Created and initialised once
- Shared across all instances
- Accessible from outside the class

### Private Fields

```javascript
class Example {
  // Private field - only accessible within the class
  #privateField = 'hidden from outside';
  
  // Private method
  #privateMethod() {
    return 'only accessible internally';
  }
  
  // Public method accessing private members
  getPrivateData() {
    return this.#privateField + ' - ' + this.#privateMethod();
  }
}
```

**Characteristics:**
- Prefixed with `#` symbol
- Not accessible outside the class
- Attempting external access throws an error

### Static Members

```javascript
class Example {
  // Static field
  static staticField = 'belongs to class';
  
  // Static method
  static staticMethod() {
    // Can only access other static members
    return this.staticField;
  }
}

// Accessing static members
console.log(Example.staticField);
Example.staticMethod();
```

**Characteristics:**
- Belong to the class, not instances
- Accessed via class name, not instance
- Cannot access instance properties or methods

## Getters and Setters

### Getter Methods

```javascript
class Circle {
  constructor(radius) {
    this._radius = radius;
  }
  
  // Getter - accessed like a property
  get area() {
    return Math.PI * this._radius * this._radius;
  }
  
  get radius() {
    return this._radius;
  }
}

const circle = new Circle(5);
console.log(circle.area); // Accessed like property, not method
```

### Setter Methods

```javascript
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }
  
  // Setter - must have exactly one parameter
  set width(value) {
    if (value <= 0) {
      throw new Error('Width must be positive');
    }
    this._width = value;
  }
  
  get width() {
    return this._width;
  }
}

const rect = new Rectangle(10, 5);
rect.width = 15; // Uses setter
console.log(rect.width); // Uses getter
```

**Best Practices for Getters/Setters:**
- Use underscore convention (`_propertyName`) to avoid naming conflicts
- Include validation in setters
- Keep getters simple and side-effect free

## Inheritance

### Basic Inheritance

```javascript
class Animal {
  constructor(type) {
    this.type = type;
  }
  
  speak() {
    console.log(`${this.type} makes a sound`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    // Call parent constructor
    super('dog');
    this.name = name;
    this.breed = breed;
  }
  
  // Override parent method
  speak() {
    console.log(`${this.name} barks`);
  }
  
  // Call parent method
  makeGenericSound() {
    super.speak();
  }
}
```

### Key Inheritance Concepts

- Use `extends` keyword for inheritance
- Call `super()` in constructor before accessing `this`
- Use `super.methodName()` to call parent methods
- Child classes can override parent methods

## Prototype Manipulation

### Adding Methods to Class Prototype

```javascript
// Adding a single method
Dog.prototype.wagTail = function () {
  console.log(this.name + ' is wagging its tail!');
};

// Adding multiple methods
Object.assign(Dog.prototype, {
  describe() {
    console.log("This Dog's name is " + this.name);
  },
  
  fetch() {
    console.log(this.name + ' is fetching!');
  }
});
```

**Note:** Methods declared inside a class are automatically added to the prototype and are not recreated for every instance.

## Working with Class Instances

### Creating and Using Instances

```javascript
// Creating an instance
const beagle = new Dog('Toby', 'Beagle');

// Calling methods
beagle.introduce();
beagle.showCagedStatus();

// Using getters and setters
beagle.legs = 6; // Setter
console.log(beagle.legs); // Getter

// Accessing public fields
console.log(beagle.kingdom);

// Accessing inherited methods
beagle.getType(); // From Animal class
beagle.getGenus(); // From Animal prototype

// Checking instance type
console.log(beagle instanceof Dog); // true
console.log(beagle instanceof Animal); // true
```

### Static Member Access

```javascript
// Accessing static properties and methods
console.log(Dog.quantity); // Static property
Dog.printQuantity(); // Static method

// Note: Static members are not available on instances
console.log(beagle.quantity); // undefined
```

### Private Member Restrictions

```javascript
// These will throw errors:
// console.log(beagle.#caged); // SyntaxError
// beagle.#poke(); // SyntaxError

// Access private members through public methods
beagle.showCagedStatus(); // Works - uses public method
```

## Debugging and Inspection

### Viewing Prototype Chain

```javascript
// View the prototype
console.log(beagle.__proto__);

// View the instance
console.log(beagle);

// Check prototype chain
console.log(beagle.__proto__ === Dog.prototype); // true
console.log(Dog.prototype.__proto__ === Animal.prototype); // true
```

## Best Practices

### Class Design

1. **Use meaningful names** for classes and methods
2. **Keep constructors simple** - delegate complex logic to methods
3. **Favour composition over inheritance** when possible
4. **Use private fields** for internal state that shouldn't be accessed externally

### Method Organisation

1. **Group related methods** together
2. **Use static methods** for utility functions related to the class
3. **Implement getters/setters** for computed properties or validation
4. **Override toString()** for better debugging

### Performance Considerations

1. **Methods in class body** are added to prototype (good)
2. **Arrow functions in constructor** create new functions per instance (avoid)
3. **Static methods** don't have access to instance data but are memory efficient
4. **Private fields** have slight performance overhead but improve encapsulation

## Common Patterns

### Factory Pattern with Classes

```javascript
class ShapeFactory {
  static createShape(type, ...args) {
    switch (type) {
      case 'circle':
        return new Circle(...args);
      case 'rectangle':
        return new Rectangle(...args);
      default:
        throw new Error('Unknown shape type');
    }
  }
}
```

### Mixin Pattern

```javascript
const Flyable = {
  fly() {
    console.log(`${this.name} is flying`);
  }
};

class Bird extends Animal {
  constructor(name) {
    super('bird');
    this.name = name;
  }
}

// Add mixin to prototype
Object.assign(Bird.prototype, Flyable);
```

### Abstract Class Pattern

```javascript
class AbstractShape {
  constructor() {
    if (this.constructor === AbstractShape) {
      throw new Error('Cannot instantiate abstract class');
    }
  }
  
  // Abstract method - must be implemented by subclasses
  area() {
    throw new Error('Must implement area method');
  }
}
```