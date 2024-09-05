---
title: Overflow
description: A guide in my new Starlight docs site.
---
Overflow in CSS is a property that controls how content is displayed when it exceeds the size of its container. It is commonly used to handle situations where content overflows horizontally or vertically.

There are four values that can be used with the `overflow` property:

1. `visible` (default): Content is not clipped and may overflow its container.
2. `hidden`: Content that overflows is clipped and not visible.
3. `scroll`: Content that overflows is clipped, but a scrollbar is added to allow scrolling.
4. `auto`: Content is clipped if it overflows, and a scrollbar is added only if necessary.

Here are some examples:

```css
.container {
    width: 200px;
    height: 100px;
    border: 1px solid black;
    overflow: hidden;
}

.container-overflow-visible {
    width: 200px;
    height: 100px;
    border: 1px solid black;
    overflow: visible;
}

.container-overflow-scroll {
    width: 200px;
    height: 100px;
    border: 1px solid black;
    overflow: scroll;
}

.container-overflow-auto {
    width: 200px;
    height: 100px;
    border: 1px solid black;
    overflow: auto;
}
```

In the above examples, the `.container` element has `overflow: hidden`, which means any content that exceeds its dimensions will be clipped and not visible. The `.container-overflow-visible` element has `overflow: visible`, allowing the content to overflow and be visible outside the container. The `.container-overflow-scroll` element has `overflow: scroll`, which adds a scrollbar to the container when the content overflows. Lastly, the `.container-overflow-auto` element has `overflow: auto`, which behaves like `scroll` but only adds a scrollbar when necessary.

Remember to adjust the dimensions and styles according to your specific needs.
