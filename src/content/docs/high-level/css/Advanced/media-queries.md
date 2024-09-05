---
title: Media Queries
description: A guide in my new Starlight docs site.
---
Media Queries in CSS allow you to apply different styles based on various conditions. Here are a few examples:

1. `prefers-color-scheme`: This media feature allows you to target devices that have a specific color scheme preference. For example, you can apply different styles for devices that prefer a light or dark color scheme. Here's an example:

```css
@media (prefers-color-scheme: dark) {
    body {
        background-color: #000;
        color: #fff;
    }
}
```

2. Screen Orientation: You can also target devices based on their screen orientation, such as landscape or portrait. Here's an example:

```css
@media (orientation: landscape) {
    /* Styles for landscape orientation */
}

@media (orientation: portrait) {
    /* Styles for portrait orientation */
}
```

3. Screen Sizes: Media queries can be used to apply styles based on the screen dimensions of the device. For example, you can target devices with a maximum width of 600 pixels. Here's an example:

```css
@media (max-width: 600px) {
    /* Styles for devices with a maximum width of 600px */
}
```

These are just a few examples of how media queries can be used in CSS to create responsive designs. You can combine multiple conditions and apply different styles based on the device's capabilities and user preferences.
