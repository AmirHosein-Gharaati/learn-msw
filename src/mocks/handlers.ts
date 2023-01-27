import { rest } from "msw";

export const handlers = [
  rest.get("/hello", (req, res, ctx) => {
    return res(
      ctx.json({
        response: "Hello World from mock API",
      })
    );
  }),
];
