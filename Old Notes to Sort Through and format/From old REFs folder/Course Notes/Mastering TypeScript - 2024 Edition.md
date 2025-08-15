#### Misc Typescript Notes

// https://levelup.gitconnected.com/this-typescript-trick-will-blow-your-mind-ff920d1f61ad

A clever trick for extrapolating types:

```typescript
// Create a generic type that extracts the last name from a full name
type ExtractLastName<T extends string> =
  T extends `${infer FirstName} ${infer LastName}` ? LastName : null;

// Extranct the LastName type from the names tuple using our ExtractLastName generic type
type LastName = ExtractLastName<(typeof names)[number]>;

// Unsing the as const assertion we tell TypeScript that the array is a tuple of string literals not a string[]
const names = ['Maxine Clay', 'Nina Moss', 'Mia Ribeiro'] as const;

// This function takes in an actual lastName from the names array as an argument,
// not any string. It returns the full name.
// If a lastName that isn't in the names array is passed TypeScript will throw an error
function findNameUsingLastName(lastName: LastName) {
  return names.find(name => name.includes(lastName));
}

const fullName = findNameUsingLastName('Moss');
```

##### 17\. Modules | 123\. Importing Types | 4:20

When importing types, if we use the import type {} syntax, typescript guarantees that tha types will be completely removed from the compiled javascript and it's a best practice. Example:

`import type {Person} from './person'`

In more recent versions of TypeScript you can also mix and match imports of types and other values:

`import {type Person, getPerson} from './person'`

---

##### 16\. Working With Type Declarations | 114\. Introducing Type Declarations | 4:23

`.d.ts` files are special files that contain type and interface declarations and they may be included in third party libraries.

---

##### 15\. Type Narrowing | 113\. Exhaustiveness Checks With Never | 2:55

When performming exhaustiveness checks with `never`, we can provide a case that should never happen. If it does, Typescript will warn us. In the following example we added `Donkey` to the `FarmAnimals` type but forgot to handle the case `'donkey'`. Typescript now flags an error with the variable \_exhaustiveCheck.

```typescript
interface Cow {
  name: string;
  weight: number;
  age: number;
  kind: 'cow';
}
interface Pig {
  name: string;
  weight: number;
  age: number;
  kind: 'pig';
}
interface Rooster {
  name: string;
  weight: number;
  age: number;
  kind: 'rooster';
}
interface Donkey {
  name: string;
  weight: number;
  age: number;
  kind: 'donkey';
}
type FarmAnimals = Cow | Pig | Rooster | Donkey;
function getFarmAnimalSound(animal: FarmAnimals) {
  switch (animal.kind) {
    case 'cow':
      return 'mooooo';
    case 'pig':
      return 'ooooinc';
    case 'rooster':
      return 'cooocorocooo';
    default:
      const _exhaustiveCheck: never = animal;
      return _exhaustiveCheck;
  }
}
```

###### \_exhaustiveCheck using an object look up table pattern using the `Record` utility type.

Instead of using a switch statement like the example above, sometimes an easier and much simpler/elegant approach is to use an object as a lookup table
For example:

```typescript
const farmAnimalsSoundLookup: Record<FarmAnimals['kind'], string> = {
  cow: 'mooooo',
  pig: 'ooooinc',
  rooster: 'cooocorocooo',
  donkey: 'hee-haw',
};
```

The Record utility type, defines a key/value pair of types. In this case, the key needs to be of type `FarmAnimals['kind']` and the value needs to be a string. If we miss entering any animal type as a key we will get a TypeScript error. We can then implement a utility function to get the sound name if we wish and throw an error if the sound cannot be found:

```typescript
function getFarmAnimalSound(animal: FarmAnimals) {
  if (!(animal.kind in farmAnimalsLookup)) {
    throw new Error(`Animal kind not found: ${animal.kind}`);
  }
  return farmAnimalsLookup[animal.kind];
}
```

---

##### 15\. Type Narrowing | 112\. Discriminated Unions | 7:30

To use **Discriminated Unions** we have to create a common property accross diferent types that have a literal value and then we can type-narrow values based on that.

In this example we have to have **literal values** in the kind property when we define it on our interfaces:

```typescript
interface Cow {
  name: string;
  weight: number;
  age: number;
  kind: 'cow';
}
interface Pig {
  name: string;
  weight: number;
  age: number;
  kind: 'pig';
}
interface Rooster {
  name: string;
  weight: number;
  age: number;
  kind: 'rooster';
}
type FarmAnimals = Cow | Pig | Rooster;
function getFarmAnimalSound(animal: FarmAnimals) {
  switch (animal.kind) {
    case 'cow':
      return 'mooooo';
    case 'pig':
      return 'ooooinc';
    case 'rooster':
      return 'cooocorocooo';
  }
}
```

---

##### 15\. Type Narrowing | 111\. Working With Type Predicates | 5:48

Type predicates are a way of creating a function that tells typescrip wether a value is of a certain type:

```typescript
interface Movie {
  title: string;
  runtime: number;
  director: string;
}
interface TvShow {
  title: string;
  numEpisodes: number;
  episodeLength: number;
  director: string[];
}
const isMovie = (show: Movie | TvShow): show is Movie => {
  return (show as Movie).runtime !== undefined;
};
```

In this case, if we didn't add the `show is Movie` as the type the function returns, we would know if the value we passed is a movie but typescript wouldn't so it wouldn't allow us access to the right methods. We can then use it and have access to movie only properties like `runtime`

```typescript
function getRuntime(show: Movie | TvShow) {
  if (isMovie(show)) return show.runtime;
  return show.numEpisodes * show.episodeLength;
}
```

---

##### 15\. Type Narrowing | 110\. Instanceof Narrowing | 0:16

we can also very effectively use `instanceof` for Type Narrowing:

```typescript
const printFullDate = (date: Date | string): string => {
  if (date instanceof Date) return date.toLocaleString();
  return new Date(date).toLocaleString();
};
```

---

##### 15\. Type Narrowing | 109\. Narrowing With The In Operator | 3:52

we can use the `in` operator to **Type Narrow objects** and make sure they have a particular property:

```typescript
interface Movie {
  title: string;
  runtime: number;
  director: string;
}
interface TvShow {
  title: string;
  numEpisodes: number;
  episodeLength: number;
  director: string[];
}
function getRuntime(show: Movie | TvShow) {
  if ('runtime' in show) return show.runtime;
  return show.numEpisodes * show.episodeLength;
}
```

---

##### 14\. Generics | 104\. Default Type Parameters | 0:01

We can also define default types to generics using the `=` sign:

```typescript
interface ObjectWithId {
  id: string;
}
interface User extends ObjectWithId {
  firsName: string;
  lastName: string;
}
const getId = <T extends ObjectWithId = User>(object: T): string => {
  return object.id;
};
getId({ name: 'bilbo', id: '123can3i' });
getId({ superTramp: 12, id: 'camk293uh', albumPlays: 1233 });
```

---

##### 14\. Generics | 103\. Adding Type Constraints | 4:04

We can also use interfaces to further constrain generics. For example here we want to be able to get an object of any shape and get it's id property so the object has to have an id property:

```typescript
interface ObjectWithId {
  id: string;
}
const getId = <T extends ObjectWithId>(object: T): string => {
  return object.id;
};
getId({ name: 'bilbo', id: '123can3i' });
getId({ superTramp: 12, id: 'camk293uh', albumPlays: 1233 });
```

---

##### 14\. Generics | 103\. Adding Type Constraints | 1:35

We can add **Type Constrains** to our generics and one way of doint it is with the extends keyword:

```typescript
const merge = <T extends object, U extends object>(
  object1: T,
  object2: U
): T & U => {
  return {
    ...object1,
    ...object2,
  };
};
```

---

##### 14\. Generics | 102\. Generics With Multiple Types | 3:07

We can also have generics with multiple types:

```typescript
const merge = <T, U>(object1: T, object2: U): T & U => {
  return {
    ...object1,
    ...object2,
  };
};
```

---

##### 14\. Generics | 101\. Generics, Arrow Functions, & TSX Files | 1:53

When writting **TSX**, because React uses `<>` as frangments or element names, it gets confused with the generics syntax when we use **arrow functions**. In that case, all we need to do is add a **trailing comma** after the generic declaration like:

```typescript
const getAnotherItemOfSameType = <T>(item: T): T => {
  return item;
};
```

---

##### 14\. Generics | 98\. Writing Our First Generic | 6:00

```typescript
function getItemOfSameType<T>(item: T): T {
  return item;
}
getItemOfSameType<string>('canis'); // expects a string, returns a string
getItemOfSameType<number>(123); // expects a number, returns a number
getItemOfSameType(123); // expects the number literal 123 and returns that same number 123
getItemOfSameType([123, 2, 4]); // expects an array of numbers
```

---

##### 14\. Generics | 97\. Another Example Of A Built-In Generic | 6:36

Generics are essential in several situations. For example, when using query selector if we write:

```typescript
const input = document.querySelector('#some-input');
```

We get a genereic element that won't allow us to acces properties such as `input.value` . If we define that same property as

```typescript
const input = document.querySelector('#some-input') as HTMLInputElement;
```

We loose the ability for that element to be `null` within the typescript logic because we are enforcing the type of `HTMLInputElement` for our input variable.

If we use a generic on the other hand. Typescript will know what type the element it is but still consider that it may be `null`

```typescript
const input = document.querySelector<HTMLInputElement>('#some-input');
```

Now typescript reads the type of `input` as `HTMLInputElement | null`

---

##### 14\. Generics | 96\. Introducing Generics | 0:34

Generics in TypeScript allows us to define reusable functions and classes that work with multiple types rather than a single type.

---

##### 13\. TypeScript Classes | 95\. Creating Abstract Classes | 2:49

classes that use the `abstract` modifier cannot be instantiated on their own, they can only serve as the blueprint for child classes. If we add properties to that class with the abstract keyword in front of the property, the property will not exist on the class but will be required to exist on the child class.

It's a bit of a hybrid between an interface and a class with some extra bells and whistles.

```typescript
abstract class Employee {
  constructor(public firsName: string, public lastName: string) {}
  abstract get pay(): number;
}
class FullTimeEmployee extends Employee {
  constructor(firstName: string, lastName: string, private salary: number) {
    super(firstName, lastName);
  }

  get pay() {
    return this.salary;
  }
}
```

---

##### 13\. TypeScript Classes | 94\. Classes and Interfaces | 4:09

We can use interfaces with TypesCript classes by using the keyword `implements` like so:

```typescript
interface PlayerProps {
  first: string;
  last: string;
}
class Player implements PlayerProps {
  protected points = 0;
  constructor(public first: string, public last: string) {}
}
```

We can also implement more than one interface in one class:

```typescript
interface PlayerProps {
  first: string;
  last: string;
}
interface Yelling {
  yell(): void;
}
class Player implements PlayerProps, Yelling {
  protected points = 0;
  constructor(public first: string, public last: string) {}
  yell() {
    console.log('Haaaaaaaa!');
  }
}
```

---

##### 13\. TypeScript Classes | 93\. The Protected Modifier | 2:24

when extending classes, if we used real javascript private properties with hash `#`, we can't modify or access those properties in the child class.

Typescript provides a `protected` modifier that will warn us if we try to access or modify a protected property outside the class but will allow access to them on child classes inheriting the protected class from the parent

---

##### 13\. TypeScript Classes | 91\. Parameter Properties Shorthand | 1:35

Typescript also provides a parameter properties shorthand so we don't have to define them, then add them as arguments in the constructor and then add them to class properties. TypeScript does all of that for us, all we need to do is add parameters to our constructor with public or private modifiers like so:

```typescript
class Player {
  #points = 0;
  constructor(public first: string, public last: string) {}
}
```

The output of this is actually:

```typescript
class Player {
  first;
  last;
  #points = 0;
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
}
```

---

##### 13\. TypeScript Classes | 90\. The private Modifier | 3:30

Typescript can use `private` and `public` modifiers for classes but they do nothing on the final compiled code. You can still use real class private fields with `#` depending on your Typescript target settings

```typescript
class Player {
  public readonly first: string;
  public readonly last: string;
  private points = 0;
  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }
}
```

---

##### 13\. TypeScript Classes | 88\. readonly Class Properties | 0:40

We can also use readonly with TypesCript class properties:

```typescript
class Player {
  readonly first: string;
  readonly last: string;
  score = 0;
  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }
}
```

---

##### 11\. Mini Project: The DOM, Type Assertions, and More! | 69\. Type Assertions | 0:09

**Type Assertions**: tell TypeScript what type we know an element to be with the `as` keyword followed by a type

```typescript
const app = document.querySelector('#app') as HTMLDivElement;
```

Or

```typescript
const btn = document.querySelector('#btn') as HTMLButtonElement;
```

This is specially important when we need to use know properties of an element such as the value of an input element so we can use:

```typescript
const input = app.querySelector('#todo-input') as HTMLInputElement;
input.value = '';
```

And then we will be able to access `input.value` without typescript complaining

An alternative way of doing this without doing the type assertion when defining the variable would be. This syntax **does not work with TSX/JSX**

```typescript
const input = app.querySelector('#todo-input');
(<HTMLInputElement>input).value = '';
```

---

##### 11\. Mini Project: The DOM, Type Assertions, and More! | 68\. TypeScript's Non-Null Assertion Operator | 5:23

TypeScripts **Non-Null Assertion Operator**:

when getting a dom element for example:

```typescript
const app = document.querySelector('#app');
```

The type of app is `Element | null` if we want to tell typescript that app will definetely be an element and it can stop worrying we can use the Non-Null Assertion Operator `!` at the end of our declaration:

```typescript
const app = document.querySelector('#app')!;
```

---

##### 9\. Interfaces | 55\. Interfaces Vs. Type Aliases | 1:30

Interfaces vs Types:

- interfaces can **only describe objects**
- interfaces can be **re-opened** and stuffa added on to them
- interfaces can be **extended**, types can use intersection types with the ampersand `&`

---

##### 9\. Interfaces | 54\. Interface Multiple Inheritance | 0:02

Interfaces can be extended with multiple inheritance:

```typescript
interface Person {
  name: string;
}
interface Employee {
  readonly id: number;
  email: string;
}
interface Engineer extends Person, Employee {
  type: 'civil' | 'military';
}
const guy: Engineer = {
  name: 'joe',
  id: 200,
  email: 'canis@canis.canis',
  type: 'civil',
};
```

---

##### 9\. Interfaces | 52\. Reopening Interfaces | 0:03

Interfaces can be reopened and we can add new properties to them without having to re-declare another interface extending the previous one. we can simply write:

```typescript
interface Product {
  name: string;
  price: number;
  setDiscount?(discount: number): number;
}
const purse: Product = {
  name: 'Asda purse',
  price: 500,
  size: 300,
  setDiscount(discount) {
    return this.price * discount;
  },
};
// Re-opening the interface
interface Product {
  size: number;
}
const shoes: Product = {
  name: 'Blue suede shoes',
  price: 200,
  size: 15,
  setDiscount(discount) {
    return this.price * discount;
  },
};
```

---

##### 9\. Interfaces | 51\. Interface Method Parameters | 1:19

To define arguments for methods inside an interface we can use:

```typescript
interface Product {
  name: string;
  price: number;
  setDiscount(discount: number): number;
}
```

The name of the argument does not matter but it has to be there.

---

##### 9\. Interfaces | 50\. Interface Methods | 2:26

We can write methods inside interfaces with two different syntaxes:

```typescript
interface Person {
  name: string;
  lastName: string;
  nickname?: string;
  sayHi(): string; // One way of writting a method that returns a String
  sayGoodbye: () => string; // Another way of writting a method that returns a String
}
```

---

##### 9\. Interfaces | 48\. Introducing Interfaces | 1:45

**Interfaces** allow us the define the shape of objects and **only objects**.

---

##### 8\. Tuples and Enums | 47\. Enums Behind The Scenes | 3:29

**Enums** create additional code when compiled into javascript but if we use the const keyword in front of an Enum definition, all the resulting javascript gets simplified to the values themselves. for example:

---

##### 8\. Tuples and Enums | 47\. Enums Behind The Scenes | 3:28

```typescript
enum OrderStatus {
  PENDING,
  SUCCESS,
  ERROR,
}
const orderStatus = {
  order: 'socks',
  status: OrderStatus.ERROR,
};
```

When compiled to javascript returns:

```typescript
'use strict';
var OrderStatus;
(function (OrderStatus) {
  OrderStatus[(OrderStatus['PENDING'] = 0)] = 'PENDING';
  OrderStatus[(OrderStatus['SUCCESS'] = 1)] = 'SUCCESS';
  OrderStatus[(OrderStatus['ERROR'] = 2)] = 'ERROR';
})(OrderStatus || (OrderStatus = {}));
const orderStatus = {
  order: 'socks',
  status: OrderStatus.ERROR,
};
```

But if we use const in front of the enum definition, when compiled to javascript that same code will return in:

```typescript
'use strict';
const orderStatus = {
  order: 'socks',
  status: 2 /* OrderStatus.ERROR */,
};
```

---

##### 8\. Tuples and Enums | 45\. Introducing Enums | 2:57

Enumns allow us to define a set of named contants. We can give these constants numeric or string values.

```typescript
enum Responses {
  no, //1
  yes, //2
  maybe, //3
}
enum Responses2 {
  no = 200, // 200
  yes = 300, // 300
  maybe = 500, // 500
}
enum Responses3 {
  no = 'No', // 'No'
  yes = 'Yes', // 'Yes'
  maybe = 'Maybe', // 'Maybe'
}
```

---

##### 8\. Tuples and Enums | 44\. A Bit More On Tuples | 3:08

Tupples DO NOT prevent us from pushing other elements inside an array later on and typescript does not complain about that

---

##### 8\. Tuples and Enums | 43\. Introducing Tuples | 0:32

**Tuples** are an array with a **fixed length** and ordered with a **fixed kind of type**. They are super-rigid arrays basically.

`let myTupple: [number, string]`

This will let us define for example:

`myTupple = [1, 'canis']`

But not:

`myTupple = ['canis, 1]`

Nor:

`myTupple = [1, 'canis', 'circensis']`

---

##### 7\. Union Types | 41\. Literal Types | 0:04

**Literal Types**, are not just types but values themselves too. When combined with union types, they make very powerful checks for things that can only have a defined set of values for example:

`let status: 'ready' | 'loading' | 'error';`

---

##### 7\. Union Types | 40\. Union Types and Arrays | 2:06

**Union Types** with arrays: if we want an array to hold multiple types we use a union type inside a parenthesis:

`const stuff: (number | string)[] = [1,2,'cat'];`

If we want stuff to be either an array of numbers or an array of strings then we would write:

`const stuff: number[] | string[] = [1,2,3]`

---

##### 7\. Union Types | 39\. Type Narrowing w/ Union Types | 6:33

**Type narrowing** is the concept of doing a type check before working with a value if that value can have multipel types, for example:

```typescript
type PersonName = string | null;
function getName(name: PersonName): string {
  if (!name) return 'no name entered';
  return `The name is ${name}`;
}
```

---

##### 7\. Union Types | 38\. Introducing Union Types | 1:30

**Union Types**, allow us to specify multiple types to the same variable like:

`let age: number | string = 21;`

---

##### 6\. Array Types | 36\. Multidimensional Arrays | 1:00

To define two dimensional arrays all we do is add another set of square brackets to the type definition. For example if we wanted a multi-dimentional array of strings we can use:

`const board: string[][] = [['x','y','z'],['x','y','z'],['x','y','z']]`

We could also write it with the alternative syntax:

```typescript
const multi: Array<Array<String>> = [
  ['x', 'y', 'z'],
  ['a', 'b', 'c'],
];
```

---

##### 6\. Array Types | 35\. More Array Syntax | 0:32

A different syntax for defining arrays can be:

`const strings: Array<string> = []`

---

##### 5\. Object Types | 32\. Intersection Types | 1:37

**Intersection types** is the syntax we use to combine two or more types using ampersand `&`

```typescript
type Circle = {
  radius: number;
};
type Color = {
  color: string;
};
type ColorfulCircle = Circle & Color;
const circle: ColorfulCircle = {
  radius: 3.4,
  color: 'red',
};
```

We can also extend a type with ampersand `&` like:

```typescript
type SuperColorFulCircle = ColorfulCircle & {
  color2: 'string';
};
```

---

##### 5\. Object Types | 31\. The readonly Modifier | 1:48

TypeScript also gives us a `readonly` **_modifier_** so that once an object is defined we can't change a property inside it:

```typescript
type User = {
  readonly id: number;
  username: string;
};
```

This will allow us to set an object with those properties in the first place but not allow it to be modified later.

---

##### 4\. Functions | 23\. The Never Type | 0:06

When we anotate a function with `any`, it returns `undefined` or `null` but when we anotate a funcion with `never` it means the function never finishes executing like throwing an error for example. It can also be used for functions that continuously run and never finish

---

##### 4\. Functions | 20\. Return Type Annotations | 4:33

It's best practice to **always** anotate what a **function** actually **returns** so typescript can catch any mistakes in our function body.

---

##### 1\. Introduction | 5\. TypeScript Overview | 4:24

The goal of TypeScript is to help us find errors before a code is ever run.

---

##### 1\. Introduction | 4\. The Case For TypeScript | 3:31

TypeScript is a Superset of Javascript

---
