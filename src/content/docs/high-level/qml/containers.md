---
title: Containers
sidebar:
  order: 6
---

## QML Containers

In QML, containers are used to organize and manage the layout of user interface elements. They provide a way to group and arrange items within a visual hierarchy. Here are some commonly used QML containers:

1. **ApplicationWindow**: The `ApplicationWindow` container represents the main window of an application. It provides a top-level window with a title bar, content area, and optional status bar.

   Example:
   ```qml
   ApplicationWindow {
       title: "My App"
       width: 800
       height: 600
       // Content goes here
   }
   ```

   Properties:
   - `title`: The title displayed in the window's title bar.
   - `width`: The width of the window.
   - `height`: The height of the window.
   - ...

2. **Page**: The `Page` container represents a single page within an application. It is typically used in conjunction with a `StackView` to create a multi-page application.

   Example:
   ```qml
   Page {
       title: "Home"
       // Page content goes here
   }
   ```

   Properties:
   - `title`: The title displayed in the page's header.
   - `contentItem`: The item that represents the content of the page.
   - ...

3. **StackView**: The `StackView` container manages a stack of pages, allowing navigation between them. It provides a way to implement a hierarchical navigation flow in an application.

   Example:
   ```qml
   StackView {
       initialItem: page1
       // Add more pages here
   }
   ```

   Properties:
   - `initialItem`: The initial page to display in the stack.
   - `push`: Pushes a new page onto the stack.
   - `pop`: Pops the top page from the stack.
   - ...

4. **TabView**: The `TabView` container represents a set of tabs, each containing a separate page. It provides a way to switch between different views or sections within an application.

   Example:
   ```qml
   TabView {
       Tab {
           title: "Tab 1"
           // Tab 1 content goes here
       }
       Tab {
           title: "Tab 2"
           // Tab 2 content goes here
       }
   }
   ```

   Properties:
   - `currentIndex`: The index of the currently selected tab.
   - `addTab`: Adds a new tab to the tab view.
   - `removeTab`: Removes a tab from the tab view.
   - ...

These are just a few examples of QML containers. Each container has its own set of properties and functionality, allowing you to create complex and dynamic user interfaces in QML.
