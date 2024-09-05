---
title: Document Object Model
description: A guide in my new Starlight docs site.
---
The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the structure of a web page as a tree-like structure, where each node represents an element, attribute, or text.

Here are some commonly used methods of the DOM:

1. getElementById(): This method returns the element with the specified ID. For example:
```javascript
const element = document.getElementById('myElement');
```

2. getElementsByClassName(): This method returns a collection of elements with the specified class name. For example:
```javascript
const elements = document.getElementsByClassName('myClass');
```

3. getElementsByTagName(): This method returns a collection of elements with the specified tag name. For example:
```javascript
const elements = document.getElementsByTagName('div');
```

4. querySelector(): This method returns the first element that matches the specified CSS selector. For example:
```javascript
const element = document.querySelector('.myClass');
```

5. querySelectorAll(): This method returns a collection of elements that match the specified CSS selector. For example:
```javascript
const elements = document.querySelectorAll('div');
```

6. createElement(): This method creates a new element with the specified tag name. For example:
```javascript
const newElement = document.createElement('div');
```

7. appendChild(): This method appends a child element to a parent element. For example:
```javascript
parentElement.appendChild(childElement);
```

8. removeChild(): This method removes a child element from its parent element. For example:
```javascript
parentElement.removeChild(childElement);
```

These are just a few examples of the many methods available in the DOM. They allow you to manipulate the structure and content of a web page dynamically.
