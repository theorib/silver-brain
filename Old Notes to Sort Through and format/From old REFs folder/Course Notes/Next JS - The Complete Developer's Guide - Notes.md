# Next JS: The Complete Developer's Guide

| Section   | 10\. Implementing Search Functionality |
| --------- | -------------------------------------- |
| Lesson    | 111\. Notes on QueryStrings in Next    |
| Timestamp | 4:49                                   |

**Receiving** the **searchParams** prop inside of a page makes it immediately a **dynamic route**

---

| Section   | 10\. Implementing Search Functionality |
| --------- | -------------------------------------- |
| Lesson    | 111\. Notes on QueryStrings in Next    |
| Timestamp | 3:52                                   |

Client componentss that use `useSearchParams()` need to be wrapped with `Suspense` or we get a warning at build time.

---

| Section   | 7\. Authentication with Next-Auth    |
| --------- | ------------------------------------ |
| Lesson    | 78\. Fixing UseFormState Type Errors |
| Timestamp | 3:22                                 |

When using `useFormState()` in order not to get typescript errors, we must pass an object as the initialState that has the same type as the first argument received by the server action that receives it. That has to have the same type as the object returned from the server action. All 3 places need an object with the same type.

For example, notice the last argument, the object with the errors. It when we go to the `actions.createTopic` function, that function must receive an object with the same type as the first argument and needs to return an object with the same type

Notice how we have to use `action` instead of `onSubmit` to pass the function to the form component.

```javaScript
export default function CreateTopicForm() {
  const [formState, formAction] = useFormState(actions.createTopic, {
    errors: {},
  });
}

<form action={formAction}>
//... rest of the code
```

```javaScript
interface CreateTopicFormState {
  errors: {
    name?: string[];
    description?: string[];
  };
}
 
export const createTopic = async function (
  formState: CreateTopicFormState,
  formData: FormData
): Promise<CreateTopicFormState> {
// function body
return {
  errors:{}
}
```

---

| Section   | 7\. Authentication with Next-Auth    |
| --------- | ------------------------------------ |
| Lesson    | 76\. Adding Form Validation with Zod |
| Timestamp | 8:56                                 |

To use Zod, first we need to import it and then create a schema like:

```javaScript
import { z } from 'zod';
 
const createTopicSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/^[a-z-]+$/, {
      message: 'Must be lowercase letters or dashes without spaces',
    }),
  description: z.string().min(10),
});
```

Then we can access for example form data and we can access the result in a nicelly formatted object using `result.error.flatten().fieldErrors`:

```javaScript
const result = createTopicSchema.safeParse({
    name: formData.get('name'),
    description: formData.get('description'),
  });
 
  if (!result.success) {
    console.log(result.error.flatten().fieldErrors);
  }
```

---

| Section   | 7\. Authentication with Next-Auth    |
| --------- | ------------------------------------ |
| Lesson    | 72\. Static Caching While Using Auth |
| Timestamp | 0:02                                 |

using Auth in the header element, automatically makes every single page in our project dynamic and makes them opt out from caching.

---

| Section   | 7\. Authentication with Next-Auth |
| --------- | --------------------------------- |
| Lesson    | 63\. Why Path Helpers?            |
| Timestamp | 1:41                              |

Path helper functions:

```javaScript
  const paths = {
    homePage() {
      return '/';
    },
    topicShowPath(slug: string) {
      return `/topics/${slug}`;
    },
    postCreatePath(slug: string) {
      return `/topics/${slug}/posts/new`;
    },
    postShowPath(slug: string, postId: 'string') {
      return `/topics/${slug}/posts/${postId}`;
    },
  };
```

---

| Section   | 7\. Authentication with Next-Auth |
| --------- | --------------------------------- |
| Lesson    | 62\. Upfront Design Process       |
| Timestamp | 2:57                              |

1. Home Page `('/')`
   1. Posts
   2. Topics
   3. Button for new Topics
2. Create topic Modal
   1. Topic Name
   2. Topic Description
   3. Submit button
3. View a topic ('/topics/\[slug\]')
   1. Topic Posts
   2. Topic Description
   3. Button to create a new post
4. Create a post ('/topics/\[slug\]/posts/new') Modal
   1. Title Field
   2. Content Field
   3. Submit Button
5. Post ('topics/\[slug\]/posts/\[postId\]')
   1. Post Content
   2. Post Comments

---

| Section   | 7\. Authentication with Next-Auth                |
| --------- | ------------------------------------------------ |
| Lesson    | 61\. Sign In, Sign out, and Checking Auth Status |
| Timestamp | 7:19                                             |

To check if a user is logged in using next/auth:

1. On a server component, all we need to do is call `const session = await auth();` and check if `session?.user` exists. This `session` variable then has the available information about the user that we can use and manipulate
2. On a client component, we need to wrap our app with a `SessionProvider` imported from `import { SessionProvider } from 'next-auth/react';` and then we need to call the hook `useSession()` hook to get access to the logged in user's session data

The objects returned from these two processes are slightly different so they need to be treated acordingly

---

| Section   | 6\. Understanding Next's Caching System |
| --------- | --------------------------------------- |
| Lesson    | 48\. When to Use Each Cache Control     |
| Timestamp | 5:02                                    |

We may want to entirely disable caching only when we are developping an App in which:

**We don't know when data changes** or **we expect the data to be different with every request** and **the user still expects to see up to date data**

---

| Section   | 6\. Understanding Next's Caching System |
| --------- | --------------------------------------- |
| Lesson    | 48\. When to Use Each Cache Control     |
| Timestamp | 2:27                                    |

To Disable Caching:

` export const revalidate = 0;`

Or

`export const dynamic = 'force-dynamic';`

---

| Section   | 6\. Understanding Next's Caching System |
| --------- | --------------------------------------- |
| Lesson    | 48\. When to Use Each Cache Control     |
| Timestamp | 1:55                                    |

When we want the cache to be invalidated on demand:

```javaScript
import { revalidatePath } from 'next/cache';
revalidatePath('/snippets');
```

---

| Section   | 6\. Understanding Next's Caching System |
| --------- | --------------------------------------- |
| Lesson    | 48\. When to Use Each Cache Control     |
| Timestamp | 1:32                                    |

To refresh a page cache after a certain amount of time when the next request comes in we need to set a **Segment Configuration Option**:

`export const revalidate = 3;`

---

| Section   | 6\. Understanding Next's Caching System |
| --------- | --------------------------------------- |
| Lesson    | 48\. When to Use Each Cache Control     |
| Timestamp | 0:36                                    |

Whenever our page is rendering with out-of-date data, there are several ways to control caching:

- Time based: Every X seconds, ignore the cached response and fetch new data
- On-Demand: forcibly purge a cached response
- Disable Caching: Don't do any caching at all

---

| Section   | 6\. Understanding Next's Caching System              |
| --------- | ---------------------------------------------------- |
| Lesson    | 47\. What Makes a Static or Dynamic Route in Next.js |
| Timestamp | 4:10                                                 |

Ways to make a route dynamic:

- Calling a 'dynamic function' or referencing a 'dynamic variable' when your route renders
  - `cookies.set()`
  - `cookies.delete()`
  - `useSearchParams()`
  - `searchParams prop`
- Assigning specific 'route segment config' options
  - `export const dynamic = 'force-dynamic'`
  - `export const revalidate = 0`
- Calling 'fetch' and opting out of caching of the response
  - `fetch('...', {next: {revalidate: 0 }});`
- Using a dynamic route
  - `/snippets/[id]/page.tsx`
  - `/snippets/[id]/edit/page.tsx`

---

| Section   | 6\. Understanding Next's Caching System |
| --------- | --------------------------------------- |
| Lesson    | 46\. The Full Route Cache System        |
| Timestamp | 0:12                                    |

- Data Cache: With NextJS responses to requests made with `fetch()` are **stored** and used across requests
- Router Cache: 'Soft' navigatio between routes are cached in the browser and then reused when a user revisits a page.
- Request memoization: Make two or more `GET` requests with `fetch()` during a user's request to your server? Only one `GET` is actually executed
- Full Route Cache: **At build time**, Next decides if your route is **static** or **dynamic**. if it is static, the page is rendered and the result is stored. In production, users are given this pre-rendered result.

---

| Section   | 5\. Server Forms with the UseFormState Hook  |
| --------- | -------------------------------------------- |
| Lesson    | 44\. Gotchas Around Error Handling in Nextjs |
| Timestamp | 9:18                                         |

NextJS `redirect()` method throws a specific type of error so we can never use it inside a `try`/`catch` block otherwise it will trigger the catch block whenever it's used.

---

| Section   | 4\. Server Actions in Great Detail          |
| --------- | ------------------------------------------- |
| Lesson    | 40\. Deleting a Record with a Server Action |
| Timestamp | 2:36                                        |

When we use the `bind()` method on a function, the first argument defines what the `this` keyword will be when that function is executed.

Any other arguments passed into the `bind()` method will become arguments passed into that function, in the specific order in which they were passed into the `bind` method for example:

`someFunction.bind(null, arg1, arg2)` this sets the `this` keyword for that function execution to `null` and sets the first and second arguments for `someFunction` to `arg1` and `arg2` so when that function is called it will implicitly receive those arguments. That means, even if we called that function like this: `someFunction()` it would in fact be called like this: `someFunction(arg1,arg2)` .

If we called the function with `someFunction(arg3)` , what would effectively happen would be called this: `someFunction(arg1,arg2,arg3)` . First the arguments passed into the `bind` method and then any arguments passed into the function when it was finally called.

---

| Section   | 4\. Server Actions in Great Detail              |
| --------- | ----------------------------------------------- |
| Lesson    | 36\. Server Actions in Nextjs Client Components |
| Timestamp | 3:54                                            |

Server components are not allowed to pass event handlers to client components. But they can pass server actions as props to client components

---

| Section   | 3\. Streaming Content with React Server Components    |
| --------- | ----------------------------------------------------- |
| Lesson    | 33\. Showing a Client Component in a Server Component |
| Timestamp | 9:48                                                  |

Client components are in fact rendered on the server one single time

---

| Section   | 3\. Streaming Content with React Server Components |
| --------- | -------------------------------------------------- |
| Lesson    | 28\. Custom Not Found Pages                        |
| Timestamp | 0:33                                               |

Special files in the Next.JS page router:

1. page.tsx
2. layout.tsx
   1. wraps up the currently displayed page
3. not-found.tsx
   1. displayed when we call the `notFound` function
4. loading.tsx
   1. displayed when a server component is fetching some data
5. error.tsx
   1. Displayed when an error occurs in a server component
6. route.tsx
   1. Defines API endpoints

---

| Section   | 3\. Streaming Content with React Server Components |
| --------- | -------------------------------------------------- |
| Lesson    | 26\. Adding Dynamic Paths                          |
| Timestamp | 4:24                                               |

when adding a dynamic route, whatever the name of the property we pass when creating the folder `[propertyName]` becomes the name of the `params` property that the `page.tsx` element will receive.

For example if our page router folder is `[id]` the page.tsx element will receive the following props from NextJS: `{ params: { id: value}, searchParams: {} }` with `value` beight whatever was passed as the url

---

| Section   | 3\. Streaming Content with React Server Components |
| --------- | -------------------------------------------------- |
| Lesson    | 24\. Server Components vs Client Components        |
| Timestamp | 8:28                                               |

When a page is called, Client components always get rendered once inside the server before being shipped to the client.

---

| Section   | 3\. Streaming Content with React Server Components |
| --------- | -------------------------------------------------- |
| Lesson    | 24\. Server Components vs Client Components        |
| Timestamp | 1:25                                               |

Client Components: The same kind of React components we are used to using. They run on the client

- Created by adding `'use client'` to the top of the file
- Can **not** show a **Server Component**, (one exeption)

Server Components: Components that run on the server:

- By default, all components are sercer components
- We can use async/await in them we don't need useState or useEffect to fetch data
- have a few limitations:
  - Can **not use** any **hooks**
  - Can **not** assign any **event handlers**

---

| Section   | 3\. Streaming Content with React Server Components |
| --------- | -------------------------------------------------- |
| Lesson    | 22\. Introducing Server Actions in Next.js         |
| Timestamp | 8:41                                               |

To programatically add navigation we use `import { redirect } from 'next/navigation';`

and then

---

| Section   | 3\. Streaming Content with React Server Components |
| --------- | -------------------------------------------------- |
| Lesson    | 22\. Introducing Server Actions in Next.js         |
| Timestamp | 1:12                                               |

**Server Actions**

- Server actions are the number one way to **change data** in a NextJS app
- They have super close integration with HTML forms
- Server actions are functions that will be called with the values a user entered into a form

---

| Section   | 12\. Supplement - TypeScript Primer |
| --------- | ----------------------------------- |
| Lesson    | 191\. General Plan with Interfaces  |
| Timestamp | 1:13                                |

Global strategy for reusable code with Typescript:

1. Create functions that accept arguments that are typed with interfaces
2. Objects and classes can decide to 'implement' a given interface to work with a function that requires it

---

| Section   | 12\. Supplement - TypeScript Primer |
| --------- | ----------------------------------- |
| Lesson    | 185\. Interfaces                    |
| Timestamp | 1:02                                |

Interfaces:

Creates a new type, describing the property names and value types of an object.

We can use a single interface to describe the properties of very different objects.

---

| Section   | 12\. Supplement - TypeScript Primer |
| --------- | ----------------------------------- |
| Lesson    | 182\. Tuples in TypeScript          |
| Timestamp | 0:24                                |

Tuple: an Array-like structure where each element represents some property of a record (this is normally where we use objects) for example, something that would be described as this object:

```javaScript
{
  color: 'brown',
  carbonated: true,
  sugar: 40
}
```

When represented in an array like structure would look like this. The order is really important here. This is a tuple

```javaScript
['brown', true, 40]
```

---

| Section   | 12\. Supplement - TypeScript Primer |
| --------- | ----------------------------------- |
| Lesson    | 181\. When to Use Typed Arrays      |
| Timestamp | 0:45                                |

We use typed arrays in javascript every time we want to represent a collection of different records with some arbitrary sort order

---

| Section   | 12\. Supplement - TypeScript Primer |
| --------- | ----------------------------------- |
| Lesson    | 178\. Arrays in TypeScript          |
| Timestamp | 3:12                                |

With arrays, we normally only need to annotate them when we initialize a variable with an empty array.

---

| Section   | 12\. Supplement - TypeScript Primer |
| --------- | ----------------------------------- |
| Lesson    | 175\. Void and Never                |
| Timestamp | 1:37                                |

We use the `never` type annotation whenever a function is supposed to never finish execution like when throwing an error for example.

When an error is thrown, javascript never reaches the end of the function so the function technically never returns anything.

On the other hand, we only annotate a function with `never` when we really expect a function to **never** return anything.

Example: If a function normally retuns a `string` unless there is an error, we should annotate the function with a type of `string`.

---

| Section   | 12\. Supplement - TypeScript Primer        |
| --------- | ------------------------------------------ |
| Lesson    | 172\. More on Annotations Around Functions |
| Timestamp | 2:22                                       |

The `void` annotation type is used whenever a function is not supposed to return any value.

Technically, functions typed as returning `void` can return `undefined` or `null`.

---

| Section   | 12\. Supplement - TypeScript Primer        |
| --------- | ------------------------------------------ |
| Lesson    | 172\. More on Annotations Around Functions |
| Timestamp | 1:39                                       |

The goal with type annotations for functions is to help typescript to know the type of arguments that a function expects as well as the type of values a function returns.

Typescript will normally try to infer what type of value a function returns but will not try to infer what type of value the arguments are.

Even though we get type inference from the returned values, we are shouldn't use it because it makes our life harder in finding problems with functions not returning values

---

| Section   | 12\. Supplement - TypeScript Primer |
| --------- | ----------------------------------- |
| Lesson    | 168\. The "Any" Type                |
| Timestamp | 6:07                                |

`any` type:

- It's a type just like `string` or `boolean` are
- Means TS has no idea what this is and it can't check for correct property references
- **Avoid variables with 'any' at all costs**

---

| Section   | 12\. Supplement - TypeScript Primer |
| --------- | ----------------------------------- |
| Lesson    | 167\. Understanding Inference       |
| Timestamp | 3:41                                |

Generally we want to rely on type inference as much as possible and we will use type annotations only when:

- When we declare a variable on one line then initialize it later
- When we want a variable to have a type that can't be inferred
- When a function returns the 'any' type and we need to clarify the value

---

| Section   | 12\. Supplement - TypeScript Primer |
| --------- | ----------------------------------- |
| Lesson    | 167\. Understanding Inference       |
| Timestamp | 1:33                                |

When declaring a variable, if a declaration and initialization are on the same line, Typescript will figure out the type of the variable for us

---

| Section   | 12\. Supplement - TypeScript Primer |
| --------- | ----------------------------------- |
| Lesson    | 165\. Object Literal Annotations    |
| Timestamp | 6:06                                |

When annotating the type of an object literal, we separate different properties with a semi-colon not a colon like so:

```javaScript
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};
```

---

| Section   | 12\. Supplement - TypeScript Primer  |
| --------- | ------------------------------------ |
| Lesson    | 163\. Type Annotations and Inference |
| Timestamp | 0:56                                 |

Type annotation vs Type inference:

- Type Annotation: Code we add to tell Typescript what type of value a variable will refer to
- Type Inference: Typescript tries to figure out what type of value a variable refers to

---

| Section   | 12\. Supplement - TypeScript Primer |
| --------- | ----------------------------------- |
| Lesson    | 162\. Where Do We Use Types         |
| Timestamp | 0:33                                |

Where do we use Types? **Everywhere!**

Every variable will get a type assigned to it.

---

| Section   | 12\. Supplement - TypeScript Primer |
| --------- | ----------------------------------- |
| Lesson    | 160\. More on Types                 |
| Timestamp | 5:07                                |

Types are used by the Typescript Compiler to analyze our code for errors

Types allow other engeneers to understand what values are flowing around our codebase

---

| Section   | 12\. Supplement - TypeScript Primer |
| --------- | ----------------------------------- |
| Lesson    | 160\. More on Types                 |
| Timestamp | 1:58                                |

Types

- Primitive Types:
  - number
  - boolean
  - void
  - undefined
  - string
  - symbol
  - null
- Object Types:
  - function
  - array
  - object
  - class

---

| Section   | 12\. Supplement - TypeScript Primer |
| --------- | ----------------------------------- |
| Lesson    | 160\. More on Types                 |
| Timestamp | 1:46                                |

`interface` defines a **new type:**

```javaScript
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
```

---

| Section   | 12\. Supplement - TypeScript Primer |
| --------- | ----------------------------------- |
| Lesson    | 159\. Types                         |
| Timestamp | 1:23                                |

A `type` is an easy way to refer to the different properties + functions that a value has

By defining something as a `string` for example we are defining the value with everything that comes with it, every method a string has in javascript like `.at()` `.split()`, etc. A type anotation includes all of that.

The type of a value is a shortcut to refer to **every property and method** that a value has.

**Every value in typesctript has a type!**

---

| Section   | 12\. Supplement - TypeScript Primer |
| --------- | ----------------------------------- |
| Lesson    | 152\. TypeScript Overview           |
| Timestamp | 6:19                                |

Typescript is really only a helper to help us catch errors

---

| Section   | 1\. Get Started Here!            |
| --------- | -------------------------------- |
| Lesson    | 11\. More on the Image Component |
| Timestamp | 5:56                             |

Options for image sizing:

1. If using a **local** image, the dimensions are taken from the imported image
2. If we assign a height and a width to the image component that will work as well
3. If we assign a fill attribute, the image will expand to fill up the parent element

---

| Section   | 1\. Get Started Here!             |
| --------- | --------------------------------- |
| Lesson    | 8\. Absolute Path Import Shortcut |
| Timestamp | 1:38                              |

In NextJS default instalation the `@` symbol is a shortcut to our `src` directory

---

| Section   | 1\. Get Started Here!  |
| --------- | ---------------------- |
| Lesson    | 3\. File-Based Routing |
| Timestamp | 4:11                   |

Every `page.jsx` has to have a default export of a react component. The name of the component is only used for debugging purposes.

---
