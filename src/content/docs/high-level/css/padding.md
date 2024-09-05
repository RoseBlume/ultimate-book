---
title: Padding
description: A guide in my new Starlight docs site.
---
Padding controls the distance between the elements inner content and the border around said element.
#### Example
```css
p{
    padding-bottom: 2px;
    padding-top: 3px;
    padding-left:3px;
    padding-right: 2px;
}
```
The shorthand padding property takes one, two, three, and four values.
When one value is specified the padding applies to all four sides
#### Example
```css
p {
    padding: 50px;
}
```

When two values are specified, the first value applies to the top and bottom, and the second value applies to the right and left sides.
#### Example
```css
p {
    padding: 50px 20px;
}
```

When three values are specified, the first value applies to the top, the second to the right and left sides, and the third to the bottom.
#### Example
```css
p {
    padding: 50px 20px 30px;
}
```
When four values are specified, the first value applies to the top, the second to the right, the third to the bottom, and the fourth to the left side.
#### Example
```css
p {
    padding: 50px 20px 30px 50px;
}
```