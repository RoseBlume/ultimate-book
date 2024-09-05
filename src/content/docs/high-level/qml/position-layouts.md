---
title: Positioning And Layouts
sidebar:
  order: 3
---
## Positioning And Layouts

In QML, positioning and layouts are essential for creating dynamic and responsive user interfaces. This page provides an overview of different types of positioning and layout techniques available in QML.

### 1. Anchors

Anchors allow you to position items relative to other items or the parent item. They provide a flexible way to handle different screen sizes and orientations. The following properties are commonly used with anchors:

- `anchors.left`: Specifies the distance between the item's left edge and the left edge of the anchor target.
- `anchors.right`: Specifies the distance between the item's right edge and the right edge of the anchor target.
- `anchors.top`: Specifies the distance between the item's top edge and the top edge of the anchor target.
- `anchors.bottom`: Specifies the distance between the item's bottom edge and the bottom edge of the anchor target.
- `anchors.horizontalCenter`: Specifies the horizontal center of the item relative to the anchor target.
- `anchors.verticalCenter`: Specifies the vertical center of the item relative to the anchor target.

Here's an example of using anchors in QML:

```qml
Rectangle {
  width: 200
  height: 100
  color: "red"

  Text {
    text: "Anchored Text"
    anchors.centerIn: parent
  }
}
```

### 2. Row

The `Row` layout allows you to arrange items horizontally in a row. It automatically positions items side by side, adjusting their sizes based on available space. Some commonly used properties of `Row` are:

- `spacing`: Specifies the spacing between items in the row.
- `Layout.alignment`: Specifies the alignment of items within the row.

Here's an example of using `Row` layout in QML:

```qml
RowLayout {
  spacing: 10

  Rectangle {
    width: 50
    height: 50
    color: "blue"
  }

  Rectangle {
    width: 100
    height: 50
    color: "green"
  }
}
```

### 3. Column

The `Column` layout allows you to arrange items vertically in a column. It automatically positions items one below the other, adjusting their sizes based on available space. Some commonly used properties of `Column` are:

- `spacing`: Specifies the spacing between items in the column.
- `Layout.alignment`: Specifies the alignment of items within the column.

Here's an example of using `Column` layout in QML:

```qml
ColumnLayout {
  spacing: 10

  Rectangle {
    width: 50
    height: 50
    color: "blue"
  }

  Rectangle {
    width: 50
    height: 100
    color: "green"
  }
}
```

### 4. Grid

The `Grid` layout allows you to arrange items in a grid-like structure with rows and columns. It provides a flexible way to create complex layouts. Some commonly used properties of `Grid` are:

- `rows`: Specifies the number of rows in the grid.
- `columns`: Specifies the number of columns in the grid.
- `spacing`: Specifies the spacing between items in the grid.
- `Layout.alignment`: Specifies the alignment of items within the grid.

Here's an example of using `Grid` layout in QML:

```qml
GridLayout {
  rows: 2
  columns: 2
  spacing: 10

  Rectangle {
    width: 50
    height: 50
    color: "blue"
  }

  Rectangle {
    width: 50
    height: 50
    color: "green"
  }

  Rectangle {
    width: 50
    height: 50
    color: "red"
  }

  Rectangle {
    width: 50
    height: 50
    color: "yellow"
  }
}
```

### 5. Flow

The `Flow` layout allows you to arrange items in a flow-like manner, either horizontally or vertically. It automatically positions items one after another, adjusting their sizes based on available space. Some commonly used properties of `Flow` are:

- `flow: Flow.LeftToRight` or `flow: Flow.TopToBottom`: Specifies the flow direction of items.
- `spacing`: Specifies the spacing between items in the flow.
- `Layout.alignment`: Specifies the alignment of items within the flow.

Here's an example of using `Flow` layout in QML:

```qml
Flow {
  flow: Flow.LeftToRight
  spacing: 10

  Rectangle {
    width: 50
    height: 50
    color: "blue"
  }

  Rectangle {
    width: 100
    height: 50
    color: "green"
  }

  Rectangle {
    width: 75
    height: 75
    color: "red"
  }
}
```

These are just a few examples of positioning and layout techniques available in QML. Experiment with different properties and layouts to create visually appealing and responsive user interfaces.

1. Anchors
2. Row
3. Column
4. Grid
5. Flow