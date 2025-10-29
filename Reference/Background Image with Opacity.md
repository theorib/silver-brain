---
tags:
  - tailwind
  - background-image
  - opacity
---
# Achieving background image with opacity in Tailwind CSS
```html
<div class="bg-[linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),url(img/hero-bg.jpg)] bg-cover bg-center bg-no-repeat">
```

Or adding it to your theme:
```css
@theme {
  --background-image-hero: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(img/hero-bg.jpg);
}
```

```html
<div class="bg-hero bg-cover bg-center bg-no-repeat">
```