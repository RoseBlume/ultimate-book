---
title: Pie Charts
description: A guide in my new Starlight docs site.
sidebar:
  order: 4
---
```R
# Creating a Pie Chart in R

## Introduction
Pie charts are a useful visualization tool for displaying categorical data. In R, we can create pie charts using the `pie()` function.

## Syntax
The basic syntax for creating a pie chart in R is as follows:

```R
pie(x, labels, main, col, clockwise)
```

- `x`: A numeric vector containing the values for each category.
- `labels`: A character vector containing the labels for each category.
- `main`: The title of the pie chart.
- `col`: A vector of colors to use for each category.
- `clockwise`: A logical value indicating whether the slices should be drawn clockwise or counterclockwise.

## Example
Let's create a simple pie chart to visualize the distribution of fruits in a basket:

```R
fruits <- c("Apple", "Banana", "Orange", "Grapes")
counts <- c(10, 5, 8, 12)

pie(counts, labels = fruits, main = "Fruit Distribution")
```

This will create a pie chart with slices representing the different fruits and their corresponding counts.

## Customization
R provides various options for customizing pie charts, such as adding a legend, changing the colors, and adjusting the labels. You can explore these options in the R documentation for the `pie()` function.

## Conclusion
Pie charts are a simple yet effective way to visualize categorical data in R. By using the `pie()` function, you can easily create and customize pie charts to suit your needs.
```

Remember to replace the `$PLACEHOLDER$` in your original markdown with the above code.
