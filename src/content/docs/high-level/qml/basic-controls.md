---
title: Basic Controls
sidebar:
  order: 4
---

## Button

Buttons are used to trigger an action when clicked. They can have various properties to customize their appearance and behavior.

### Properties

- `text`: Specifies the text displayed on the button.
- `enabled`: Determines whether the button is enabled or disabled.
- `onClicked`: Specifies the action to be performed when the button is clicked.

Example:

```qml
Button {
    text: "Click me"
    enabled: true
    onClicked: {
        // Perform some action
    }
}
```

## TextInput

Text inputs allow users to enter and edit text. They can have properties to control their behavior and appearance.

### Properties

- `text`: Specifies the text displayed in the input field.
- `placeholderText`: Specifies the placeholder text shown when the input field is empty.
- `readOnly`: Determines whether the input field is read-only or editable.

Example:

```qml
TextInput {
    text: "Enter text here"
    placeholderText: "Type something"
    readOnly: false
}
```

## Label

Labels are used to display static text. They are typically used to provide information or instructions to the user.

### Properties

- `text`: Specifies the text displayed by the label.
- `color`: Determines the color of the text.
- `font`: Specifies the font properties of the text.

Example:

```qml
Label {
    text: "Hello, world!"
    color: "black"
    font {
        family: "Arial"
        size: 16
        bold: true
    }
}
```

## CheckBox

Checkboxes allow users to select or deselect an option. They can have properties to control their state and appearance.

### Properties

- `checked`: Determines whether the checkbox is checked or unchecked.
- `text`: Specifies the text displayed next to the checkbox.

Example:

```qml
CheckBox {
    checked: true
    text: "Enable feature"
}
```

## RadioButton

Radio buttons allow users to select a single option from a group of options. They can have properties to control their state and appearance.

### Properties

- `checked`: Determines whether the radio button is selected or not.
- `text`: Specifies the text displayed next to the radio button.

Example:

```qml
RadioButton {
    checked: false
    text: "Option 1"
}
```
