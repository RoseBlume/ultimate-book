---
title: Inline-block
description: A guide in my new Starlight docs site.
---
The `display` property in CSS is used to define how an element should be rendered on the web page. There are three commonly used values for the `display` property: `inline`, `block`, and `inline-block`.

- `inline`: An element with `display: inline` is rendered inline with the surrounding content. It does not start on a new line and only takes up as much width as necessary. Examples of inline elements include `<span>`, `<a>`, and `<strong>`. Here's an example:

```css
.inline-example {
    display: inline;
    border: 1px solid black;
    padding: 5px;
}
```

- `block`: An element with `display: block` is rendered as a block-level element. It starts on a new line and takes up the full width available. Examples of block elements include `<div>`, `<p>`, and `<h1>`. Here's an example:

```css
.block-example {
    display: block;
    border: 1px solid black;
    padding: 10px;
    margin-bottom: 10px;
}
```

- `inline-block`: An element with `display: inline-block` is rendered inline like an inline element, but it can have a width and height like a block-level element. It starts on a new line only if necessary. Examples of inline-block elements include `<img>`, `<button>`, and `<input>`. Here's an example:

```css
.inline-block-example {
    display: inline-block;
    width: 200px;
    height: 100px;
    border: 1px solid black;
    padding: 10px;
    margin-right: 10px;
}
```

By using the `display` property with these values, you can control the layout and behavior of elements on your web page.
