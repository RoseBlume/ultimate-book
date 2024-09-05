---
title: Links
description: A guide in my new Starlight docs site.
---

Links in HTML have the `<a>` tag. In order to specify a link, one must use the href attribute. For example a link to the Google homepage would be `<a href="https://google.com">Googles Homepage</a>` The target attribute controls where the link is opened. Most browsers just support the `_blank` and `_self` targets. The `_blank` target opens the link in a new tab while the `_self` target opens the link in the current tab.
There are two different kinds of links in html. A absolute link and a relative link. A relative link opens another html file relative to the current html files position. 
### Code
```html
<a href="https://google.com" >This is an absolute link</a>
<a href="otherpages/otherpage.html" > This is a relative link</a>
<a href="https://google.com" target="_blank">This page opens in another tab</a>
<a href="https://google.com" target="_self">This page opens in the current tab</a>
```
