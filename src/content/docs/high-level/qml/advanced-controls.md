---
title: Advanced Controls
sidebar:
  order: 5
---

## Slider

The `Slider` type provides a way to select a value from a range by sliding a handle along a track. It is commonly used to control values such as volume, brightness, or progress.

### Properties

- `minimumValue`: The minimum value of the slider.
- `maximumValue`: The maximum value of the slider.
- `value`: The current value of the slider.
- `stepSize`: The increment or decrement step size of the slider.
- `orientation`: The orientation of the slider (horizontal or vertical).

Example usage:

```qml
Slider {
    id: volumeSlider
    minimumValue: 0
    maximumValue: 100
    value: 50
    stepSize: 1
    orientation: Qt.Horizontal
}
```

## ProgressBar

The `ProgressBar` type represents a control that indicates the progress of a task or operation. It is commonly used to show the progress of file downloads, installations, or data loading.

### Properties

- `minimumValue`: The minimum value of the progress bar.
- `maximumValue`: The maximum value of the progress bar.
- `value`: The current value of the progress bar.
- `textVisible`: Whether to show the progress bar's value as text.

Example usage:

```qml
ProgressBar {
    id: fileDownloadProgressBar
    minimumValue: 0
    maximumValue: 100
    value: 50
    textVisible: true
}
```

## ComboBox

The `ComboBox` type provides a dropdown list of selectable items. It is commonly used to present a list of options for the user to choose from.

### Properties

- `model`: The model that provides the data for the combo box.
- `currentIndex`: The index of the currently selected item.
- `currentText`: The text of the currently selected item.
- `count`: The number of items in the combo box.

Example usage:

```qml
ComboBox {
    id: languageComboBox
    model: ["English", "Spanish", "French"]
    currentIndex: 0
}
```

## SpinBox

The `SpinBox` type provides a way to select a numeric value by incrementing or decrementing it using up and down buttons. It is commonly used to input numerical values.

### Properties

- `minimumValue`: The minimum value of the spin box.
- `maximumValue`: The maximum value of the spin box.
- `value`: The current value of the spin box.
- `stepSize`: The increment or decrement step size of the spin box.

Example usage:

```qml
SpinBox {
    id: quantitySpinBox
    minimumValue: 1
    maximumValue: 10
    value: 1
    stepSize: 1
}
```

## ListView

The `ListView` type provides a way to display a list of items that can be scrolled vertically or horizontally. It is commonly used to present large sets of data.

### Properties

- `model`: The model that provides the data for the list view.
- `delegate`: The visual item delegate used to display each item in the list view.
- `currentIndex`: The index of the currently selected item.
- `count`: The number of items in the list view.

Example usage:

```qml
ListView {
    id: contactListView
    model: contactModel
    delegate: ContactDelegate {}
    currentIndex: 0
}
```

## GridView

The `GridView` type provides a way to display items in a grid layout. It is commonly used to present a collection of images or icons.

### Properties

- `model`: The model that provides the data for the grid view.
- `delegate`: The visual item delegate used to display each item in the grid view.
- `currentIndex`: The index of the currently selected item.
- `count`: The number of items in the grid view.

Example usage:

```qml
GridView {
    id: imageGridView
    model: imageModel
    delegate: ImageDelegate {}
    currentIndex: 0
}
```