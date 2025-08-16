'use strict';

const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const ul = document.querySelector('ul');
const li = document.querySelector('li');
// Going Upwards: selecting parent elements

console.log(`//////////////////////////`);

/*
 *********************
 * Going Upwards: Parent nodes
 */

// Returns the parent node
console.log(`parentNode`, h1.parentNode); // <header>

// Returns the parent element
console.log('parentElement', h1.parentElement);

// Returns the Root Node (normally document?)
console.log(`getRootNode`, h1.getRootNode());

console.log(`//////////////////////////`);

/*
 *********************
 * Going downwards: child nodes
 */

// Returns a node list of all child nodes
console.log('childNodes', ul.childNodes);

// Returns a live HTML collection of all the child elements
console.log('children', ul.children);

//Returns the first child Node
console.log('firstChild', ul.firstChild);

//Returns the first element that is a child, null otherwise
console.log('firstElementChild', ul.firstElementChild);

//Returns the last child Node
console.log('lastChild', h1.lastChild);

//Returns the last element that is a child, null otherwise
console.log('lastElementChild', h1.lastElementChild);

console.log(`//////////////////////////`);

/*
 *********************
 * Going Sideways: Sibling nodes
 */

// Returns the next sibling
console.log('nextSibling', h1.nextSibling);

// Returns the previous sibling
console.log('previousSibling', h1.previousSibling);

console.log(`//////////////////////////`);

/*
 *********************
 * Going Sideways: Sibling nodes
 */

//Inserts nodes just before node, while replacing strings in nodes with equivalent Text nodes.
console.log('before', h1.before());

//Inserts nodes just after node, while replacing strings in nodes with equivalent Text nodes.
console.log('before', h1.after());

//Inserts nodes before the first child of node, while replacing strings in nodes with equivalent Text nodes.
console.log('prepend', ul.prepend());

//Inserts nodes after the last child of node, while replacing strings in nodes with equivalent Text nodes.
console.log('append', ul.append());

// ???
console.log('appendChild', ul.appendChild(li));

// ???
console.log('removeChild', ul.removeChild(li));

// ???
// console.log('replaceChild', ul.replaceChild(li));

// ???
// console.log('replaceChild', ul.insertBefore(li, li));

//Replace all children of node with nodes, while replacing strings in nodes with equivalent Text nodes.
console.log('replaceChildren', ul.replaceChildren(li));

//Replaces node with nodes, while replacing strings in nodes with equivalent Text nodes.
console.log('replaceWith', ul.replaceWith(li));

console.log(`//////////////////////////`);

/*
 *********************
 * Attributes
 */

// console.log('setAttributeNode', h1.setAttributeNode());
// console.log('getAttributeNode', h1.getAttributeNode());
// console.log('removeAttributeNode', h1.removeAttributeNode());

console.log(`//////////////////////////`);

/*
 *********************
 *  Making Checks
 */

// Returns true if a node has child nodes
console.log('hasChildNodes', ul.hasChildNodes());

// Returns true wether a nod and another node have the same properties
console.log('isEqualNode', h1.isEqualNode(h2));

// Returns true wether a node is the same node??
console.log('isSameNode', h1.isSameNode(h2));

// Returns true if a node contains another node
console.log('contains', ul.contains(li));

// Returns true if a node is connected to other nodes???
console.log('isConnected', h1.isConnected);

// ???
console.log('compareDocumentPosition', h1.compareDocumentPosition(h2));

console.log(`//////////////////////////`);

/*
 *********************
 *
 */

// Returns a copy of a node. If deep is set to true the copy will also include the nodes descendants
console.log(h1.cloneNode(true));

/*
 *********************
 * Properties
 */

console.log('nodeName', h1.nodeName);
console.log('nodeType', h1.nodeType);
console.log('nodeValue', h1.nodeValue);
console.log('textContent', h1.textContent);
console.log('childElementCount', h1.childElementCount);
