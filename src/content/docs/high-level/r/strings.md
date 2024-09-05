---
title: Strings
description: A guide in my new Starlight docs site.
sidebar:
  order: -7
---

## Assigning a string to a variable

In R, you can assign a string to a variable using the assignment operator `<-` or the equals sign `=`. Here's an example:

```R
# Using the assignment operator
my_string <- "Hello, world!"

# Using the equals sign
my_string = "Hello, world!"
```

## Multiline Strings

In R, you can create multiline strings by using the `paste()` function or by using triple quotes `"""`. Here's an example:

```R
# Using the paste() function
multiline_string <- paste("This is the first line",
                          "This is the second line",
                          "This is the third line")

# Using triple quotes
multiline_string <- """
This is the first line
This is the second line
This is the third line
"""
```

## Escape Characters

In R, you can use escape characters to include special characters within a string. Here are some commonly used escape characters:

- `\"` for double quote
- `\'` for single quote
- `\\` for backslash
- `\n` for newline
- `\t` for tab

Here's an example:

```R
# Using escape characters
escaped_string <- "This is a \"quoted\" string."
```

Remember to escape the backslash itself if you want to include it in the string:

```R
# Including a backslash in the string
backslash_string <- "This is a backslash: \\"
```

That's it! You now know how to work with strings in R.
