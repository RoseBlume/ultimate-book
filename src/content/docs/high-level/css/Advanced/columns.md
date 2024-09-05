---
title: Multiple Columns
description: A guide in my new Starlight docs site.
---
Multiple columns in CSS and HTML allow you to create a layout where content is divided into multiple columns, similar to a newspaper or magazine. This can be useful for displaying long blocks of text or organizing content in a more visually appealing way.

To create multiple columns, you can use the CSS `column-count` property. This property specifies the number of columns you want to divide your content into. For example, if you want to divide your content into three columns, you can set `column-count: 3;`.

Here's an example of how you can use internal CSS to create multiple columns:

```html
<!DOCTYPE html>
<html>
<head>
<style>
    .column-container {
        column-count: 3;
        column-gap: 20px;
    }
</style>
</head>
<body>
    <div class="column-container">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc id aliquet tincidunt, odio nunc lacinia nunc, nec lacinia nunc nunc id nunc. Sed euismod, nunc id aliquet tincidunt, odio nunc lacinia nunc, nec lacinia nunc nunc id nunc.</p>
        <p>Nullam auctor, nunc id aliquet tincidunt, odio nunc lacinia nunc, nec lacinia nunc nunc id nunc. Sed euismod, nunc id aliquet tincidunt, odio nunc lacinia nunc, nec lacinia nunc nunc id nunc.</p>
        <p>Phasellus euismod, nunc id aliquet tincidunt, odio nunc lacinia nunc, nec lacinia nunc nunc id nunc. Sed euismod, nunc id aliquet tincidunt, odio nunc lacinia nunc, nec lacinia nunc nunc id nunc.</p>
    </div>
</body>
</html>
```

In the example above, the `column-container` class is applied to a `<div>` element that wraps the content we want to divide into columns. The `column-count` property is set to 3, which creates three columns. The `column-gap` property is used to add some spacing between the columns.

Remember to adjust the `column-count` and `column-gap` values according to your needs.

By using multiple columns, you can create a more visually appealing and organized layout for your content in CSS and HTML.
