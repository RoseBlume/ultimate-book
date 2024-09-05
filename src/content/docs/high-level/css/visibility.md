---
title: Visibility
description: A guide in my new Starlight docs site.
---
Visibility in CSS determines whether an element is visible or hidden on a web page. It is controlled using the `visibility` property.

The `visibility` property accepts two values: `visible` and `hidden`. 

When set to `visible`, the element is displayed as normal. It occupies space on the page and is visible to the user.

On the other hand, when set to `hidden`, the element is not displayed, but it still occupies space on the page. It is effectively invisible, but its space is preserved.

Unlike the `display` property, which completely removes an element from the document flow, the `visibility` property only affects the visibility of the element while keeping its layout intact.

To apply the `visibility` property to an element, you can use CSS selectors to target the desired element and set its `visibility` value accordingly.

Here's an example:

```css
.my-element {
    visibility: hidden;
}
```

In this example, the element with the class `my-element` will be hidden on the page.

It's important to note that hiding an element with `visibility: hidden` still allows it to be interacted with by JavaScript or screen readers. If you want to completely remove an element from the document flow, you can use the `display` property with a value of `none`.

Remember to use `visibility` when you want to hide an element while preserving its space, and use `display: none` when you want to remove it from the document flow entirely.
