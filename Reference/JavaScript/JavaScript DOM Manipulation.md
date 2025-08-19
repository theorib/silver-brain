Tags: #javascript #dom #manipulation #selecting #creating #inserting #deleting #html #web-development #programming

# JavaScript DOM Manipulation

A comprehensive guide to selecting, creating, inserting, and deleting DOM elements using JavaScript.

## Overview

The Document Object Model (DOM) provides a way to interact with and manipulate HTML elements using JavaScript. This guide covers the fundamental methods for working with DOM elements, from basic selection to complex manipulation operations.

## Document Selection

### Selecting the Document

```javascript
// Selecting the whole document - always need .documentElement
console.log(document.documentElement);

// Selecting the Head
console.log(document.head);

// Selecting the Body
console.log(document.body);
```

**Important:** When selecting the whole document, always use `document.documentElement` as writing only `document` doesn't actually select the right node.

## Element Selection Methods

### Query Selectors (Modern Approach)

```javascript
// Returns the first element that matches this selector
const header = document.querySelector('.header');

// Selecting multiple elements - returns an iterable NodeList
const allSections = document.querySelectorAll('.section');
```

**Key Features:**
- Available on `document` and all child elements
- Can be used to select child elements of specific elements
- Uses CSS selector syntax
- `querySelector` returns first match, `querySelectorAll` returns all matches

### Traditional Selection Methods

```javascript
// Selecting by ID (no # needed)
document.getElementById('section--1');

// Selecting by tag name - returns HTML collection
const allButtons = document.getElementsByTagName('button');

// Selecting by class name - returns live HTML collection
const allSections2 = document.getElementsByClassName('section');
```

### NodeList vs HTML Collection

**NodeList** (from `querySelectorAll`):
- Static collection - doesn't update when DOM changes
- Has array-like methods (forEach, etc.)

**HTML Collection** (from `getElementsByTagName`, `getElementsByClassName`):
- Live collection - automatically updates when DOM changes
- More performant for dynamic content
- Limited array methods

## Creating and Inserting Elements

### Creating Elements

```javascript
// Create a new DOM element
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = `We use cookies for improved functionality and analytics 
  <button class='btn btn--close-cookie'>Got it!</button>`;
```

### Insertion Methods

#### Parent-Child Insertion

```javascript
// Prepend - adds as first child
header.prepend(message);

// Append - adds as last child
header.append(message);

// Clone element for multiple insertions
header.append(message.cloneNode(true));
```

#### Sibling Insertion

```javascript
// Insert before element as sibling
header.before(message);

// Insert after element as sibling
header.after(message);
```

#### Adjacent HTML Insertion

```javascript
// Insert HTML string at specific position
document.querySelector('.header__title')
  .insertAdjacentHTML('afterbegin', `<h1>Canis!!</h1>`);

// Using created element with insertAdjacentHTML
header.insertAdjacentHTML('beforebegin', message.outerHTML);
```

**Position Values for `insertAdjacentHTML`:**
- `'beforebegin'` - Before the element
- `'afterbegin'` - As first child inside the element
- `'beforeend'` - As last child inside the element
- `'afterend'` - After the element

### Important Notes

- **Element uniqueness**: A DOM element can only exist in one place at a time
- **cloneNode()**: Use `cloneNode(true)` to create copies with all descendants
- **String vs Object**: `insertAdjacentHTML` expects strings, not DOM objects
- **outerHTML**: Use `.outerHTML` to convert DOM elements to HTML strings

## Deleting Elements

### Modern Deletion

```javascript
// Remove element directly
message.remove();
```

### Legacy Deletion

```javascript
// Old method - required traversing to parent
message.parentElement.removeChild(message);
```

## Practical Examples

### Dynamic Content Creation

```javascript
// Create and insert a notification
function createNotification(text, type = 'info') {
  const notification = document.createElement('div');
  notification.classList.add('notification', `notification--${type}`);
  notification.innerHTML = `
    <span>${text}</span>
    <button class="notification__close">&times;</button>
  `;
  
  // Insert at top of body
  document.body.prepend(notification);
  
  // Add close functionality
  notification.querySelector('.notification__close')
    .addEventListener('click', () => notification.remove());
  
  return notification;
}
```

### Element Replacement

```javascript
// Replace an element with a new one
function replaceElement(oldElement, newElement) {
  oldElement.parentElement.replaceChild(newElement, oldElement);
}
```

### Bulk Element Creation

```javascript
// Create multiple elements efficiently
function createList(items, className) {
  const list = document.createElement('ul');
  list.className = className;
  
  items.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    list.appendChild(listItem);
  });
  
  return list;
}

// Usage
const fruits = ['Apple', 'Banana', 'Orange'];
const fruitList = createList(fruits, 'fruit-list');
document.body.appendChild(fruitList);
```

## Best Practices

### Performance Considerations

1. **Use DocumentFragments for multiple insertions**:
```javascript
const fragment = document.createDocumentFragment();
items.forEach(item => {
  const element = document.createElement('div');
  element.textContent = item;
  fragment.appendChild(element);
});
container.appendChild(fragment); // Single DOM update
```

2. **Cache element references**:
```javascript
// Good - cache the element
const container = document.querySelector('.container');
for (let i = 0; i < 100; i++) {
  const div = document.createElement('div');
  container.appendChild(div);
}

// Avoid - repeated queries
for (let i = 0; i < 100; i++) {
  const div = document.createElement('div');
  document.querySelector('.container').appendChild(div); // Inefficient
}
```

### Error Handling

```javascript
// Safe element creation with error handling
function safeCreateElement(tag, options = {}) {
  try {
    const element = document.createElement(tag);
    
    if (options.className) element.className = options.className;
    if (options.id) element.id = options.id;
    if (options.innerHTML) element.innerHTML = options.innerHTML;
    if (options.textContent) element.textContent = options.textContent;
    
    return element;
  } catch (error) {
    console.error('Error creating element:', error);
    return null;
  }
}
```

### Accessibility Considerations

```javascript
// Create accessible elements
function createAccessibleButton(text, onClick) {
  const button = document.createElement('button');
  button.textContent = text;
  button.setAttribute('type', 'button');
  button.addEventListener('click', onClick);
  
  // Add ARIA attributes if needed
  if (!text.trim()) {
    button.setAttribute('aria-label', 'Action button');
  }
  
  return button;
}
```

## Common Patterns

### Modal Creation

```javascript
function createModal(content) {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal__header">
      <button class="modal__close">&times;</button>
    </div>
    <div class="modal__content">${content}</div>
  `;
  
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
  
  // Close functionality
  const closeModal = () => overlay.remove();
  overlay.querySelector('.modal__close').addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });
  
  return { modal, overlay, close: closeModal };
}
```

### Dynamic Table Creation

```javascript
function createTable(data, headers) {
  const table = document.createElement('table');
  
  // Create header
  if (headers) {
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    
    headers.forEach(header => {
      const th = document.createElement('th');
      th.textContent = header;
      headerRow.appendChild(th);
    });
    
    thead.appendChild(headerRow);
    table.appendChild(thead);
  }
  
  // Create body
  const tbody = document.createElement('tbody');
  data.forEach(row => {
    const tr = document.createElement('tr');
    
    Object.values(row).forEach(value => {
      const td = document.createElement('td');
      td.textContent = value;
      tr.appendChild(td);
    });
    
    tbody.appendChild(tr);
  });
  
  table.appendChild(tbody);
  return table;
}
```

## Troubleshooting Common Issues

### Element Not Found

```javascript
// Always check if element exists before manipulation
const element = document.querySelector('.my-element');
if (element) {
  element.style.display = 'none';
} else {
  console.warn('Element not found');
}
```

### Timing Issues

```javascript
// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  // Safe to manipulate DOM here
  const elements = document.querySelectorAll('.dynamic-content');
  // ... manipulation code
});
```

### Memory Leaks

```javascript
// Clean up event listeners when removing elements
function removeElementSafely(element) {
  // Remove event listeners if possible
  element.removeEventListener('click', handleClick);
  
  // Clear references
  element.innerHTML = '';
  
  // Remove from DOM
  element.remove();
}
```