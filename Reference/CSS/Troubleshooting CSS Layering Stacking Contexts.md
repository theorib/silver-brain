---
tags:
  - css
  - layers
  - stacking-context
  - opacity
  - layering
---
# Troubleshooting CSS Layering Stacking Contexts

Properties that create stacking contexts:
- `opacity` (any value other than `none`)
- `transform` (any value other than `none`)
- `filter` (any value other than `none`)
- `backdrop-filter`
- `clip-path`
- `mask` / `mask-image`
- `mix-blend-mode`
- `isolation: isolate`
- `will-change` (if it specifies any property that would create a stacking context)
- `position: fixed` or `position: sticky`
- `position: relative/absolute` with `z-index` other than `auto`

Problems with Stacking contexts:
1. **New Stacking Context Created**: That element becomes the root of a new stacking context
2. **Child Elements Trapped**: All children are now positioned relative to this new context, not the original one
3. **Z-index Isolation**: Z-index values of children can no longer compete with elements outside this context

Even when dealing with sibling elements, applying properties that create a new stacking context can be problematic:

## Default Layering (Without Opacity)

By default, later elements in the DOM appear on top of earlier ones (assuming same positioning context):

```html
<div class="bg-half-sun"><!-- appears behind --></div>
<h1><!-- appears on top (it comes later in DOM) --></h1>
```

## With Opacity Applied

When you add `opacity: 0.9` to `.bg-half-sun`:

```html
<div class="bg-half-sun opacity-90"><!-- NEW stacking context! --></div>
<h1><!-- Still in the default stacking context --></h1>
```

**The problem**: The element with opacity gets "promoted" in the stacking order because it created a new stacking context. This can cause it to appear **above** siblings that come later in the DOM, even without any `z-index`

## Why This Happens

Elements that create stacking contexts are painted in a specific order within their parent:

1. Background and borders of the parent
2. Negative z-index stacking contexts
3. Block-level descendants in normal flow
4. Floats
5. Inline descendants in normal flow
6. **Positioned elements and stacking contexts (like opacity) with z-index: auto or 0**
7. Positive z-index stacking contexts