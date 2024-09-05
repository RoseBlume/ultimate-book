---
title: Audio
description: A guide in my new Starlight docs site.
---
### The `<audio>` element.
The `audio` element contains clickable controls for audio tracks using the `controls` attribute. Adding the `autoplay` attribute to the `audio` element causes the audio to begin playing as soon as they are loaded in. In order to specify the source audio you must nest the `source` element and specify the path to the audio by defining the `src` attribute.

### Example
```html
<audio controls autoplay>
  <source src="dog.ogg" type="audio/ogg">
  <source src="dog.mp3" type="audio/mpeg">
</audio>
```