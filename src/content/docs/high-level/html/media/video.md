---
title: Video
description: A guide in my new Starlight docs site.
---
### The `<video>` element
Just like with the audio element the source is defined within the `<source>` element. In order to play video on most browsers it is also required that the `type` attribute be defined. 

```html
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
</video>
```