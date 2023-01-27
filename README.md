## Learn Mock Service Worker Using Typescript

In this project we implemented a basic scenario and usage about the
Mock Service Worker (MSW) to check how it works.

The project implemented using React, but MSW works for all
types of frameworks.

## Usage

Clone the repo and install packages with yarn:

```bash
yarn install
```

Run the project:

```bash
npm run start
```

## Quick cheat sheet

**handler**

```typescript
const handler = [
  rest.post<RequestType, ParamsType, ResponseType>(
    "/request-path",
    async (req, res, ctx) => {
      const { property } = (await req.json()) as RequestType;

      return res(
        ctx.json({
          key: "value",
        })
      );
    }
  ),
];
```

**Custom Response Composition**

delay with 1 second

```typescript
import { createResponseComposition, context } from "msw";

export const delayedResponse = createResponseComposition(undefined, [
  context.delay(1000),
]);
```
