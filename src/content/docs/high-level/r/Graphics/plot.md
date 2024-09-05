---
title: Plot
description: A guide in my new Starlight docs site.
sidebar:
  order: 1
---
```R
# Creating a basic plot
x <- c(1, 2, 3, 4, 5)
y <- c(2, 4, 6, 8, 10)
plot(x, y)

# Adding labels and title
xlab("X-axis")
ylab("Y-axis")
title("My First Plot")

# Changing plot type
plot(x, y, type = "l")

# Adding points to the line plot
points(x, y, col = "red")

# Adding a legend
legend("topright", legend = c("Line", "Points"), col = c("black", "red"), lty = c(1, 0), pch = c(NA, 1))
```