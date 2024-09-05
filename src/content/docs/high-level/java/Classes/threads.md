---
title: Threads
sidebar:
  order: 24
---
# Threads in Java

In Java, a thread is a separate path of execution within a program. It allows multiple tasks to run concurrently, improving the overall performance of the application.

## Creating a Thread

There are two ways to create a thread in Java:

1. Extending the `Thread` class:
```java
class MyThread extends Thread {
    public void run() {
        // Code to be executed in the thread
    }
}

// Creating and starting the thread
MyThread thread = new MyThread();
thread.start();
```

2. Implementing the `Runnable` interface:
```java
class MyRunnable implements Runnable {
    public void run() {
        // Code to be executed in the thread
    }
}

// Creating and starting the thread
Thread thread = new Thread(new MyRunnable());
thread.start();
```

## Thread Synchronization

In multi-threaded environments, it's important to synchronize access to shared resources to avoid race conditions and ensure data consistency. Java provides the `synchronized` keyword and `Lock` interface for thread synchronization.

```java
class Counter {
    private int count = 0;

    public synchronized void increment() {
        count++;
    }
}

// Creating and starting multiple threads
Counter counter = new Counter();
Thread thread1 = new Thread(() -> {
    for (int i = 0; i < 1000; i++) {
        counter.increment();
    }
});
Thread thread2 = new Thread(() -> {
    for (int i = 0; i < 1000; i++) {
        counter.increment();
    }
});
thread1.start();
thread2.start();
```

## Thread Communication

Threads can communicate with each other using methods like `wait()`, `notify()`, and `notifyAll()`. These methods are used to coordinate the execution of multiple threads.

```java
class Message {
    private String content;
    private boolean isSent = false;

    public synchronized void send(String message) {
        while (isSent) {
            try {
                wait();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        this.content = message;
        isSent = true;
        notifyAll();
    }

    public synchronized String receive() {
        while (!isSent) {
            try {
                wait();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        isSent = false;
        notifyAll();
        return content;
    }
}

// Creating and starting multiple threads
Message message = new Message();
Thread senderThread = new Thread(() -> {
    message.send("Hello!");
});
Thread receiverThread = new Thread(() -> {
    String receivedMessage = message.receive();
    System.out.println(receivedMessage);
});
senderThread.start();
receiverThread.start();
```

Remember to handle exceptions and properly manage the lifecycle of threads to avoid resource leaks and unexpected behavior.

For more information, refer to the [Java Thread documentation](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Thread.html).
