import { PathParams, rest } from "msw";
import { LoginRequest, LoginResponse } from "../../types/user.type";

const userHandler = [
  rest.post<LoginRequest, PathParams<string>, LoginResponse>(
    "/login",
    async (req, res, ctx) => {
      const { password, username } = (await req.json()) as LoginRequest;

      if (username === "Amir" && password === "123") {
        return res(
          ctx.json({
            access: "1a2b3c4d",
            refresh: "0l7n5ff",
          })
        );
      } else {
        return res(ctx.status(404, "Username or password was wrong"));
      }
    }
  ),
];

export default userHandler;
