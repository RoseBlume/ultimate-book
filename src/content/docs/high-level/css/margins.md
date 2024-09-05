---
title: Margins
description: A guide in my new Starlight docs site.
---
In CSS margins controls how much space is between different elements. Four different properties can be used to specify an elements margin.

#### Example
```css
p{
    margin-bottom: 2px;
    margin-top: 3px;
    margin-left:3px;
    margin-right: 2px;
}
```
The shorthand margin property takes 1-4 values.
When one value is specified the margin applies to all four sides
#### Example
```css
p {
    margin: 50px;
}
```

When two values are specified, the first value applies to the top and bottom, and the second value applies to the right and left sides.
#### Example
```css
p {
    margin: 50px 20px;
}
```

When three values are specified, the first value applies to the top, the second to the right and left sides, and the third to the bottom.
#### Example
```css
p {
    margin: 50px 20px 30px;
}
```

When four values are specified, the first value applies to the top, the second to the right, the third to the bottom, and the fourth to the left side.
#### Example
```css
p {
    margin: 50px 20px 30px 50px;
}
```

