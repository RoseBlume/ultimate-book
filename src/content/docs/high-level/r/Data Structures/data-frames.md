---
title: Data Frames
description: A guide in my new Starlight docs site.
sidebar:
  order: 5
---
```R
# Creating a Data Frame
df <- data.frame(
  Name = c("John", "Jane", "Mike"),
  Age = c(25, 30, 35),
  Salary = c(50000, 60000, 70000)
)

# Accessing Data Frame Columns
names <- df$Name
ages <- df$Age
salaries <- df$Salary

# Accessing Data Frame Rows
first_row <- df[1, ]
second_row <- df[2, ]
third_row <- df[3, ]

# Modifying Data Frame
df$Salary <- df$Salary * 1.1

# Adding a New Column
df$Gender <- c("Male", "Female", "Male")

# Removing a Column
df <- df[, -4]

# Filtering Data Frame
filtered_df <- df[df$Age > 30, ]

# Sorting Data Frame
sorted_df <- df[order(df$Salary), ]

# Summarizing Data Frame
summary_df <- summary(df)
```