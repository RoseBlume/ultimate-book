---
title: Animation and Transitions
sidebar:
  order: 8
---

## Animation and Transitions

In QML, animations and transitions are powerful tools for creating dynamic and interactive user interfaces. They allow you to animate properties of QML objects, providing smooth and visually appealing effects.

### 1. PropertyAnimation

The `PropertyAnimation` type is used to animate a single property of a QML object. It allows you to specify the target property, the duration of the animation, and the easing curve.

Example:

```qml
Rectangle {
    id: rect
    width: 100
    height: 100
    color: "red"

    PropertyAnimation {
        target: rect
        property: "width"
        to: 200
        duration: 1000
        easing.type: Easing.InOutQuad
    }
}
```

Properties available for `PropertyAnimation`:
- `target`: Specifies the object to animate.
- `property`: Specifies the property to animate.
- `from`: Specifies the initial value of the property.
- `to`: Specifies the final value of the property.
- `duration`: Specifies the duration of the animation in milliseconds.
- `easing.type`: Specifies the easing curve for the animation.

### 2. NumberAnimation

The `NumberAnimation` type is used to animate numeric properties of QML objects. It allows you to specify the target property, the duration of the animation, and the easing curve.

Example:

```qml
Rectangle {
    id: rect
    width: 100
    height: 100
    color: "blue"

    NumberAnimation {
        target: rect
        property: "height"
        to: 200
        duration: 1000
        easing.type: Easing.InOutQuad
    }
}
```

Properties available for `NumberAnimation`:
- `target`: Specifies the object to animate.
- `property`: Specifies the property to animate.
- `from`: Specifies the initial value of the property.
- `to`: Specifies the final value of the property.
- `duration`: Specifies the duration of the animation in milliseconds.
- `easing.type`: Specifies the easing curve for the animation.

### 3. SequentialAnimation

The `SequentialAnimation` type is used to create a sequence of animations. It allows you to specify multiple animations that will be played one after another.

Example:

```qml
Rectangle {
    id: rect
    width: 100
    height: 100
    color: "green"

    SequentialAnimation {
        NumberAnimation {
            target: rect
            property: "width"
            to: 200
            duration: 1000
            easing.type: Easing.InOutQuad
        }

        NumberAnimation {
            target: rect
            property: "height"
            to: 200
            duration: 1000
            easing.type: Easing.InOutQuad
        }
    }
}
```

Properties available for `SequentialAnimation`:
- `animations`: Specifies the list of animations to play sequentially.

### 4. ParallelAnimation

The `ParallelAnimation` type is used to create a group of animations that will be played simultaneously. It allows you to specify multiple animations that will be played at the same time.

Example:

```qml
Rectangle {
    id: rect
    width: 100
    height: 100
    color: "yellow"

    ParallelAnimation {
        NumberAnimation {
            target: rect
            property: "width"
            to: 200
            duration: 1000
            easing.type: Easing.InOutQuad
        }

        NumberAnimation {
            target: rect
            property: "height"
            to: 200
            duration: 1000
            easing.type: Easing.InOutQuad
        }
    }
}
```

Properties available for `ParallelAnimation`:
- `animations`: Specifies the list of animations to play simultaneously.

### 5. Transition

The `Transition` type is used to define animations that are triggered by changes in property values. It allows you to specify the target property, the duration of the animation, and the easing curve.

Example:

```qml
Rectangle {
    id: rect
    width: 100
    height: 100
    color: "orange"

    states: [
        State {
            name: "expanded"
            PropertyChanges {
                target: rect
                width: 200
                height: 200
            }
        },
        State {
            name: "collapsed"
            PropertyChanges {
                target: rect
                width: 100
                height: 100
            }
        }
    ]

    transitions: [
        Transition {
            from: "collapsed"
            to: "expanded"
            NumberAnimation {
                target: rect
                property: "opacity"
                duration: 1000
                easing.type: Easing.InOutQuad
            }
        },
        Transition {
            from: "expanded"
            to: "collapsed"
            NumberAnimation {
                target: rect
                property: "opacity"
                duration: 1000
                easing.type: Easing.InOutQuad
            }
        }
    ]
}
```

Properties available for `Transition`:
- `from`: Specifies the starting state of the transition.
- `to`: Specifies the ending state of the transition.
- `NumberAnimation` or `PropertyAnimation`: Specifies the animation to be played during the transition.

