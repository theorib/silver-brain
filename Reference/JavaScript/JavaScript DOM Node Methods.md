Tags: #javascript #dom #nodes #traversal #methods #parent #child #sibling #properties #manipulation #programming

# JavaScript DOM Node Methods

A comprehensive guide to DOM node methods for traversing, manipulating, and inspecting the document structure.

## Overview

DOM nodes provide various methods for navigating and manipulating the document tree structure. This guide covers parent-child relationships, sibling navigation, node inspection, and common manipulation patterns.

## Node Navigation

### Parent Node Navigation

```javascript
const h1 = document.querySelector('h1');

// Returns the parent node
console.log(h1.parentNode); // <header>

// Returns the parent element (usually same as parentNode)
console.log(h1.parentElement);

// Returns the root node (normally document)
console.log(h1.getRootNode());
```

**Key Differences:**
- `parentNode`: Returns any type of parent node
- `parentElement`: Returns only element nodes (null if parent is not an element)
- `getRootNode()`: Returns the document root

### Child Node Navigation

```javascript
const ul = document.querySelector('ul');

// Returns a NodeList of all child nodes (including text nodes)
console.log(ul.childNodes);

// Returns a live HTML collection of all child elements only
console.log(ul.children);

// First and last child nodes (any type)
console.log(ul.firstChild);
console.log(ul.lastChild);

// First and last child elements only
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);
```

**Important Distinctions:**
- **Nodes**: Include text nodes, comment nodes, element nodes
- **Elements**: Only HTML element nodes
- **Live collections**: Update automatically when DOM changes

### Sibling Navigation

```javascript
const h1 = document.querySelector('h1');

// Navigate to sibling nodes (any type)
console.log(h1.nextSibling);
console.log(h1.previousSibling);

// Navigate to sibling elements only
console.log(h1.nextElementSibling);
console.log(h1.previousElementSibling);
```

**Best Practice:** Use element-specific methods (`nextElementSibling`, `previousElementSibling`) to avoid text nodes and whitespace.

## Node Manipulation Methods

### Insertion Methods

```javascript
const ul = document.querySelector('ul');
const li = document.createElement('li');

// Insert nodes before the element
h1.before(newElement);

// Insert nodes after the element  
h1.after(newElement);

// Insert nodes as first child
ul.prepend(li);

// Insert nodes as last child
ul.append(li);

// Legacy method - append single child
ul.appendChild(li);
```

### Replacement Methods

```javascript
// Replace all children with new nodes
ul.replaceChildren(li);

// Replace the element itself
ul.replaceWith(newElement);

// Legacy method - replace specific child
ul.replaceChild(newChild, oldChild);
```

### Removal Methods

```javascript
// Modern removal
element.remove();

// Remove specific child (legacy)
ul.removeChild(li);
```

## Node Inspection Methods

### Node Checking Methods

```javascript
const ul = document.querySelector('ul');
const li = document.querySelector('li');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');

// Check if node has child nodes
console.log(ul.hasChildNodes()); // Boolean

// Check if two nodes have same properties
console.log(h1.isEqualNode(h2)); // Boolean

// Check if two variables reference the same node
console.log(h1.isSameNode(h2)); // Boolean

// Check if a node contains another node
console.log(ul.contains(li)); // Boolean

// Check if node is connected to document
console.log(h1.isConnected); // Boolean

// Compare document position of two nodes
console.log(h1.compareDocumentPosition(h2)); // Number
```

### Document Position Constants

The `compareDocumentPosition()` method returns a bitmask:
- `1`: Nodes are in different documents
- `2`: Node B precedes Node A
- `4`: Node A precedes Node B  
- `8`: Node B contains Node A
- `16`: Node A contains Node B
- `32`: Implementation specific

### Node Cloning

```javascript
// Clone a node
const shallowClone = h1.cloneNode(false); // Only the element
const deepClone = h1.cloneNode(true);     // Element + all descendants
```

**Parameters:**
- `false`: Shallow clone (element only)
- `true`: Deep clone (element + all children)

## Node Properties

### Basic Node Information

```javascript
const h1 = document.querySelector('h1');

// Node name (tag name in uppercase)
console.log(h1.nodeName); // "H1"

// Node type (1 = Element, 3 = Text, etc.)
console.log(h1.nodeType); // 1

// Node value (null for elements, text for text nodes)
console.log(h1.nodeValue); // null

// Text content of node and descendants
console.log(h1.textContent); // "Text content"

// Count of child elements
console.log(h1.childElementCount); // Number
```

### Node Type Constants

| Type | Value | Description |
|------|-------|-------------|
| `Node.ELEMENT_NODE` | 1 | Element node |
| `Node.TEXT_NODE` | 3 | Text node |
| `Node.COMMENT_NODE` | 8 | Comment node |
| `Node.DOCUMENT_NODE` | 9 | Document node |
| `Node.DOCUMENT_FRAGMENT_NODE` | 11 | DocumentFragment |

## Practical Examples

### Finding All Sibling Elements

```javascript
function getAllSiblings(element) {
  const siblings = [];
  const parent = element.parentElement;
  
  if (!parent) return siblings;
  
  for (let sibling of parent.children) {
    if (sibling !== element) {
      siblings.push(sibling);
    }
  }
  
  return siblings;
}

// Usage
const h1 = document.querySelector('h1');
const siblings = getAllSiblings(h1);
```

### Walking the DOM Tree

```javascript
function walkDOM(node, callback) {
  callback(node);
  
  for (let child of node.childNodes) {
    if (child.nodeType === Node.ELEMENT_NODE) {
      walkDOM(child, callback);
    }
  }
}

// Usage - log all element nodes
walkDOM(document.body, (node) => {
  if (node.nodeType === Node.ELEMENT_NODE) {
    console.log(node.tagName);
  }
});
```

### Finding Common Ancestor

```javascript
function findCommonAncestor(node1, node2) {
  const ancestors1 = [];
  let current = node1;
  
  // Collect all ancestors of node1
  while (current) {
    ancestors1.push(current);
    current = current.parentElement;
  }
  
  // Walk up from node2 until we find a common ancestor
  current = node2;
  while (current) {
    if (ancestors1.includes(current)) {
      return current;
    }
    current = current.parentElement;
  }
  
  return null;
}
```

### Node Insertion Helper

```javascript
function insertAtPosition(newNode, referenceNode, position) {
  switch (position) {
    case 'before':
      referenceNode.before(newNode);
      break;
    case 'after':
      referenceNode.after(newNode);
      break;
    case 'prepend':
      referenceNode.prepend(newNode);
      break;
    case 'append':
      referenceNode.append(newNode);
      break;
    default:
      throw new Error('Invalid position');
  }
}
```

## Advanced Navigation Techniques

### Finding Specific Ancestor

```javascript
function findAncestorByTag(element, tagName) {
  let current = element.parentElement;
  
  while (current) {
    if (current.tagName.toLowerCase() === tagName.toLowerCase()) {
      return current;
    }
    current = current.parentElement;
  }
  
  return null;
}

// Usage
const listItem = document.querySelector('li');
const list = findAncestorByTag(listItem, 'ul');
```

### Getting Node Path

```javascript
function getNodePath(element) {
  const path = [];
  let current = element;
  
  while (current && current !== document) {
    let selector = current.tagName.toLowerCase();
    
    if (current.id) {
      selector += `#${current.id}`;
    } else if (current.className) {
      selector += `.${current.className.split(' ').join('.')}`;
    }
    
    path.unshift(selector);
    current = current.parentElement;
  }
  
  return path.join(' > ');
}
```

### Node Comparison Utilities

```javascript
// Check if node is descendant of another
function isDescendant(child, parent) {
  return parent.contains(child) && child !== parent;
}

// Check if nodes are siblings
function areSiblings(node1, node2) {
  return node1.parentElement === node2.parentElement && 
         node1 !== node2;
}

// Get node depth in document
function getNodeDepth(node) {
  let depth = 0;
  let current = node;
  
  while (current.parentElement) {
    depth++;
    current = current.parentElement;
  }
  
  return depth;
}
```

## Best Practices

### Performance Considerations

1. **Cache parent references**:
```javascript
// Good
const parent = element.parentElement;
for (let child of parent.children) {
  // Work with child
}

// Avoid
for (let child of element.parentElement.children) {
  // Repeated property access
}
```

2. **Use element-specific methods**:
```javascript
// Preferred - skips text nodes
element.nextElementSibling

// Use cautiously - includes text nodes  
element.nextSibling
```

3. **Batch DOM modifications**:
```javascript
// Create fragment for multiple insertions
const fragment = document.createDocumentFragment();
elements.forEach(el => fragment.appendChild(el));
parent.appendChild(fragment);
```

### Error Prevention

```javascript
// Always check for existence
function safelyGetParent(element) {
  return element && element.parentElement;
}

// Validate node types
function isElementNode(node) {
  return node && node.nodeType === Node.ELEMENT_NODE;
}

// Safe node comparison
function safeCompareNodes(node1, node2) {
  if (!node1 || !node2) return false;
  return node1.isSameNode(node2);
}
```

### Memory Management

```javascript
// Clean up references when removing nodes
function removeNodeSafely(node) {
  // Remove event listeners
  const clone = node.cloneNode(false);
  node.parentElement.replaceChild(clone, node);
  
  // Or use remove() for modern browsers
  node.remove();
}
```

## Common Troubleshooting

### Text Node Issues

```javascript
// Problem: Unexpected text nodes from whitespace
const firstChild = element.firstChild; // Might be text node

// Solution: Use element-specific methods
const firstElement = element.firstElementChild; // Always element or null
```

### Live Collection Changes

```javascript
// Problem: Collection changes during iteration
const children = parent.children; // Live collection
for (let i = 0; i < children.length; i++) {
  parent.removeChild(children[i]); // Collection shrinks!
}

// Solution: Convert to static array
const childrenArray = Array.from(parent.children);
childrenArray.forEach(child => parent.removeChild(child));
```

### Cross-frame Comparison

```javascript
// Problem: Comparing nodes from different documents
if (node1.ownerDocument !== node2.ownerDocument) {
  // Nodes are from different documents
  // Cannot reliably compare or move between them
}
```