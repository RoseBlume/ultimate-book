---
title: Events
description: A guide in my new Starlight docs site.
---
Events in JavaScript allow you to respond to actions or occurrences that happen in your web application. They are a fundamental part of building interactive and dynamic websites.

To work with events in JavaScript, you can use the `addEventListener` method to attach event handlers to specific elements. For example, to listen for a click event on a button with the id "myButton", you can write:

```javascript
const button = document.getElementById("myButton");
button.addEventListener("click", function() {
    // Your code here
});
```

You can also use inline event handlers directly in your HTML markup. For instance, to execute a function when a button is clicked, you can write:

```html
<button onclick="myFunction()">Click me</button>
```

In addition to the click event, JavaScript supports a wide range of events such as mouse events, keyboard events, form events, and more. You can find a comprehensive list of events in the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/Events) documentation.

When an event is triggered, the associated event handler function is executed. Inside the event handler, you can access the event object, which provides information about the event and its target element. This allows you to perform actions based on the event, manipulate the DOM, or update your application's state.

Remember to remove event listeners when they are no longer needed to prevent memory leaks. You can use the `removeEventListener` method to detach an event handler from an element.

Events are a powerful tool in JavaScript that enable you to create interactive and responsive web applications. By understanding how to work with events, you can enhance user experience and add interactivity to your projects.
