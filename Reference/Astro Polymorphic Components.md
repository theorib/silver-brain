---
tags:
  - astro
  - polymorphic
  - typescript
  - generic
---
# Astro Polymorphic Components

[link to docs](https://docs.astro.build/en/guides/typescript/#polymorphic-type)

```jsx
---
import type { HTMLTag, Polymorphic } from "astro/types";

type Props<Tag extends HTMLTag> = Polymorphic<{ as: Tag }>;

const { as: Tag, ...props } = Astro.props;
---
<Tag {...props} />
```