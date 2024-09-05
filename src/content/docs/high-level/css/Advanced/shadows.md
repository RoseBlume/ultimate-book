---
title: Shadows
description: A guide in my new Starlight docs site.
---
Shadows in CSS allow you to add depth and dimension to your elements. You can create shadows using the `box-shadow` property. The `box-shadow` property takes in values for the horizontal offset, vertical offset, blur radius, spread radius, and color of the shadow.

Here's an example of how you can use `box-shadow`:

```css
.my-element {
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}
```

In this example, the shadow will be positioned 2 pixels to the right and 2 pixels down from the element, with a blur radius of 4 pixels. The color of the shadow is specified using the `rgba()` function, where the first three values represent the RGB color values and the fourth value represents the opacity.

You can also create multiple shadows by comma-separating the values:

```css
.my-element {
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2), -2px -2px 4px rgba(255, 255, 255, 0.2);
}
```

In this example, two shadows are applied to the element: one with a positive offset and a darker color, and another with a negative offset and a lighter color.

Experiment with different values for the `box-shadow` property to achieve the desired shadow effect. You can also use CSS transitions and animations to create dynamic shadow effects.

Remember to always end your CSS rules with a semicolon to ensure proper syntax.
