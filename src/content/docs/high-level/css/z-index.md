---
title: Z-Index
description: A guide in my new Starlight docs site.
---
The `z-index` property controls what layer the element appears on the page. The higher the value the closer to the top the element appears at.

#### Example
```css
p {
    position: Fixed;
    top: 20px;
    left: 30px;
    z-index:2; /*This will appear above elements that have a z-index lower than 2*/
}
```