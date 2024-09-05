---
title: Transitions
description: A guide in my new Starlight docs site.
---
Transitions in CSS allow you to smoothly animate changes in CSS properties over a specified duration. They provide a way to add visual effects and enhance user experience on your website or application.

To create a transition, you need to specify the CSS property you want to animate and the duration of the transition. For example, let's say you want to animate the background color of an element when the user hovers over it:

```css
.element {
    background-color: blue;
    transition: background-color 0.3s;
}

.element:hover {
    background-color: red;
}
```

In this example, when the user hovers over the element, the background color will transition from blue to red over a duration of 0.3 seconds.

You can also specify additional properties such as timing function and delay to further customize the transition. The timing function determines the speed curve of the transition, allowing you to create effects like ease-in, ease-out, or linear. The delay property allows you to introduce a delay before the transition starts.

```css
.element {
    background-color: blue;
    transition: background-color 0.3s ease-in-out 0.2s;
}

.element:hover {
    background-color: red;
}
```

In this updated example, the transition will start with a delay of 0.2 seconds and have an ease-in-out timing function, creating a smoother effect.

Transitions can be applied to various CSS properties, including color, size, position, opacity, and more. By combining transitions with other CSS features like pseudo-classes and media queries, you can create dynamic and interactive user interfaces.

Remember to experiment and play around with different properties and values to achieve the desired visual effects. Transitions are a powerful tool in CSS that can greatly enhance the user experience of your website or application.
