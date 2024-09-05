---
title: Links
description: A guide in my new Starlight docs site.
---
Links in CSS allow you to style and customize the appearance of hyperlinks on your web page. You can use CSS properties to change the color, font, size, and other visual aspects of links.

Here's an example of how you can style links in CSS:

```css
/* Styling the default link color */
a {
    color: blue;
}

/* Styling the link hover effect */
a:hover {
    color: red;
}

/* Styling the visited link color */
a:visited {
    color: purple;
}

/* Styling the active link color */
a:active {
    color: green;
}
```

In the above example, the `a` selector targets all anchor elements (links) on the page. The `color` property is used to change the link color. The `:hover` pseudo-class is used to apply styles when the link is being hovered over. The `:visited` pseudo-class is used to style visited links, and the `:active` pseudo-class is used to style links when they are being clicked.

You can also apply other CSS properties like `text-decoration`, `font-size`, and `font-weight` to further customize the appearance of links.

Remember to place this CSS code within a `<style>` tag or an external CSS file and link it to your HTML document using the `<link>` tag.
