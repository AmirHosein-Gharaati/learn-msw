import { rest } from "msw";

const helloHandler = [
  rest.get("/hello", (req, res, ctx) => {
    return res(
      ctx.json({
        response: "Hello World from mock API",
      })
    );
  }),
];

export default helloHandler;
