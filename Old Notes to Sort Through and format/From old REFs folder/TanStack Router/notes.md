# TanStack Router Notes

## Using Links properly

When using the `Link` element, don't use template literals to fill dynamic params. Instead, pass them on to the `params` property. This way you mantain type safety accross changes in the route structure that you make which TanStack router will handle for you without you having to manually update links.

```typescript
<Link to="/blog/posts/$postId" params={{ postId: post.id }}>
  {post.title}
</Link>
```

## Transforming Route `params`

We can parse route params during route creation using the `params.parse` property that can be passed to the `createFileRoute` options. This way we can for example transform a string into a number for example and that will be passed along throughout the route context used.

We can also use the `params.stringify` property in the `createFileRoute` options to handle how we stringify those parsed parameters back into strings to be used in the url.

```typescript
import { z } from 'zod';

export const Route = createFileRoute('/blog/posts/$postId/')({
  component: RouteComponent,

  params: {
    parse: params => {
      const postId = z.number().int().parse(Number(params.postId));

      return { ...params, postId };
    },
    stringify: params => {
      const postIdString = String(params.postId);
      return {
        ...params,
        postId: postIdString,
      };
    },
  },
  ...loaders,
  ...otherProperties,
});
```

## Removing search params from the url when they are the default values using Search Middleware

Link to docs: [Search middleware to strip search params](https://tanstack.com/router/latest/docs/framework/react/api/router/stripSearchParamsFunction#search-middleware-to-strip-search-params)

```typescript
const productSearchSchema = z.object({
  page: fallback(z.number(), 1).default(1),
  filter: fallback(z.string(), '').default(''),
  sort: fallback(z.enum(['newest', 'oldest', 'price']), 'newest').default(
    'newest'
  ),
});

export const Route = createFileRoute('/shop/products/')({
  validateSearch: productSearchSchema,
  search: {
    middlewares: [stripSearchParams(productSearchSchema)],
  },
});
```
