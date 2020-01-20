---
title: "CSS Selector"
date: "2020-01-20"
---

### Common Selectors

Before diving too deep into some of the more complex selectors, and those offered within CSS3, let's take a quick look at some of the more common selectors seen today. These selectors include the type, class, and ID selectors.

The **type** selector identifies an element based on its type, specifically how that element is declared within HTML. The **class** selector identifies an element based on its class attribute value, which may be reused on multiple elements as necessary to help share popular styles. Lastly, the **ID** selector identifies an element based on its ID attribute value, which is unique and should only be used once per page.

#### CSS
```css
h1 {...}
.tagline {...}
#intro {...}
```

#### HTML
```html
<section id="intro">
  <h1>...</h1>
  <h2 class="tagline">...</h2>
</section>
```

#### Common Selectors Overview
|Example|Classification|Explanation|
|--|--|--|
|h1|Type Selector|Selects an element by its type|
|.tagline|Class Selector|Selects an element by the class attribute value, which may be reused multiple times per page|
|#intro|ID Selector|Selects an element by the ID attribute value, which is unique and to only be used once per page|
