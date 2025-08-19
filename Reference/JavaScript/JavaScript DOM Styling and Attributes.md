Tags: #javascript #dom #styling #css #attributes #classes #data-attributes #computed-styles #css-variables #programming

# JavaScript DOM Styling and Attributes

A comprehensive guide to manipulating CSS styles, HTML attributes, and class lists using JavaScript.

## Overview

JavaScript provides powerful methods for dynamically controlling element appearance and behaviour through styles, attributes, and CSS classes. This guide covers inline styling, computed styles, attribute manipulation, and CSS class management.

## CSS Styling

### Inline Styles

```javascript
const message = document.querySelector('.message');

// Creating inline styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
message.style.color = 'white';
message.style.padding = '20px';
```

**Key Points:**
- Properties use camelCase (`backgroundColor` not `background-color`)
- Values are strings
- Creates inline styles (highest specificity)
- Only works for setting styles, not reading external CSS

### Reading Inline Styles

```javascript
// Reading inline styles (only works for styles set via JavaScript)
console.log(message.style.backgroundColor); // Works if set inline
console.log(message.style.height); // Empty string if not set inline
```

**Limitation:** The `.style` property only returns inline styles, not CSS file styles.

### Computed Styles

```javascript
// Get all computed styles (including CSS file styles)
const computedStyles = getComputedStyle(message);

console.log(computedStyles.height); // Actual computed height
console.log(computedStyles.width);  // Actual computed width
console.log(computedStyles.color);  // Computed colour value

// Parse and modify computed values
const currentHeight = Number.parseFloat(computedStyles.height, 10);
message.style.height = currentHeight + 30 + 'px';
```

**Benefits of `getComputedStyle()`:**
- Returns actual rendered values
- Includes styles from CSS files
- Accounts for inheritance and cascade
- Shows final computed values

### CSS Custom Properties (Variables)

```javascript
// Reading CSS variables
const primaryColor = getComputedStyle(document.documentElement)
  .getPropertyValue('--color-primary');

// Setting CSS variables
document.documentElement.style.setProperty('--color-primary', 'orange');
document.documentElement.style.setProperty('--main-padding', '20px');

// Setting multiple CSS variables
const cssVars = {
  '--primary-color': '#3498db',
  '--secondary-color': '#2ecc71',
  '--font-size': '16px'
};

Object.entries(cssVars).forEach(([property, value]) => {
  document.documentElement.style.setProperty(property, value);
});
```

## HTML Attributes

### Standard Attributes

```javascript
const logo = document.querySelector('.nav__logo');

// Getting standard attributes (direct property access)
console.log(logo.alt);       // Alt text
console.log(logo.className); // CSS classes
console.log(logo.id);        // Element ID

// Setting standard attributes
logo.alt = 'Beautiful minimalist logo';
logo.id = 'main-logo';
```

### URL Attributes (Special Behaviour)

```javascript
const logo = document.querySelector('img');
const link = document.querySelector('a');

// Direct property access returns absolute URL
console.log(logo.src);  // "http://example.com/images/logo.png"
console.log(link.href); // "http://example.com/page.html"

// getAttribute() returns original attribute value
console.log(logo.getAttribute('src'));  // "images/logo.png"
console.log(link.getAttribute('href')); // "page.html"
```

### Custom Attributes

```javascript
// Setting custom attributes
logo.setAttribute('company', 'Bankist');
logo.setAttribute('designer', 'John Doe');

// Getting custom attributes (only works with getAttribute)
console.log(logo.getAttribute('company'));  // "Bankist"
console.log(logo.getAttribute('designer')); // "John Doe"

// Listing all attributes
console.log(logo.getAttributeNames()); // Array of attribute names

// Removing attributes
logo.removeAttribute('company');

// Checking if attribute exists
if (logo.hasAttribute('designer')) {
  console.log('Designer attribute exists');
}
```

### Data Attributes

```javascript
// HTML: <button class="btn--inline" data-go-to="1" data-version-number="2.1">

const btn = document.querySelector('.btn--inline');

// Accessing data attributes via dataset
console.log(btn.dataset.goTo);           // "1" (camelCase conversion)
console.log(btn.dataset.versionNumber);  // "2.1" (camelCase conversion)

// Setting data attributes
btn.dataset.userId = '12345';
btn.dataset.actionType = 'submit';

// Data attributes return strings - convert if needed
const pageNumber = Number(btn.dataset.goTo);

// Selecting elements by data attributes
const dataButton = document.querySelector('[data-go-to]');
const specificButton = document.querySelector('[data-go-to="1"]');
```

**Data Attribute Conventions:**
- Use kebab-case in HTML: `data-go-to`
- Access via camelCase in JavaScript: `dataset.goTo`
- Always returns strings - convert types as needed

## CSS Classes

### Class Manipulation

```javascript
const logo = document.querySelector('.nav__logo');

// Adding classes
logo.classList.add('highlight');
logo.classList.add('active', 'visible'); // Multiple classes

// Removing classes
logo.classList.remove('highlight');
logo.classList.remove('active', 'visible'); // Multiple classes

// Toggling classes
logo.classList.toggle('hidden'); // Add if not present, remove if present

// Checking for classes
if (logo.classList.contains('active')) { // Note: contains, not includes
  console.log('Logo is active');
}

// Getting all classes as array
const classes = Array.from(logo.classList);
```

### Class Manipulation Patterns

```javascript
// Conditional class adding
function setActiveState(element, isActive) {
  if (isActive) {
    element.classList.add('active');
  } else {
    element.classList.remove('active');
  }
}

// Better approach with toggle
function setActiveState(element, isActive) {
  element.classList.toggle('active', isActive);
}

// Replace one class with another
function replaceClass(element, oldClass, newClass) {
  element.classList.remove(oldClass);
  element.classList.add(newClass);
}

// Toggle between two classes
function toggleBetweenClasses(element, class1, class2) {
  if (element.classList.contains(class1)) {
    element.classList.remove(class1);
    element.classList.add(class2);
  } else {
    element.classList.remove(class2);
    element.classList.add(class1);
  }
}
```

## Practical Examples

### Theme Switching

```javascript
class ThemeManager {
  constructor() {
    this.currentTheme = 'light';
    this.root = document.documentElement;
  }
  
  setTheme(theme) {
    const themes = {
      light: {
        '--bg-color': '#ffffff',
        '--text-color': '#333333',
        '--accent-color': '#007bff'
      },
      dark: {
        '--bg-color': '#1a1a1a',
        '--text-color': '#ffffff',
        '--accent-color': '#66b3ff'
      }
    };
    
    if (themes[theme]) {
      Object.entries(themes[theme]).forEach(([property, value]) => {
        this.root.style.setProperty(property, value);
      });
      
      this.root.setAttribute('data-theme', theme);
      this.currentTheme = theme;
    }
  }
  
  toggleTheme() {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }
}
```

### Dynamic Styling

```javascript
// Create a utility for dynamic styling
class StyleManager {
  constructor(element) {
    this.element = element;
  }
  
  // Set multiple styles at once
  setStyles(styleObject) {
    Object.entries(styleObject).forEach(([property, value]) => {
      this.element.style[property] = value;
    });
    return this;
  }
  
  // Animate property changes
  animateStyle(property, targetValue, duration = 300) {
    const startValue = parseFloat(getComputedStyle(this.element)[property]);
    const change = parseFloat(targetValue) - startValue;
    const startTime = performance.now();
    
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const currentValue = startValue + (change * progress);
      this.element.style[property] = currentValue + 'px';
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
    return this;
  }
  
  // Reset all inline styles
  resetStyles() {
    this.element.removeAttribute('style');
    return this;
  }
}

// Usage
const manager = new StyleManager(document.querySelector('.box'));
manager.setStyles({
  width: '200px',
  height: '200px',
  backgroundColor: 'blue'
}).animateStyle('width', 300);
```

### Responsive Class Management

```javascript
class ResponsiveManager {
  constructor() {
    this.breakpoints = {
      mobile: 768,
      tablet: 1024,
      desktop: 1200
    };
    
    this.init();
  }
  
  init() {
    this.updateClasses();
    window.addEventListener('resize', () => this.updateClasses());
  }
  
  updateClasses() {
    const width = window.innerWidth;
    const body = document.body;
    
    // Remove all responsive classes
    body.classList.remove('mobile', 'tablet', 'desktop');
    
    // Add appropriate class
    if (width < this.breakpoints.mobile) {
      body.classList.add('mobile');
    } else if (width < this.breakpoints.tablet) {
      body.classList.add('tablet');
    } else {
      body.classList.add('desktop');
    }
  }
}
```

### Form Validation Styling

```javascript
class FormValidator {
  constructor(form) {
    this.form = form;
    this.setupValidation();
  }
  
  setupValidation() {
    const inputs = this.form.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
      input.addEventListener('blur', () => this.validateField(input));
      input.addEventListener('input', () => this.clearErrors(input));
    });
  }
  
  validateField(field) {
    const isValid = field.checkValidity();
    const errorElement = field.parentElement.querySelector('.error-message');
    
    if (isValid) {
      field.classList.remove('invalid');
      field.classList.add('valid');
      if (errorElement) errorElement.remove();
    } else {
      field.classList.remove('valid');
      field.classList.add('invalid');
      this.showError(field);
    }
  }
  
  showError(field) {
    const errorElement = document.createElement('span');
    errorElement.className = 'error-message';
    errorElement.textContent = field.validationMessage;
    errorElement.style.color = 'red';
    errorElement.style.fontSize = '12px';
    
    field.parentElement.appendChild(errorElement);
  }
  
  clearErrors(field) {
    field.classList.remove('invalid', 'valid');
    const errorElement = field.parentElement.querySelector('.error-message');
    if (errorElement) errorElement.remove();
  }
}
```

## Best Practices

### Performance Considerations

```javascript
// Batch style changes to avoid multiple reflows
function efficientStyling(element) {
  // Bad - causes multiple reflows
  element.style.width = '100px';
  element.style.height = '100px';
  element.style.backgroundColor = 'red';
  
  // Better - batch changes
  element.style.cssText = 'width: 100px; height: 100px; background-color: red;';
  
  // Even better - use classes when possible
  element.className = 'styled-element';
}
```

### Error Handling

```javascript
function safeStyleSetting(element, property, value) {
  try {
    if (element && property && value) {
      element.style[property] = value;
    }
  } catch (error) {
    console.warn(`Failed to set ${property}: ${error.message}`);
  }
}

function safeAttributeGetting(element, attribute) {
  try {
    return element ? element.getAttribute(attribute) : null;
  } catch (error) {
    console.warn(`Failed to get attribute ${attribute}: ${error.message}`);
    return null;
  }
}
```

### CSS-in-JS Utility

```javascript
// Utility for CSS-in-JS with vendor prefixes
function setCSSProperty(element, property, value) {
  const prefixes = ['webkit', 'moz', 'ms', 'o'];
  
  // Try standard property first
  if (property in element.style) {
    element.style[property] = value;
    return;
  }
  
  // Try prefixed versions
  const capitalizedProperty = property.charAt(0).toUpperCase() + property.slice(1);
  
  for (const prefix of prefixes) {
    const prefixedProperty = prefix + capitalizedProperty;
    if (prefixedProperty in element.style) {
      element.style[prefixedProperty] = value;
      return;
    }
  }
  
  console.warn(`Property ${property} not supported`);
}
```

## Common Antipatterns to Avoid

### Avoid className Manipulation

```javascript
// Don't do this - overwrites all classes
logo.className = 'new-class';

// Do this instead - preserves existing classes
logo.classList.add('new-class');
```

### Avoid Reading Computed Styles in Loops

```javascript
// Inefficient - repeated style calculations
for (let element of elements) {
  const height = getComputedStyle(element).height; // Triggers reflow
  element.style.width = height;
}

// Better - batch the reads and writes
const heights = elements.map(el => getComputedStyle(el).height);
elements.forEach((el, i) => el.style.width = heights[i]);
```

### Avoid Inline Styles for Complex Styling

```javascript
// Hard to maintain
element.style.cssText = `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

// Better - use CSS classes
element.classList.add('centered-modal');
```