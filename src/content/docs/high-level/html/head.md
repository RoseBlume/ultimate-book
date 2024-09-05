---
title: The Head Element
description: A guide in my new Starlight docs site.
---
The `<head>` element is a crucial part of an HTML document. It contains metadata and other non-visible information about the document. Here are some commonly used elements that can be nested within the `<head>` element:

1. `<title>`: This element specifies the title of the document, which is displayed in the browser's title bar or tab.

Example:
```html
<title>My Website</title>
```
Explanation: This sets the title of the webpage to "My Website".

2. `<meta>`: This element is used to provide metadata about the HTML document, such as character encoding, viewport settings, and keywords.

Example:
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
Explanation: The first `<meta>` element sets the character encoding to UTF-8, ensuring proper rendering of special characters. The second `<meta>` element sets the viewport to the device's width and initial scale, making the webpage responsive on different devices.

3. `<link>`: This element is used to link external stylesheets, icon files, or other external resources to the HTML document.

Example:
```html
<link rel="stylesheet" href="styles.css">
<link rel="icon" href="favicon.ico">
```
Explanation: The first `<link>` element links an external CSS file called "styles.css" to the HTML document, allowing you to style the webpage. The second `<link>` element links a favicon file (an icon displayed in the browser's tab) called "favicon.ico" to the HTML document.

4. `<base>`: This element specifies the base URL for all relative URLs within the document.

Example:
```html
<base href="https://example.com/">
```
Explanation: This sets the base URL for all relative URLs in the document to "https://example.com/". So, if you have an anchor tag with a relative URL like `<a href="/about">About</a>`, it will resolve to "https://example.com/about".

These are just a few examples of elements that can be nested within the `<head>` element. Remember to close the `<head>` element with `</head>` after including all necessary elements.
