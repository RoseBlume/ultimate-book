---
title: Line
description: A guide in my new Starlight docs site.
sidebar:
  order: 2
---
# Line

In R, a line is a fundamental element used in data visualization. It is commonly used to represent trends, relationships, or patterns in data.

## Creating a Line Plot

To create a line plot in R, you can use the `plot()` function with the `type = "l"` argument. Here's an example:

```R
# Create some sample data
x <- c(1, 2, 3, 4, 5)
y <- c(2, 4, 6, 8, 10)

# Create a line plot
plot(x, y, type = "l", xlab = "X", ylab = "Y", main = "Line Plot")
```

In the above example, we first define two vectors `x` and `y` to represent the x and y coordinates of the points on the line. Then, we use the `plot()` function with `type = "l"` to create a line plot. The `xlab`, `ylab`, and `main` arguments are used to label the x-axis, y-axis, and the main title of the plot, respectively.

## Customizing the Line Plot

You can customize various aspects of the line plot in R. Here are some common customization options:

- Changing line color: You can use the `col` argument in the `plot()` function to specify the line color. For example, `plot(x, y, type = "l", col = "red")` will create a red line.

- Adding markers: You can add markers to the line plot using the `pch` argument in the `plot()` function. For example, `plot(x, y, type = "b", pch = 16)` will create a line with circular markers.

- Adjusting line thickness: You can control the thickness of the line using the `lwd` argument in the `plot()` function. For example, `plot(x, y, type = "l", lwd = 2)` will create a line with a thickness of 2.

## Conclusion

In this guide, we learned how to create and customize line plots in R. Line plots are a powerful tool for visualizing trends and patterns in data. Experiment with different customization options to create visually appealing and informative line plots in your R projects.
