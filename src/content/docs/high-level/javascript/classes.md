---
title: Classes
description: A guide in my new Starlight docs site.
---
## Classes in JavaScript

Classes are an essential part of object-oriented programming in JavaScript. They provide a way to define blueprints for creating objects with shared properties and methods.

To define a class in JavaScript, you can use the `class` keyword followed by the class name. Here's an example:

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
}
```

In the above example, we define a `Person` class with a constructor method that takes `name` and `age` as parameters. The constructor assigns these values to the respective properties of the object. We also have a `sayHello` method that logs a greeting message to the console.

To create an instance of a class, you can use the `new` keyword followed by the class name and any required arguments. Here's how you can create a `Person` object:

```javascript
const john = new Person('John Doe', 25);
john.sayHello(); // Output: Hello, my name is John Doe and I'm 25 years old.
```

You can also define class methods and properties that are shared among all instances of the class. These can be accessed using the class name itself. Here's an example:

```javascript
class Circle {
    static PI = 3.14159;

    static calculateArea(radius) {
        return Circle.PI * radius * radius;
    }
}

console.log(Circle.calculateArea(5)); // Output: 78.53975
```

In the above example, we define a `Circle` class with a static property `PI` and a static method `calculateArea`. The static method can be called directly on the class without creating an instance.

Classes in JavaScript also support inheritance, allowing you to create subclasses that inherit properties and methods from a parent class. This can be achieved using the `extends` keyword. Here's an example:

```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog('Buddy');
dog.speak(); // Output: Buddy barks.
```

In the above example, we define an `Animal` class with a `speak` method. We then create a `Dog` class that extends the `Animal` class and overrides the `speak` method.

Classes in JavaScript provide a powerful way to organize and structure your code, making it easier to work with objects and their behaviors.