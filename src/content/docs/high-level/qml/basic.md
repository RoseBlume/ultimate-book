---
title: Basic
sidebar:
  order: 2
---

## QML Basic Types

QML is a declarative language used for designing user interfaces. It provides a set of basic types that can be used to create interactive and visually appealing applications. In this section, we will explore some of the basic types in QML and their properties.

### 1. Item

The `Item` type is the base type for all visual items in QML. It provides the basic functionality for positioning and rendering items on the screen. Some of the commonly used properties of the `Item` type include:

- `x`: Specifies the x-coordinate of the item's position.
- `y`: Specifies the y-coordinate of the item's position.
- `width`: Specifies the width of the item.
- `height`: Specifies the height of the item.
- `visible`: Specifies whether the item is visible or not.

Example usage of `Item` type in QML:

```qml
Item {
    width: 200
    height: 200
    visible: true
}
```

### 2. Rectangle

The `Rectangle` type is used to draw rectangular shapes in QML. It inherits all the properties of the `Item` type and adds additional properties for specifying the color and border of the rectangle. Some of the commonly used properties of the `Rectangle` type include:

- `color`: Specifies the fill color of the rectangle.
- `border.color`: Specifies the color of the rectangle's border.
- `border.width`: Specifies the width of the rectangle's border.

Example usage of `Rectangle` type in QML:

```qml
Rectangle {
    width: 200
    height: 100
    color: "red"
    border.color: "black"
    border.width: 2
}
```

### 3. Text

The `Text` type is used to display text in QML. It inherits all the properties of the `Item` type and adds additional properties for specifying the font, color, and content of the text. Some of the commonly used properties of the `Text` type include:

- `text`: Specifies the content of the text.
- `font.family`: Specifies the font family of the text.
- `font.pixelSize`: Specifies the pixel size of the text.

Example usage of `Text` type in QML:

```qml
Text {
    text: "Hello, World!"
    font.family: "Arial"
    font.pixelSize: 20
}
```

### 4. Image

The `Image` type is used to display images in QML. It inherits all the properties of the `Item` type and adds additional properties for specifying the source and size of the image. Some of the commonly used properties of the `Image` type include:

- `source`: Specifies the source URL of the image.
- `width`: Specifies the width of the image.
- `height`: Specifies the height of the image.

Example usage of `Image` type in QML:

```qml
Image {
    source: "image.png"
    width: 200
    height: 200
}
```

These are just a few examples of the basic types available in QML. By combining these types and their properties, you can create rich and interactive user interfaces in QML.
