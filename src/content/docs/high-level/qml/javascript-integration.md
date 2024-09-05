---
title: JavaScript Integration
sidebar:
  order: 10
---

## Using JavaScript for logic

In QML, you can use JavaScript to handle logic and perform calculations. JavaScript code can be embedded directly within QML components using the `Qt.createQmlObject()` function. Here's an example:

```qml
import QtQuick 2.0

Rectangle {
    width: 200
    height: 200

    property int value1: 10
    property int value2: 20

    Text {
        text: "Sum: " + (value1 + value2)
        anchors.centerIn: parent
    }
}
```

In the above example, we define two properties `value1` and `value2` of type `int`. We then use JavaScript to calculate the sum of these two values and display it in a `Text` component.

## Signal handling

Signals are a way to communicate between QML components. You can define custom signals in QML and connect them to JavaScript functions. Here's an example:

```qml
import QtQuick 2.0

Rectangle {
    width: 200
    height: 200

    signal customSignal(string message)

    MouseArea {
        anchors.fill: parent
        onClicked: {
            customSignal("Button clicked!")
        }
    }

    Text {
        text: "Click the button"
        anchors.centerIn: parent
    }

    Connections {
        target: parent
        onCustomSignal: {
            console.log(message)
        }
    }
}
```

In the above example, we define a custom signal `customSignal` that takes a `string` parameter. When the `MouseArea` is clicked, we emit the signal with the message "Button clicked!". The `Connections` component connects the signal to a JavaScript function that logs the message to the console.

## Property bindings

Property bindings allow you to automatically update the value of a property when another property changes. This is useful for creating dynamic and responsive UIs. Here's an example:

```qml
import QtQuick 2.0

Rectangle {
    width: 200
    height: 200

    property int widthValue: 100
    property int heightValue: 100

    Rectangle {
        width: widthValue
        height: heightValue
        color: "red"
        anchors.centerIn: parent
    }

    Slider {
        from: 50
        to: 200
        value: widthValue
        onValueChanged: {
            widthValue = value
        }
    }
}
```

In the above example, we have two properties `widthValue` and `heightValue` of type `int`. The width and height of the inner `Rectangle` are bound to these properties, so when the `widthValue` or `heightValue` changes, the size of the `Rectangle` automatically updates. We use a `Slider` component to change the value of `widthValue`.

This is just a brief overview of using JavaScript in QML for logic, signal handling, and property bindings. There are many more features and capabilities available. For more information, refer to the [QML documentation](https://doc.qt.io/qt-5/qmlapplications.html).