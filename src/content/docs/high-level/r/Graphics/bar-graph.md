---
title: Bar Graphs
description: A guide in my new Starlight docs site.
sidebar:
  order: 5
---
```R
# Bar Graph Example

## Introduction
A bar graph is a common way to visualize categorical data. It displays data using rectangular bars, where the length of each bar represents the value of a specific category.

## Creating a Bar Graph
To create a bar graph in R, we can use the `barplot()` function. Here's an example:

```R
# Create a vector of data
data <- c(10, 15, 7, 12, 9)

# Create a bar graph
barplot(data)
```

This will create a simple bar graph with bars representing the values in the `data` vector.

## Customizing the Bar Graph
We can customize the appearance of the bar graph by specifying various parameters in the `barplot()` function. For example, we can add labels to the x-axis and y-axis, change the color of the bars, and add a title to the graph.

```R
# Create a vector of data
data <- c(10, 15, 7, 12, 9)

# Create a bar graph with customizations
barplot(data,
  xlab = "Categories",
  ylab = "Values",
  col = "blue",
  main = "Bar Graph Example")
```

In this example, we added labels to the x-axis and y-axis, changed the color of the bars to blue, and added a title to the graph.

## Conclusion
Bar graphs are a useful tool for visualizing categorical data in R. By using the `barplot()` function and customizing its parameters, we can create informative and visually appealing bar graphs.
```
