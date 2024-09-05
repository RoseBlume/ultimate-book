---
title: Scatterplot
description: A guide in my new Starlight docs site.
sidebar:
  order: 3
---
```R
# Scatterplot Example

## Introduction

In this tutorial, we will learn how to create a scatterplot using R. Scatterplots are useful for visualizing the relationship between two continuous variables.

## Getting Started

To create a scatterplot in R, we can use the `plot()` function. The `plot()` function takes two arguments: the x-axis variable and the y-axis variable.

Here's an example:

```R
# Create some sample data
x <- c(1, 2, 3, 4, 5)
y <- c(2, 4, 6, 8, 10)

# Create a scatterplot
plot(x, y)
```

This will create a scatterplot with `x` values on the x-axis and `y` values on the y-axis.

## Customizing the Scatterplot

We can customize the scatterplot by adding labels, titles, and changing the appearance of the points.

### Adding Labels

To add labels to the x-axis and y-axis, we can use the `xlab` and `ylab` arguments of the `plot()` function. For example:

```R
plot(x, y, xlab = "X Values", ylab = "Y Values")
```

### Adding a Title

To add a title to the scatterplot, we can use the `main` argument of the `plot()` function. For example:

```R
plot(x, y, main = "Scatterplot Example")
```

### Changing Point Appearance

We can change the appearance of the points in the scatterplot using the `pch` argument of the `plot()` function. The `pch` argument takes a numeric value that corresponds to a specific point symbol. For example:

```R
# Use open circles as points
plot(x, y, pch = 1)

# Use filled circles as points
plot(x, y, pch = 16)
```

## Conclusion

Scatterplots are a powerful tool for visualizing the relationship between two continuous variables. In this tutorial, we learned how to create a scatterplot using R and customize its appearance.

Happy plotting!
```
