---
title: Position
description: A guide in my new Starlight docs site.
---
The `position` property in CSS allows you to control the positioning of an element on a web page. It has four possible values:

1. `static`: This is the default value. Elements with `position: static` are positioned according to the normal flow of the document. They are not affected by the `top`, `bottom`, `left`, `right`, or `z-index` properties.

2. `relative`: Elements with `position: relative` are positioned relative to their normal position. You can use the `top`, `bottom`, `left`, and `right` properties to offset the element from its normal position. Other elements on the page will not be affected by the relative positioning.

Example:
```css
.my-element {
    position: relative;
    top: 20px;
    left: 10px;
}
```

3. `fixed`: Elements with `position: fixed` are positioned relative to the viewport, which means they will always stay in the same place even if the page is scrolled. You can use the `top`, `bottom`, `left`, and `right` properties to specify the exact position of the element.

Example:
```css
.my-element {
    position: fixed;
    top: 0;
    right: 0;
}
```

4. `absolute`: Elements with `position: absolute` are positioned relative to their closest positioned ancestor. If there is no positioned ancestor, they are positioned relative to the initial containing block (usually the `<body>` element). You can use the `top`, `bottom`, `left`, and `right` properties to specify the exact position of the element.

Example:
```css
.my-element {
    position: absolute;
    top: 50%;
    left: 50%;
}
```

5. `sticky`: Elements with `position: sticky` are positioned based on the user's scroll position. They behave like `relative` elements until the user scrolls to a certain point, then they become `fixed` and stay in place. You can use the `top`, `bottom`, `left`, and `right` properties to specify the offset from the scrolling container.

Example:
```css
.my-element {
    position: sticky;
    top: 20px;
}
```

The `sticky` value is commonly used for creating sticky headers or navigation bars that stick to the top of the page when scrolling.

