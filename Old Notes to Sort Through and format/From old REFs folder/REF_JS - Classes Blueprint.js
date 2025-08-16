'use strict';

// 1. Classes are not hoisted
// 2. Classes are first-class citizens (can be passed as arguments, returned from functions, assigned to variables)
// 4. The strict mode of the class is not affected by the strict mode of the module that contains it

// 3. Classes are executed in strict mode

// 4. The strict mode of the class is not affected by the strict mode of the module that contains it

// 3. Classes are executed in strict mode

class Animal {
  constructor(type, genus) {
    this.type = type;
    this.genus = genus;
  }
  getType() {
    console.log("This Animal's type is " + this.type);
  }
}

// assigining methods to the prototype of Animal
Object.assign(Animal.prototype, {
  getGenus() {
    console.log("This Animal's genus is " + this.genus);
  },
});

class Dog extends Animal {
  // Public field (similar to property, available on created object)
  // Public fields are created and initialized once, and are shared across all instances of the class.
  kingdom = 'Animalia';

  // Private fields (not accessible outside of class)
  // Private fields are created and initialized once, and are shared across all instances of the class.
  #caged = true;

  // Static public field (available only on class)
  // Static fields are created and initialized once, and are shared across all instances of the class.
  static quantity = 10000;

  constructor(name, breed) {
    // Call to parent (super) class (necessary with extend). Needs to happen before accessing this
    super('dog', 'canis');
    // Instance property (available on created object)
    this.name = name;
    this.breed = breed;
    this.legs = 4;
  }

  // Public method
  // Public methods are defined only once and are not re-created for every instance of the class. Instead, they are stored in the classe's prototype.
  introduce() {
    console.log(
      `This is ${this.name}, a ${this.breed} ${this.type} of the ${this.genus} genus.`
    );
  }

  // Private method
  #poke() {
    console.log('Ouch!');
  }

  // Referencing private field and method
  showCagedStatus() {
    console.log(`Is ${this.name} caged? ${this.#caged}`);
    this.#poke();
  }

  // Getter Method
  get legs() {
    return this._legs;
  }

  // Setter method (use "_" like _propertyName to set a property with a name that was already defined in the constructor and also in the getter method)
  // this is a convention, not a rule so you don't duplicate the property's name
  // from the constructor which creates an error
  // Setter methods need to have exactly one parameter
  set legs(legs) {
    this._legs = legs;
  }

  // Static method (available only on class. Can not access instance properties nor methods, only static ones)
  static printQuantity() {
    console.log('There are ' + Dog.quantity + ' dogs in the world.');
  }
}

// Adding new methods to the Class Prototype
Dog.prototype.wagTail = function () {
  console.log(this.name + ' is wagging its tail!');
};

// Adding multiple new methods to the Class Prototype
// This is not entirelly necessary since methods declared inside a class are only created once and are not re-created for every instance of the class.
Object.assign(Dog.prototype, {
  describe() {
    console.log("This Dog's name is " + this.name);
  },
  wagTail() {
    console.log(this.name + ' is wagging its tail!');
  },

  fetch() {
    console.log(this.name + ' is fetching!');
  },
});

// Creating an instance of Dog
const beagle = new Dog('Toby', 'Beagle');

// Calling methods on instance
// beagle.describe();
beagle.showCagedStatus();

// Checking if beable is an instance of the Class Dog
console.log(`instance of Dog?`, beagle instanceof Dog);

// Using a setter method
beagle.legs = 6;

// Using a getter method
console.log(beagle.legs);

// Accessing a static property, notice it is not available on the instance, you have to call the class name itself
console.log(Dog.quantity);

// Calling a static method, notice it is not available on the instance, you have to call the Method on the class name itself
Dog.printQuantity();

// Trying to access private fields and methods causes an error
// console.log(beagle.#caged);

// Showing a public field
console.log(beagle.kingdom);

// Showing a public method from the parent class in the child class instance
beagle.getType();
// Showing a public prototype method from the parent class in the child class instance
beagle.getGenus();

// Showing the prototype of the instance
console.log(beagle.__proto__);

console.log(beagle);
