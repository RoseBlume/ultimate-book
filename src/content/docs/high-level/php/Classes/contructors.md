---
title: Constructors
sidebar:
  order: 3
---
Constructors in PHP are special methods within a class that are automatically called when an object of that class is created. They are used to initialize the object's properties or perform any necessary setup tasks.

To define a constructor in PHP, you use the `__construct()` method. This method has the same name as the class and does not have a return type. Here's an example:

```php
class MyClass {
  public function __construct() {
    // Constructor code here
  }
}
```

You can also pass parameters to the constructor to initialize the object with specific values. For example:

```php
class Person {
  private $name;

  public function __construct($name) {
    $this->name = $name;
  }
}
```

In the above example, the constructor takes a `$name` parameter and assigns it to the `$name` property of the object.

Constructors can be useful for performing tasks such as initializing properties, establishing database connections, or setting up dependencies. They are called automatically when an object is created using the `new` keyword.

Remember that a class can have only one constructor. If you define multiple constructors with different parameter lists, only the last one defined will be used.
